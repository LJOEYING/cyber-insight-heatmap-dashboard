
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { mitreData, Attack, Technique, SubTechnique } from '@/data/mitreData';
import AttackTooltip from './AttackTooltip';

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
  const [tooltip, setTooltip] = useState<{
    isVisible: boolean;
    attacks: Attack[];
    techniqueName: string;
    position: { x: number; y: number };
  }>({
    isVisible: false,
    attacks: [],
    techniqueName: '',
    position: { x: 0, y: 0 }
  });

  const filterAttacks = (attacks: Attack[]): Attack[] => {
    return attacks.filter(attack => {
      // Filter by user
      if (filters.user && !attack.user.toLowerCase().includes(filters.user.toLowerCase())) {
        return false;
      }
      
      // Filter by endpoint
      if (filters.endpoint && !attack.endpoint.toLowerCase().includes(filters.endpoint.toLowerCase())) {
        return false;
      }
      
      // Filter by organization
      if (filters.organization.length > 0 && !filters.organization.includes(attack.organization)) {
        return false;
      }
      
      // Filter by time period
      const attackDate = new Date(attack.timestamp);
      const now = new Date();
      const daysAgo = {
        '7days': 7,
        '30days': 30,
        '90days': 90
      }[filters.timePeriod] || 30;
      
      const cutoffDate = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
      if (attackDate < cutoffDate) {
        return false;
      }
      
      return true;
    });
  };

  const getFilteredAttackCount = (attacks: Attack[]): number => {
    return filterAttacks(attacks).length;
  };

  const getIntensityColor = (attacks: number): string => {
    if (attacks === 0) return 'bg-white border-gray-200';
    if (attacks <= 2) return 'bg-blue-100 border-blue-200';
    if (attacks <= 5) return 'bg-orange-100 border-orange-200';
    return 'bg-red-100 border-red-200';
  };

  const getIntensityTextColor = (attacks: number): string => {
    if (attacks === 0) return 'text-gray-600';
    if (attacks <= 2) return 'text-blue-800';
    if (attacks <= 5) return 'text-orange-800';
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

  const handleMouseEnter = (event: React.MouseEvent, attacks: Attack[], techniqueName: string) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      isVisible: true,
      attacks: filterAttacks(attacks),
      techniqueName,
      position: {
        x: rect.left + rect.width / 2,
        y: rect.top
      }
    });
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, isVisible: false }));
  };

  const renderTechnique = (technique: Technique) => {
    const filteredAttacks = getFilteredAttackCount(technique.attacks);
    const hasSubTechniques = technique.subTechniques.length > 0;
    const showSubTechniques = filters.showSubTechniques && hasSubTechniques;

    return (
      <div key={technique.id}>
        <div
          className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${getIntensityColor(filteredAttacks)}`}
          onClick={() => showSubTechniques && toggleTechnique(technique.id)}
          onMouseEnter={(e) => handleMouseEnter(e, technique.attacks, technique.name)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className={`font-medium text-sm ${getIntensityTextColor(filteredAttacks)}`}>
                {technique.name}
              </div>
              <div className={`text-xs ${getIntensityTextColor(filteredAttacks)}`}>
                {filteredAttacks} attacks
              </div>
            </div>
            {showSubTechniques && (
              <div className={`ml-2 ${getIntensityTextColor(filteredAttacks)}`}>
                {expandedTechniques.has(technique.id) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
            )}
          </div>
        </div>
        
        {showSubTechniques && expandedTechniques.has(technique.id) && (
          <div className="ml-4 space-y-1 mt-1">
            {technique.subTechniques.map((subTechnique) => {
              const subFilteredAttacks = getFilteredAttackCount(subTechnique.attacks);
              return (
                <div
                  key={subTechnique.id}
                  className={`p-2 rounded-md border text-xs cursor-pointer transition-all duration-200 hover:shadow-sm ${getIntensityColor(subFilteredAttacks)}`}
                  onMouseEnter={(e) => handleMouseEnter(e, subTechnique.attacks, subTechnique.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`font-medium ${getIntensityTextColor(subFilteredAttacks)}`}>
                    {subTechnique.name}
                  </div>
                  <div className={getIntensityTextColor(subFilteredAttacks)}>
                    {subFilteredAttacks} attacks
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const calculateTotalAttacks = () => {
    let total = 0;
    mitreData.forEach(tactic => {
      tactic.techniques.forEach(technique => {
        total += getFilteredAttackCount(technique.attacks);
        technique.subTechniques.forEach(subTechnique => {
          total += getFilteredAttackCount(subTechnique.attacks);
        });
      });
    });
    return total;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-gray-900">MITRE ATT&CK Heatmap</h2>
          <div className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
            Total: {calculateTotalAttacks()} attacks
          </div>
        </div>
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
          {mitreData.map((tactic) => (
            <div key={tactic.id} className="flex-shrink-0 w-72">
              <div className="bg-gray-50 border border-gray-200 rounded-t-lg p-3 text-center">
                <h3 className="font-semibold text-gray-900 text-sm">{tactic.name}</h3>
              </div>
              <div className="border-l border-r border-b border-gray-200 rounded-b-lg space-y-1 p-2 min-h-[200px]">
                {tactic.techniques.map(renderTechnique)}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <AttackTooltip
        attacks={tooltip.attacks}
        techniqueName={tooltip.techniqueName}
        isVisible={tooltip.isVisible}
        position={tooltip.position}
      />
    </div>
  );
};

export default MitreHeatmap;
