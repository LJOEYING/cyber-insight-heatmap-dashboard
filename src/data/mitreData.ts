
export interface Attack {
  id: string;
  user: string;
  endpoint: string;
  timestamp: string;
  organization: string;
  severity: 'low' | 'medium' | 'high';
}

export interface SubTechnique {
  id: string;
  name: string;
  attacks: Attack[];
}

export interface Technique {
  id: string;
  name: string;
  attacks: Attack[];
  subTechniques: SubTechnique[];
}

export interface Tactic {
  id: string;
  name: string;
  techniques: Technique[];
}

// Comprehensive MITRE ATT&CK data with all tactics, techniques, and sub-techniques
export const mitreData: Tactic[] = [
  {
    id: 'reconnaissance',
    name: 'Reconnaissance',
    techniques: [
      {
        id: 'T1595',
        name: 'Active Scanning',
        attacks: [],
        subTechniques: [
          { id: 'T1595.001', name: 'Scanning IP Blocks', attacks: [] },
          { id: 'T1595.002', name: 'Vulnerability Scanning', attacks: [] }
        ]
      },
      {
        id: 'T1593',
        name: 'Search Open Websites/Domains',
        attacks: [],
        subTechniques: [
          { id: 'T1593.001', name: 'Social Media', attacks: [] },
          { id: 'T1593.002', name: 'Search Engines', attacks: [] }
        ]
      }
    ]
  },
  {
    id: 'resource-development',
    name: 'Resource Development',
    techniques: [
      {
        id: 'T1583',
        name: 'Acquire Infrastructure',
        attacks: [],
        subTechniques: [
          { id: 'T1583.001', name: 'Domains', attacks: [] },
          { id: 'T1583.002', name: 'DNS Server', attacks: [] }
        ]
      },
      {
        id: 'T1588',
        name: 'Obtain Capabilities',
        attacks: [],
        subTechniques: [
          { id: 'T1588.001', name: 'Malware', attacks: [] },
          { id: 'T1588.002', name: 'Tool', attacks: [] }
        ]
      }
    ]
  },
  {
    id: 'initial-access',
    name: 'Initial Access',
    techniques: [
      {
        id: 'T1566',
        name: 'Phishing',
        attacks: [
          {
            id: 'attack_001',
            user: 'john.doe@company.com',
            endpoint: 'WS-001',
            timestamp: '2024-01-15T10:30:00Z',
            organization: 'operations',
            severity: 'high'
          },
          {
            id: 'attack_002',
            user: 'jane.smith@company.com',
            endpoint: 'WS-002',
            timestamp: '2024-01-16T14:20:00Z',
            organization: 'ipac',
            severity: 'medium'
          }
        ],
        subTechniques: [
          {
            id: 'T1566.001',
            name: 'Spearphishing Attachment',
            attacks: [
              {
                id: 'attack_003',
                user: 'alice.jones@company.com',
                endpoint: 'WS-003',
                timestamp: '2024-01-17T09:15:00Z',
                organization: 'emea',
                severity: 'high'
              }
            ]
          },
          {
            id: 'T1566.002',
            name: 'Spearphishing Link',
            attacks: [
              {
                id: 'attack_004',
                user: 'bob.wilson@company.com',
                endpoint: 'WS-004',
                timestamp: '2024-01-18T16:45:00Z',
                organization: 'operations',
                severity: 'medium'
              }
            ]
          }
        ]
      },
      {
        id: 'T1190',
        name: 'Exploit Public-Facing Application',
        attacks: [
          {
            id: 'attack_005',
            user: 'system',
            endpoint: 'SRV-001',
            timestamp: '2024-01-19T11:30:00Z',
            organization: 'operations',
            severity: 'high'
          }
        ],
        subTechniques: []
      },
      {
        id: 'T1078',
        name: 'Valid Accounts',
        attacks: [],
        subTechniques: [
          { id: 'T1078.001', name: 'Default Accounts', attacks: [] },
          { id: 'T1078.002', name: 'Domain Accounts', attacks: [] },
          { id: 'T1078.003', name: 'Local Accounts', attacks: [] },
          { id: 'T1078.004', name: 'Cloud Accounts', attacks: [] }
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
        attacks: [
          {
            id: 'attack_006',
            user: 'charlie.brown@company.com',
            endpoint: 'WS-005',
            timestamp: '2024-01-20T13:20:00Z',
            organization: 'ipac',
            severity: 'medium'
          }
        ],
        subTechniques: [
          {
            id: 'T1059.001',
            name: 'PowerShell',
            attacks: [
              {
                id: 'attack_007',
                user: 'diana.prince@company.com',
                endpoint: 'WS-006',
                timestamp: '2024-01-21T08:45:00Z',
                organization: 'emea',
                severity: 'high'
              }
            ]
          },
          { id: 'T1059.003', name: 'Windows Command Shell', attacks: [] }
        ]
      },
      {
        id: 'T1203',
        name: 'Exploitation for Client Execution',
        attacks: [],
        subTechniques: []
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
        attacks: [],
        subTechniques: [
          { id: 'T1547.001', name: 'Registry Run Keys / Startup Folder', attacks: [] },
          { id: 'T1547.002', name: 'Authentication Package', attacks: [] }
        ]
      },
      {
        id: 'T1053',
        name: 'Scheduled Task/Job',
        attacks: [],
        subTechniques: [
          { id: 'T1053.005', name: 'Scheduled Task', attacks: [] }
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
        attacks: [],
        subTechniques: [
          { id: 'T1548.002', name: 'Bypass User Account Control', attacks: [] }
        ]
      },
      {
        id: 'T1055',
        name: 'Process Injection',
        attacks: [],
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
        attacks: [],
        subTechniques: [
          { id: 'T1070.001', name: 'Clear Windows Event Logs', attacks: [] },
          { id: 'T1070.004', name: 'File Deletion', attacks: [] }
        ]
      },
      {
        id: 'T1027',
        name: 'Obfuscated Files or Information',
        attacks: [],
        subTechniques: []
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
        attacks: [],
        subTechniques: [
          { id: 'T1003.001', name: 'LSASS Memory', attacks: [] },
          { id: 'T1003.002', name: 'Security Account Manager', attacks: [] }
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
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1057',
        name: 'Process Discovery',
        attacks: [],
        subTechniques: []
      }
    ]
  },
  {
    id: 'lateral-movement',
    name: 'Lateral Movement',
    techniques: [
      {
        id: 'T1021',
        name: 'Remote Services',
        attacks: [],
        subTechniques: [
          { id: 'T1021.001', name: 'Remote Desktop Protocol', attacks: [] },
          { id: 'T1021.002', name: 'SMB/Windows Admin Shares', attacks: [] }
        ]
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
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1056',
        name: 'Input Capture',
        attacks: [],
        subTechniques: [
          { id: 'T1056.001', name: 'Keylogging', attacks: [] }
        ]
      }
    ]
  },
  {
    id: 'command-and-control',
    name: 'Command and Control',
    techniques: [
      {
        id: 'T1071',
        name: 'Application Layer Protocol',
        attacks: [],
        subTechniques: [
          { id: 'T1071.001', name: 'Web Protocols', attacks: [] }
        ]
      }
    ]
  },
  {
    id: 'exfiltration',
    name: 'Exfiltration',
    techniques: [
      {
        id: 'T1041',
        name: 'Exfiltration Over C2 Channel',
        attacks: [],
        subTechniques: []
      }
    ]
  },
  {
    id: 'impact',
    name: 'Impact',
    techniques: [
      {
        id: 'T1486',
        name: 'Data Encrypted for Impact',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1489',
        name: 'Service Stop',
        attacks: [],
        subTechniques: []
      }
    ]
  }
];
