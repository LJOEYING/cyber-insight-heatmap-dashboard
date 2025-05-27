
import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { mitreData, type AttackDetail, type Technique, type SubTechnique } from '@/data/mitreData';

interface MitreHeatmapProps {
  filters: {
    user: string;
    endpoint: string;
    timePeriod: string;
    organization: string[];
    showSubTechniques: boolean;
    showMitigations: boolean;
    showEvents: boolean;
    showPotentialAttacks: boolean;
    showSuccessfulAttacks: boolean;
  };
}

const MitreHeatmap: React.FC<MitreHeatmapProps> = ({ filters }) => {
  const [expandedTechniques, setExpandedTechniques] = useState<Set<string>>(new Set());

  const filterAttacks = (attacks: AttackDetail[]): AttackDetail[] => {
    return attacks.filter(attack => {
      if (filters.user && !attack.user.toLowerCase().includes(filters.user.toLowerCase())) {
        return false;
      }
      if (filters.endpoint && !attack.endpoint.toLowerCase().includes(filters.endpoint.toLowerCase())) {
        return false;
      }
      if (filters.organization.length > 0 && !filters.organization.includes(attack.organization)) {
        return false;
      }
      return true;
    });
  };

  const filteredData = useMemo(() => {
    return mitreData.map(tactic => ({
      ...tactic,
      techniques: tactic.techniques.map(technique => ({
        ...technique,
        attacks: filterAttacks(technique.attacks),
        subTechniques: technique.subTechniques.map(subTechnique => ({
          ...subTechnique,
          attacks: filterAttacks(subTechnique.attacks)
        }))
      }))
    }));
  }, [filters]);

  const getIntensityColor = (attackCount: number): string => {
    if (attackCount === 0) return 'bg-white border-gray-200';
    if (attackCount <= 2) return 'bg-blue-100 border-blue-200';
    if (attackCount <= 5) return 'bg-orange-100 border-orange-200';
    return 'bg-red-100 border-red-200';
  };

  const getIntensityTextColor = (attackCount: number): string => {
    if (attackCount === 0) return 'text-gray-600';
    if (attackCount <= 2) return 'text-blue-800';
    if (attackCount <= 5) return 'text-orange-800';
    return 'text-red-800';
  };

  const toggleTechnique = (techniqueId: string) => {
    const newExpanded = new Set(expandedTechniques);
    if (newExpanded.has(techniqueId)) {
      newExpanded.delete(techniqueId);
    } else {
      newExpanded.add(techniqueId);
    }
    setExpandedTechniques(newExpanded);
  };

  const AttackTooltip: React.FC<{ attacks: AttackDetail[]; children: React.ReactNode }> = ({ attacks, children }) => {
    if (attacks.length === 0) {
      return <>{children}</>;
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent className="max-w-sm p-3 bg-gray-900 text-white">
          <div className="space-y-2">
            <div className="font-semibold border-b border-gray-700 pb-1">
              {attacks.length} Attack{attacks.length > 1 ? 's' : ''} Detected
            </div>
            {attacks.slice(0, 3).map((attack, index) => (
              <div key={attack.id} className="text-xs space-y-1">
                <div><strong>User:</strong> {attack.user}</div>
                <div><strong>Endpoint:</strong> {attack.endpoint}</div>
                <div><strong>Time:</strong> {new Date(attack.timestamp).toLocaleString()}</div>
                <div><strong>Organization:</strong> {attack.organization}</div>
                <div><strong>Severity:</strong> 
                  <span className={`ml-1 px-1 rounded text-xs ${
                    attack.severity === 'high' ? 'bg-red-600' : 
                    attack.severity === 'medium' ? 'bg-orange-600' : 'bg-blue-600'
                  }`}>
                    {attack.severity}
                  </span>
                </div>
                <div><strong>Description:</strong> {attack.description}</div>
                <div><strong>Status:</strong> {attack.mitigated ? 'Mitigated' : 'Active'}</div>
                {index < Math.min(attacks.length - 1, 2) && <hr className="border-gray-700" />}
              </div>
            ))}
            {attacks.length > 3 && (
              <div className="text-xs text-gray-400 pt-1">
                +{attacks.length - 3} more attack{attacks.length - 3 > 1 ? 's' : ''}
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    );
  };

  const TechniqueCard: React.FC<{ technique: Technique; shouldShow: boolean }> = ({ technique, shouldShow }) => {
    if (!shouldShow) return null;

    const attackCount = technique.attacks.length;
    const hasSubTechniques = technique.subTechniques.length > 0;
    const isExpanded = expandedTechniques.has(technique.id);

    return (
      <div>
        <AttackTooltip attacks={technique.attacks}>
          <div
            className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${getIntensityColor(attackCount)}`}
            onClick={() => hasSubTechniques && toggleTechnique(technique.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className={`font-medium text-sm ${getIntensityTextColor(attackCount)}`}>
                  {technique.name}
                </div>
                <div className={`text-xs ${getIntensityTextColor(attackCount)}`}>
                  {technique.id}
                </div>
                <div className={`text-xs ${getIntensityTextColor(attackCount)}`}>
                  {attackCount} attack{attackCount !== 1 ? 's' : ''}
                </div>
              </div>
              {hasSubTechniques && (
                <div className={`ml-2 ${getIntensityTextColor(attackCount)}`}>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
              )}
            </div>
          </div>
        </AttackTooltip>
        
        {isExpanded && hasSubTechniques && filters.showSubTechniques && (
          <div className="ml-4 space-y-1 mt-1">
            {technique.subTechniques.map((subTechnique) => (
              <SubTechniqueCard key={subTechnique.id} subTechnique={subTechnique} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const SubTechniqueCard: React.FC<{ subTechnique: SubTechnique }> = ({ subTechnique }) => {
    const attackCount = subTechnique.attacks.length;

    return (
      <AttackTooltip attacks={subTechnique.attacks}>
        <div className={`p-2 rounded-md border text-xs ${getIntensityColor(attackCount)}`}>
          <div className={`font-medium ${getIntensityTextColor(attackCount)}`}>
            {subTechnique.name}
          </div>
          <div className={getIntensityTextColor(attackCount)}>
            {subTechnique.id}
          </div>
          <div className={getIntensityTextColor(attackCount)}>
            {attackCount} attack{attackCount !== 1 ? 's' : ''}
          </div>
        </div>
      </AttackTooltip>
    );
  };

  return (
    <TooltipProvider>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">MITRE ATT&CK Heatmap</h2>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">Legend:</div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-white border border-gray-200 rounded"></div>
                <span className="text-xs text-gray-600">None</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded"></div>
                <span className="text-xs text-gray-600">Low (1-2)</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-orange-100 border border-orange-200 rounded"></div>
                <span className="text-xs text-gray-600">Medium (3-5)</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
                <span className="text-xs text-gray-600">High (6+)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <div className="inline-flex space-x-4 min-w-full">
            {filteredData.map((tactic) => (
              <div key={tactic.id} className="flex-shrink-0 w-72">
                <div className="bg-gray-50 border border-gray-200 rounded-t-lg p-3 text-center">
                  <h3 className="font-semibold text-gray-900 text-sm">{tactic.name}</h3>
                </div>
                <div className="border-l border-r border-b border-gray-200 rounded-b-lg space-y-1 p-2">
                  {tactic.techniques.map((technique) => (
                    <TechniqueCard 
                      key={technique.id} 
                      technique={technique} 
                      shouldShow={true}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MitreHeatmap;
