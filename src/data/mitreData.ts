
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
          },
          {
            id: 'att_003',
            user: 'mark.davis@company.com',
            endpoint: 'WS-010-MD',
            timestamp: '2024-01-13T16:15:00Z',
            organization: 'emea',
            severity: 'high',
            description: 'Business email compromise attempt',
            mitigated: false
          },
          {
            id: 'att_004',
            user: 'lisa.wong@company.com',
            endpoint: 'WS-011-LW',
            timestamp: '2024-01-12T09:45:00Z',
            organization: 'apac',
            severity: 'medium',
            description: 'Credential harvesting phishing page',
            mitigated: true
          },
          {
            id: 'att_005',
            user: 'carlos.rodriguez@company.com',
            endpoint: 'WS-012-CR',
            timestamp: '2024-01-11T11:30:00Z',
            organization: 'americas',
            severity: 'high',
            description: 'CEO impersonation phishing email',
            mitigated: false
          },
          {
            id: 'att_006',
            user: 'anna.mueller@company.com',
            endpoint: 'WS-013-AM',
            timestamp: '2024-01-10T13:20:00Z',
            organization: 'emea',
            severity: 'low',
            description: 'Generic phishing email blocked by filter',
            mitigated: true
          },
          {
            id: 'att_007',
            user: 'david.kim@company.com',
            endpoint: 'WS-014-DK',
            timestamp: '2024-01-09T15:10:00Z',
            organization: 'apac',
            severity: 'medium',
            description: 'Tax-themed phishing campaign',
            mitigated: false
          },
          {
            id: 'att_008',
            user: 'sarah.johnson@company.com',
            endpoint: 'WS-015-SJ',
            timestamp: '2024-01-08T08:45:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'Advanced persistent threat phishing',
            mitigated: false
          }
        ],
        subTechniques: [
          {
            id: 'T1566.001',
            name: 'Spearphishing Attachment',
            attacks: [
              {
                id: 'att_009',
                user: 'mike.wilson@company.com',
                endpoint: 'WS-003-MW',
                timestamp: '2024-01-13T09:15:00Z',
                organization: 'emea',
                severity: 'high',
                description: 'Malicious PDF attachment opened',
                mitigated: false
              },
              {
                id: 'att_010',
                user: 'emily.chen@company.com',
                endpoint: 'WS-016-EC',
                timestamp: '2024-01-07T14:30:00Z',
                organization: 'apac',
                severity: 'medium',
                description: 'Word document with macro',
                mitigated: true
              },
              {
                id: 'att_011',
                user: 'robert.taylor@company.com',
                endpoint: 'WS-017-RT',
                timestamp: '2024-01-06T10:20:00Z',
                organization: 'americas',
                severity: 'high',
                description: 'Excel file with embedded payload',
                mitigated: false
              }
            ]
          },
          {
            id: 'T1566.002',
            name: 'Spearphishing Link',
            attacks: [
              {
                id: 'att_012',
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
            id: 'att_013',
            user: 'system',
            endpoint: 'SRV-WEB-01',
            timestamp: '2024-01-11T22:30:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'SQL injection attempt on web application',
            mitigated: true
          },
          {
            id: 'att_014',
            user: 'system',
            endpoint: 'SRV-WEB-02',
            timestamp: '2024-01-10T18:45:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'Remote code execution vulnerability exploited',
            mitigated: false
          },
          {
            id: 'att_015',
            user: 'system',
            endpoint: 'SRV-API-01',
            timestamp: '2024-01-09T20:15:00Z',
            organization: 'operations',
            severity: 'medium',
            description: 'API endpoint enumeration attempt',
            mitigated: true
          }
        ],
        subTechniques: []
      },
      {
        id: 'T1078',
        name: 'Valid Accounts',
        attacks: [
          {
            id: 'att_016',
            user: 'admin@company.com',
            endpoint: 'SRV-DC-01',
            timestamp: '2024-01-08T02:30:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'Suspicious admin account activity detected',
            mitigated: false
          }
        ],
        subTechniques: [
          {
            id: 'T1078.001',
            name: 'Default Accounts',
            attacks: []
          },
          {
            id: 'T1078.002',
            name: 'Domain Accounts',
            attacks: [
              {
                id: 'att_017',
                user: 'service.account@company.com',
                endpoint: 'SRV-APP-01',
                timestamp: '2024-01-07T19:20:00Z',
                organization: 'operations',
                severity: 'medium',
                description: 'Compromised service account detected',
                mitigated: true
              }
            ]
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
            id: 'att_018',
            user: 'admin@company.com',
            endpoint: 'SRV-DC-01',
            timestamp: '2024-01-10T11:20:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'Suspicious PowerShell execution detected',
            mitigated: false
          },
          {
            id: 'att_019',
            user: 'tech.support@company.com',
            endpoint: 'WS-020-TS',
            timestamp: '2024-01-09T15:30:00Z',
            organization: 'operations',
            severity: 'medium',
            description: 'Batch script execution anomaly',
            mitigated: true
          },
          {
            id: 'att_020',
            user: 'developer@company.com',
            endpoint: 'WS-021-DEV',
            timestamp: '2024-01-08T10:45:00Z',
            organization: 'operations',
            severity: 'low',
            description: 'Python script with network activity',
            mitigated: true
          },
          {
            id: 'att_021',
            user: 'analyst@company.com',
            endpoint: 'WS-022-AN',
            timestamp: '2024-01-07T14:15:00Z',
            organization: 'ipac',
            severity: 'high',
            description: 'Obfuscated command execution',
            mitigated: false
          },
          {
            id: 'att_022',
            user: 'intern@company.com',
            endpoint: 'WS-023-IN',
            timestamp: '2024-01-06T09:30:00Z',
            organization: 'emea',
            severity: 'medium',
            description: 'Suspicious shell command detected',
            mitigated: true
          }
        ],
        subTechniques: [
          {
            id: 'T1059.001',
            name: 'PowerShell',
            attacks: [
              {
                id: 'att_023',
                user: 'bob.tech@company.com',
                endpoint: 'WS-005-BT',
                timestamp: '2024-01-09T13:55:00Z',
                organization: 'emea',
                severity: 'medium',
                description: 'Encoded PowerShell command execution',
                mitigated: true
              },
              {
                id: 'att_024',
                user: 'admin.user@company.com',
                endpoint: 'WS-024-AU',
                timestamp: '2024-01-08T16:20:00Z',
                organization: 'operations',
                severity: 'high',
                description: 'PowerShell Empire framework detected',
                mitigated: false
              },
              {
                id: 'att_025',
                user: 'security.analyst@company.com',
                endpoint: 'WS-025-SA',
                timestamp: '2024-01-07T11:10:00Z',
                organization: 'operations',
                severity: 'low',
                description: 'Legitimate security script flagged',
                mitigated: true
              },
              {
                id: 'att_026',
                user: 'maintenance@company.com',
                endpoint: 'SRV-MAINT-01',
                timestamp: '2024-01-06T22:45:00Z',
                organization: 'operations',
                severity: 'medium',
                description: 'After-hours PowerShell activity',
                mitigated: false
              },
              {
                id: 'att_027',
                user: 'backup.service@company.com',
                endpoint: 'SRV-BACKUP-01',
                timestamp: '2024-01-05T03:30:00Z',
                organization: 'operations',
                severity: 'high',
                description: 'Malicious PowerShell in backup process',
                mitigated: false
              },
              {
                id: 'att_028',
                user: 'helpdesk@company.com',
                endpoint: 'WS-026-HD',
                timestamp: '2024-01-04T12:15:00Z',
                organization: 'ipac',
                severity: 'low',
                description: 'PowerShell remote assistance session',
                mitigated: true
              }
            ]
          },
          {
            id: 'T1059.003',
            name: 'Windows Command Shell',
            attacks: [
              {
                id: 'att_029',
                user: 'system.admin@company.com',
                endpoint: 'WS-027-SYS',
                timestamp: '2024-01-03T14:30:00Z',
                organization: 'operations',
                severity: 'medium',
                description: 'Suspicious cmd.exe execution pattern',
                mitigated: true
              }
            ]
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
        attacks: [
          {
            id: 'att_030',
            user: 'marketing@company.com',
            endpoint: 'WS-028-MKT',
            timestamp: '2024-01-02T10:20:00Z',
            organization: 'americas',
            severity: 'high',
            description: 'Browser exploitation attempt detected',
            mitigated: false
          }
        ],
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
            attacks: [
              {
                id: 'att_031',
                user: 'finance@company.com',
                endpoint: 'WS-029-FIN',
                timestamp: '2024-01-01T16:45:00Z',
                organization: 'americas',
                severity: 'medium',
                description: 'User clicked malicious advertisement',
                mitigated: true
              }
            ]
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
        attacks: [
          {
            id: 'att_032',
            user: 'system',
            endpoint: 'WS-030-USR',
            timestamp: '2023-12-31T23:15:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'Unauthorized startup program detected',
            mitigated: false
          },
          {
            id: 'att_033',
            user: 'local.admin@company.com',
            endpoint: 'WS-031-LA',
            timestamp: '2023-12-30T08:30:00Z',
            organization: 'emea',
            severity: 'medium',
            description: 'Registry startup modification',
            mitigated: true
          }
        ],
        subTechniques: [
          {
            id: 'T1547.001',
            name: 'Registry Run Keys / Startup Folder',
            attacks: [
              {
                id: 'att_034',
                user: 'malware.process',
                endpoint: 'WS-032-MP',
                timestamp: '2023-12-29T19:45:00Z',
                organization: 'apac',
                severity: 'high',
                description: 'Malicious registry key created',
                mitigated: false
              }
            ]
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
        attacks: [
          {
            id: 'att_035',
            user: 'guest.user@company.com',
            endpoint: 'WS-033-GU',
            timestamp: '2023-12-28T14:20:00Z',
            organization: 'ipac',
            severity: 'medium',
            description: 'UAC bypass attempt detected',
            mitigated: true
          }
        ],
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
        attacks: [
          {
            id: 'att_036',
            user: 'system.cleaner',
            endpoint: 'SRV-LOG-01',
            timestamp: '2023-12-27T22:10:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'Event log clearing detected',
            mitigated: false
          },
          {
            id: 'att_037',
            user: 'temp.user@company.com',
            endpoint: 'WS-034-TU',
            timestamp: '2023-12-26T13:45:00Z',
            organization: 'americas',
            severity: 'medium',
            description: 'File deletion after execution',
            mitigated: true
          },
          {
            id: 'att_038',
            user: 'contractor@company.com',
            endpoint: 'WS-035-CON',
            timestamp: '2023-12-25T09:30:00Z',
            organization: 'emea',
            severity: 'low',
            description: 'Temporary file cleanup',
            mitigated: true
          },
          {
            id: 'att_039',
            user: 'automation.service',
            endpoint: 'SRV-AUTO-01',
            timestamp: '2023-12-24T18:15:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'Automated evidence removal',
            mitigated: false
          }
        ],
        subTechniques: [
          {
            id: 'T1070.001',
            name: 'Clear Windows Event Logs',
            attacks: [
              {
                id: 'att_040',
                user: 'admin.breach@company.com',
                endpoint: 'SRV-SEC-01',
                timestamp: '2023-12-23T16:30:00Z',
                organization: 'operations',
                severity: 'high',
                description: 'Security event logs cleared',
                mitigated: false
              },
              {
                id: 'att_041',
                user: 'maint.script',
                endpoint: 'SRV-UTIL-01',
                timestamp: '2023-12-22T11:45:00Z',
                organization: 'operations',
                severity: 'medium',
                description: 'Routine maintenance log clearing',
                mitigated: true
              }
            ]
          },
          {
            id: 'T1070.004',
            name: 'File Deletion',
            attacks: [
              {
                id: 'att_042',
                user: 'stealth.process',
                endpoint: 'WS-036-SP',
                timestamp: '2023-12-21T20:20:00Z',
                organization: 'apac',
                severity: 'high',
                description: 'Malware self-deletion detected',
                mitigated: false
              }
            ]
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
        attacks: [
          {
            id: 'att_043',
            user: 'system.exploit',
            endpoint: 'SRV-CRED-01',
            timestamp: '2023-12-20T07:15:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'LSASS memory dump attempt',
            mitigated: false
          }
        ],
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
        attacks: [
          {
            id: 'att_044',
            user: 'external.attacker',
            endpoint: 'SRV-RDP-01',
            timestamp: '2023-12-19T12:30:00Z',
            organization: 'operations',
            severity: 'medium',
            description: 'RDP brute force attack detected',
            mitigated: true
          },
          {
            id: 'att_045',
            user: 'bot.network',
            endpoint: 'SRV-SSH-01',
            timestamp: '2023-12-18T03:45:00Z',
            organization: 'operations',
            severity: 'high',
            description: 'SSH brute force from botnet',
            mitigated: false
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
            id: 'att_046',
            user: 'recon.process',
            endpoint: 'WS-037-RP',
            timestamp: '2023-12-17T15:20:00Z',
            organization: 'ipac',
            severity: 'low',
            description: 'Directory enumeration detected',
            mitigated: true
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
