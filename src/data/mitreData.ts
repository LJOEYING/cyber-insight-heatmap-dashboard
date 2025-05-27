
export interface AttackDetail {
  id: string;
  user: string;
  endpoint: string;
  timestamp: string;
  organization: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  mitigated: boolean;
}

export interface SubTechnique {
  id: string;
  name: string;
  attacks: AttackDetail[];
}

export interface Technique {
  id: string;
  name: string;
  attacks: AttackDetail[];
  subTechniques: SubTechnique[];
}

export interface Tactic {
  id: string;
  name: string;
  techniques: Technique[];
}

export const mitreData: Tactic[] = [
  {
    id: 'initial-access',
    name: 'Initial Access',
    techniques: [
      {
        id: 'T1566',
        name: 'Phishing',
        attacks: [
          {
            id: 'att_001',
            user: 'john.doe@company.com',
            endpoint: 'WS-001-JD',
            timestamp: '2024-01-15T10:30:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'Spear phishing email with malicious attachment',
            mitigated: false
          },
          {
            id: 'att_002',
            user: 'jane.smith@company.com',
            endpoint: 'WS-002-JS',
            timestamp: '2024-01-14T14:22:00Z',
            organization: 'ipac',
            severity: 'medium',
            description: 'Phishing email with suspicious link',
            mitigated: true
          }
        ],
        subTechniques: [
          {
            id: 'T1566.001',
            name: 'Spearphishing Attachment',
            attacks: [
              {
                id: 'att_003',
                user: 'mike.wilson@company.com',
                endpoint: 'WS-003-MW',
                timestamp: '2024-01-13T09:15:00Z',
                organization: 'emea',
                severity: 'high',
                description: 'Malicious PDF attachment opened',
                mitigated: false
              }
            ]
          },
          {
            id: 'T1566.002',
            name: 'Spearphishing Link',
            attacks: [
              {
                id: 'att_004',
                user: 'sarah.jones@company.com',
                endpoint: 'WS-004-SJ',
                timestamp: '2024-01-12T16:45:00Z',
                organization: 'apac',
                severity: 'medium',
                description: 'Clicked on malicious link in email',
                mitigated: true
              }
            ]
          },
          {
            id: 'T1566.003',
            name: 'Spearphishing via Service',
            attacks: []
          }
        ]
      },
      {
        id: 'T1190',
        name: 'Exploit Public-Facing Application',
        attacks: [
          {
            id: 'att_005',
            user: 'system',
            endpoint: 'SRV-WEB-01',
            timestamp: '2024-01-11T22:30:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'SQL injection attempt on web application',
            mitigated: true
          }
        ],
        subTechniques: []
      },
      {
        id: 'T1078',
        name: 'Valid Accounts',
        attacks: [],
        subTechniques: [
          {
            id: 'T1078.001',
            name: 'Default Accounts',
            attacks: []
          },
          {
            id: 'T1078.002',
            name: 'Domain Accounts',
            attacks: []
          },
          {
            id: 'T1078.003',
            name: 'Local Accounts',
            attacks: []
          },
          {
            id: 'T1078.004',
            name: 'Cloud Accounts',
            attacks: []
          }
        ]
      },
      {
        id: 'T1091',
        name: 'Replication Through Removable Media',
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
            id: 'att_006',
            user: 'admin@company.com',
            endpoint: 'SRV-DC-01',
            timestamp: '2024-01-10T11:20:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'Suspicious PowerShell execution detected',
            mitigated: false
          }
        ],
        subTechniques: [
          {
            id: 'T1059.001',
            name: 'PowerShell',
            attacks: [
              {
                id: 'att_007',
                user: 'bob.tech@company.com',
                endpoint: 'WS-005-BT',
                timestamp: '2024-01-09T13:55:00Z',
                organization: 'emea',
                severity: 'medium',
                description: 'Encoded PowerShell command execution',
                mitigated: true
              }
            ]
          },
          {
            id: 'T1059.003',
            name: 'Windows Command Shell',
            attacks: []
          },
          {
            id: 'T1059.006',
            name: 'Python',
            attacks: []
          },
          {
            id: 'T1059.007',
            name: 'JavaScript',
            attacks: []
          }
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
        attacks: [],
        subTechniques: [
          {
            id: 'T1204.001',
            name: 'Malicious Link',
            attacks: []
          },
          {
            id: 'T1204.002',
            name: 'Malicious File',
            attacks: []
          }
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
        attacks: [],
        subTechniques: [
          {
            id: 'T1547.001',
            name: 'Registry Run Keys / Startup Folder',
            attacks: []
          },
          {
            id: 'T1547.003',
            name: 'Time Providers',
            attacks: []
          },
          {
            id: 'T1547.004',
            name: 'Winlogon Helper DLL',
            attacks: []
          }
        ]
      },
      {
        id: 'T1053',
        name: 'Scheduled Task/Job',
        attacks: [],
        subTechniques: [
          {
            id: 'T1053.005',
            name: 'Scheduled Task',
            attacks: []
          },
          {
            id: 'T1053.003',
            name: 'Cron',
            attacks: []
          }
        ]
      },
      {
        id: 'T1098',
        name: 'Account Manipulation',
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
        attacks: [],
        subTechniques: [
          {
            id: 'T1548.002',
            name: 'Bypass User Access Control',
            attacks: []
          },
          {
            id: 'T1548.003',
            name: 'Sudo and Sudo Caching',
            attacks: []
          }
        ]
      },
      {
        id: 'T1055',
        name: 'Process Injection',
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
        attacks: [],
        subTechniques: [
          {
            id: 'T1070.001',
            name: 'Clear Windows Event Logs',
            attacks: []
          },
          {
            id: 'T1070.004',
            name: 'File Deletion',
            attacks: []
          }
        ]
      },
      {
        id: 'T1027',
        name: 'Obfuscated Files or Information',
        attacks: [],
        subTechniques: [
          {
            id: 'T1027.002',
            name: 'Software Packing',
            attacks: []
          },
          {
            id: 'T1027.005',
            name: 'Indicator Removal from Tools',
            attacks: []
          }
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
    id: 'credential-access',
    name: 'Credential Access',
    techniques: [
      {
        id: 'T1003',
        name: 'OS Credential Dumping',
        attacks: [],
        subTechniques: [
          {
            id: 'T1003.001',
            name: 'LSASS Memory',
            attacks: []
          },
          {
            id: 'T1003.002',
            name: 'Security Account Manager',
            attacks: []
          }
        ]
      },
      {
        id: 'T1110',
        name: 'Brute Force',
        attacks: [],
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
        attacks: [],
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
          {
            id: 'T1021.001',
            name: 'Remote Desktop Protocol',
            attacks: []
          },
          {
            id: 'T1021.002',
            name: 'SMB/Windows Admin Shares',
            attacks: []
          }
        ]
      },
      {
        id: 'T1210',
        name: 'Exploitation of Remote Services',
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
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1025',
        name: 'Data from Removable Media',
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1074',
        name: 'Data Staged',
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
        attacks: [],
        subTechniques: [
          {
            id: 'T1071.001',
            name: 'Web Protocols',
            attacks: []
          },
          {
            id: 'T1071.004',
            name: 'DNS',
            attacks: []
          }
        ]
      },
      {
        id: 'T1573',
        name: 'Encrypted Channel',
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
        attacks: [],
        subTechniques: []
      },
      {
        id: 'T1567',
        name: 'Exfiltration Over Web Service',
        attacks: [],
        subTechniques: [
          {
            id: 'T1567.002',
            name: 'Exfiltration to Cloud Storage',
            attacks: []
          }
        ]
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
        id: 'T1499',
        name: 'Endpoint Denial of Service',
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
