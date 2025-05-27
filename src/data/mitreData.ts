
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
        attacks: [
          {
            id: 'attack_recon_001',
            user: 'system',
            endpoint: 'SRV-SCAN-01',
            timestamp: '2024-01-10T08:30:00Z',
            organization: 'operations',
            severity: 'medium'
          }
        ],
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
      },
      {
        id: 'T1590',
        name: 'Gather Victim Network Information',
        attacks: [],
        subTechniques: []
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
      },
      {
        id: 'T1587',
        name: 'Develop Capabilities',
        attacks: [],
        subTechniques: []
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
          },
          {
            id: 'attack_phish_003',
            user: 'mike.wilson@company.com',
            endpoint: 'WS-010',
            timestamp: '2024-01-20T09:45:00Z',
            organization: 'emea',
            severity: 'high'
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
          },
          {
            id: 'attack_exploit_001',
            user: 'system',
            endpoint: 'WEB-001',
            timestamp: '2024-01-22T13:15:00Z',
            organization: 'ipac',
            severity: 'high'
          }
        ],
        subTechniques: []
      },
      {
        id: 'T1078',
        name: 'Valid Accounts',
        attacks: [
          {
            id: 'attack_valid_001',
            user: 'admin@company.com',
            endpoint: 'SRV-002',
            timestamp: '2024-01-23T15:30:00Z',
            organization: 'operations',
            severity: 'medium'
          }
        ],
        subTechniques: [
          { id: 'T1078.001', name: 'Default Accounts', attacks: [] },
          { id: 'T1078.002', name: 'Domain Accounts', attacks: [] },
          { id: 'T1078.003', name: 'Local Accounts', attacks: [] },
          { id: 'T1078.004', name: 'Cloud Accounts', attacks: [] }
        ]
      },
      {
        id: 'T1091',
        name: 'Replication Through Removable Media',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1195',
        name: 'Supply Chain Compromise',
        attacks: [],
        subTechniques: []
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
          },
          {
            id: 'attack_script_001',
            user: 'sarah.connor@company.com',
            endpoint: 'WS-011',
            timestamp: '2024-01-24T10:15:00Z',
            organization: 'emea',
            severity: 'high'
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
              },
              {
                id: 'attack_ps_001',
                user: 'tech.admin@company.com',
                endpoint: 'WS-012',
                timestamp: '2024-01-25T16:30:00Z',
                organization: 'operations',
                severity: 'medium'
              }
            ]
          },
          { id: 'T1059.003', name: 'Windows Command Shell', attacks: [] },
          { id: 'T1059.006', name: 'Python', attacks: [] }
        ]
      },
      {
        id: 'T1203',
        name: 'Exploitation for Client Execution',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1204',
        name: 'User Execution',
        attacks: [
          {
            id: 'attack_user_exec_001',
            user: 'mary.jane@company.com',
            endpoint: 'WS-013',
            timestamp: '2024-01-26T11:20:00Z',
            organization: 'ipac',
            severity: 'medium'
          }
        ],
        subTechniques: []
      },
      {
        id: 'T1047',
        name: 'Windows Management Instrumentation',
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
        attacks: [
          {
            id: 'attack_persist_001',
            user: 'system',
            endpoint: 'WS-014',
            timestamp: '2024-01-27T07:30:00Z',
            organization: 'operations',
            severity: 'high'
          }
        ],
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
      },
      {
        id: 'T1136',
        name: 'Create Account',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1505',
        name: 'Server Software Component',
        attacks: [],
        subTechniques: []
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
        attacks: [
          {
            id: 'attack_priv_001',
            user: 'test.user@company.com',
            endpoint: 'WS-015',
            timestamp: '2024-01-28T14:45:00Z',
            organization: 'emea',
            severity: 'high'
          }
        ],
        subTechniques: [
          { id: 'T1548.002', name: 'Bypass User Account Control', attacks: [] }
        ]
      },
      {
        id: 'T1055',
        name: 'Process Injection',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1068',
        name: 'Exploitation for Privilege Escalation',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1134',
        name: 'Access Token Manipulation',
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
        attacks: [
          {
            id: 'attack_evasion_001',
            user: 'system',
            endpoint: 'WS-016',
            timestamp: '2024-01-29T12:10:00Z',
            organization: 'operations',
            severity: 'medium'
          }
        ],
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
      },
      {
        id: 'T1562',
        name: 'Impair Defenses',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1112',
        name: 'Modify Registry',
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
        attacks: [
          {
            id: 'attack_cred_001',
            user: 'system',
            endpoint: 'SRV-003',
            timestamp: '2024-01-30T16:20:00Z',
            organization: 'ipac',
            severity: 'high'
          }
        ],
        subTechniques: [
          { id: 'T1003.001', name: 'LSASS Memory', attacks: [] },
          { id: 'T1003.002', name: 'Security Account Manager', attacks: [] }
        ]
      },
      {
        id: 'T1110',
        name: 'Brute Force',
        attacks: [
          {
            id: 'attack_brute_001',
            user: 'external',
            endpoint: 'WEB-002',
            timestamp: '2024-02-01T09:30:00Z',
            organization: 'operations',
            severity: 'medium'
          }
        ],
        subTechniques: []
      },
      {
        id: 'T1555',
        name: 'Credentials from Password Stores',
        attacks: [],
        subTechniques: []
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
        attacks: [
          {
            id: 'attack_disc_001',
            user: 'probe.user@company.com',
            endpoint: 'WS-017',
            timestamp: '2024-02-02T11:45:00Z',
            organization: 'emea',
            severity: 'low'
          }
        ],
        subTechniques: []
      },
      {
        id: 'T1057',
        name: 'Process Discovery',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1018',
        name: 'Remote System Discovery',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1082',
        name: 'System Information Discovery',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1033',
        name: 'System Owner/User Discovery',
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
        attacks: [
          {
            id: 'attack_lateral_001',
            user: 'system',
            endpoint: 'SRV-004',
            timestamp: '2024-02-03T13:15:00Z',
            organization: 'operations',
            severity: 'high'
          }
        ],
        subTechniques: [
          { id: 'T1021.001', name: 'Remote Desktop Protocol', attacks: [] },
          { id: 'T1021.002', name: 'SMB/Windows Admin Shares', attacks: [] }
        ]
      },
      {
        id: 'T1072',
        name: 'Software Deployment Tools',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1080',
        name: 'Taint Shared Content',
        attacks: [],
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
        attacks: [
          {
            id: 'attack_collect_001',
            user: 'data.harvester@external.com',
            endpoint: 'WS-018',
            timestamp: '2024-02-04T15:30:00Z',
            organization: 'ipac',
            severity: 'medium'
          }
        ],
        subTechniques: []
      },
      {
        id: 'T1056',
        name: 'Input Capture',
        attacks: [],
        subTechniques: [
          { id: 'T1056.001', name: 'Keylogging', attacks: [] }
        ]
      },
      {
        id: 'T1119',
        name: 'Automated Collection',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1123',
        name: 'Audio Capture',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1125',
        name: 'Video Capture',
        attacks: [],
        subTechniques: []
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
        attacks: [
          {
            id: 'attack_c2_001',
            user: 'system',
            endpoint: 'WS-019',
            timestamp: '2024-02-05T17:20:00Z',
            organization: 'emea',
            severity: 'high'
          }
        ],
        subTechniques: [
          { id: 'T1071.001', name: 'Web Protocols', attacks: [] }
        ]
      },
      {
        id: 'T1105',
        name: 'Ingress Tool Transfer',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1573',
        name: 'Encrypted Channel',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1090',
        name: 'Proxy',
        attacks: [],
        subTechniques: []
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
        attacks: [
          {
            id: 'attack_exfil_001',
            user: 'system',
            endpoint: 'WS-020',
            timestamp: '2024-02-06T19:45:00Z',
            organization: 'operations',
            severity: 'high'
          }
        ],
        subTechniques: []
      },
      {
        id: 'T1048',
        name: 'Exfiltration Over Alternative Protocol',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1052',
        name: 'Exfiltration Over Physical Medium',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1567',
        name: 'Exfiltration Over Web Service',
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
        attacks: [
          {
            id: 'attack_impact_001',
            user: 'system',
            endpoint: 'WS-021',
            timestamp: '2024-02-07T21:30:00Z',
            organization: 'ipac',
            severity: 'high'
          }
        ],
        subTechniques: []
      },
      {
        id: 'T1489',
        name: 'Service Stop',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1490',
        name: 'Inhibit System Recovery',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1491',
        name: 'Defacement',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1561',
        name: 'Disk Wipe',
        attacks: [],
        subTechniques: []
      }
    ]
  }
];
