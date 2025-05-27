
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SubTechnique {
  id: string;
  name: string;
  attacks: number;
}

interface Technique {
  id: string;
  name: string;
  attacks: number;
  subTechniques: SubTechnique[];
}

interface Tactic {
  id: string;
  name: string;
  techniques: Technique[];
}

const MitreHeatmap: React.FC = () => {
  const [expandedTechniques, setExpandedTechniques] = useState<Set<string>>(new Set());

  const getIntensityColor = (attacks: number): string => {
    if (attacks === 0) return 'bg-white border-gray-200';
    if (attacks <= 5) return 'bg-blue-100 border-blue-200';
    if (attacks <= 15) return 'bg-orange-100 border-orange-200';
    return 'bg-red-100 border-red-200';
  };

  const getIntensityTextColor = (attacks: number): string => {
    if (attacks === 0) return 'text-gray-600';
    if (attacks <= 5) return 'text-blue-800';
    if (attacks <= 15) return 'text-orange-800';
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

  const tactics: Tactic[] = [
    {
      id: 'initial-access',
      name: 'Initial Access',
      techniques: [
        {
          id: 'T1566',
          name: 'Phishing',
          attacks: 23,
          subTechniques: [
            { id: 'T1566.001', name: 'Spearphishing Attachment', attacks: 15 },
            { id: 'T1566.002', name: 'Spearphishing Link', attacks: 8 }
          ]
        },
        {
          id: 'T1190',
          name: 'Exploit Public-Facing Application',
          attacks: 12,
          subTechniques: []
        },
        {
          id: 'T1078',
          name: 'Valid Accounts',
          attacks: 8,
          subTechniques: [
            { id: 'T1078.003', name: 'Local Accounts', attacks: 5 },
            { id: 'T1078.004', name: 'Cloud Accounts', attacks: 3 }
          ]
        }
      ]
    },
    {
      id: 'execution',
      name: 'Execution',
      techniques: [
        {
          id: 'T1059',
          name: 'Command and Scripting Interpreter',
          attacks: 18,
          subTechniques: [
            { id: 'T1059.001', name: 'PowerShell', attacks: 10 },
            { id: 'T1059.003', name: 'Windows Command Shell', attacks: 8 }
          ]
        },
        {
          id: 'T1203',
          name: 'Exploitation for Client Execution',
          attacks: 7,
          subTechniques: []
        },
        {
          id: 'T1204',
          name: 'User Execution',
          attacks: 14,
          subTechniques: [
            { id: 'T1204.002', name: 'Malicious File', attacks: 14 }
          ]
        }
      ]
    },
    {
      id: 'persistence',
      name: 'Persistence',
      techniques: [
        {
          id: 'T1547',
          name: 'Boot or Logon Autostart Execution',
          attacks: 9,
          subTechniques: [
            { id: 'T1547.001', name: 'Registry Run Keys', attacks: 6 },
            { id: 'T1547.004', name: 'Winlogon Helper DLL', attacks: 3 }
          ]
        },
        {
          id: 'T1053',
          name: 'Scheduled Task/Job',
          attacks: 11,
          subTechniques: [
            { id: 'T1053.005', name: 'Scheduled Task', attacks: 11 }
          ]
        }
      ]
    },
    {
      id: 'privilege-escalation',
      name: 'Privilege Escalation',
      techniques: [
        {
          id: 'T1548',
          name: 'Abuse Elevation Control Mechanism',
          attacks: 6,
          subTechniques: [
            { id: 'T1548.002', name: 'Bypass User Access Control', attacks: 6 }
          ]
        },
        {
          id: 'T1055',
          name: 'Process Injection',
          attacks: 4,
          subTechniques: []
        }
      ]
    },
    {
      id: 'defense-evasion',
      name: 'Defense Evasion',
      techniques: [
        {
          id: 'T1070',
          name: 'Indicator Removal',
          attacks: 13,
          subTechniques: [
            { id: 'T1070.004', name: 'File Deletion', attacks: 8 },
            { id: 'T1070.001', name: 'Clear Windows Event Logs', attacks: 5 }
          ]
        },
        {
          id: 'T1027',
          name: 'Obfuscated Files or Information',
          attacks: 16,
          subTechniques: [
            { id: 'T1027.002', name: 'Software Packing', attacks: 10 },
            { id: 'T1027.005', name: 'Indicator Removal from Tools', attacks: 6 }
          ]
        }
      ]
    },
    {
      id: 'credential-access',
      name: 'Credential Access',
      techniques: [
        {
          id: 'T1003',
          name: 'OS Credential Dumping',
          attacks: 8,
          subTechniques: [
            { id: 'T1003.001', name: 'LSASS Memory', attacks: 5 },
            { id: 'T1003.002', name: 'Security Account Manager', attacks: 3 }
          ]
        }
      ]
    },
    {
      id: 'discovery',
      name: 'Discovery',
      techniques: [
        {
          id: 'T1083',
          name: 'File and Directory Discovery',
          attacks: 12,
          subTechniques: []
        },
        {
          id: 'T1057',
          name: 'Process Discovery',
          attacks: 9,
          subTechniques: []
        }
      ]
    },
    {
      id: 'collection',
      name: 'Collection',
      techniques: [
        {
          id: 'T1005',
          name: 'Data from Local System',
          attacks: 7,
          subTechniques: []
        }
      ]
    }
  ];

  return (
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
              <span className="text-xs text-gray-600">Low (1-5)</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-orange-100 border border-orange-200 rounded"></div>
              <span className="text-xs text-gray-600">Medium (6-15)</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
              <span className="text-xs text-gray-600">High (16+)</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <div className="inline-flex space-x-4 min-w-full">
          {tactics.map((tactic) => (
            <div key={tactic.id} className="flex-shrink-0 w-72">
              <div className="bg-gray-50 border border-gray-200 rounded-t-lg p-3 text-center">
                <h3 className="font-semibold text-gray-900 text-sm">{tactic.name}</h3>
              </div>
              <div className="border-l border-r border-b border-gray-200 rounded-b-lg space-y-1 p-2">
                {tactic.techniques.map((technique) => (
                  <div key={technique.id}>
                    <div
                      className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${getIntensityColor(technique.attacks)}`}
                      onClick={() => technique.subTechniques.length > 0 && toggleTechnique(technique.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className={`font-medium text-sm ${getIntensityTextColor(technique.attacks)}`}>
                            {technique.name}
                          </div>
                          <div className={`text-xs ${getIntensityTextColor(technique.attacks)}`}>
                            {technique.attacks} attacks
                          </div>
                        </div>
                        {technique.subTechniques.length > 0 && (
                          <div className={`ml-2 ${getIntensityTextColor(technique.attacks)}`}>
                            {expandedTechniques.has(technique.id) ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {expandedTechniques.has(technique.id) && technique.subTechniques.length > 0 && (
                      <div className="ml-4 space-y-1 mt-1">
                        {technique.subTechniques.map((subTechnique) => (
                          <div
                            key={subTechnique.id}
                            className={`p-2 rounded-md border text-xs ${getIntensityColor(subTechnique.attacks)}`}
                          >
                            <div className={`font-medium ${getIntensityTextColor(subTechnique.attacks)}`}>
                              {subTechnique.name}
                            </div>
                            <div className={getIntensityTextColor(subTechnique.attacks)}>
                              {subTechnique.attacks} attacks
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MitreHeatmap;
