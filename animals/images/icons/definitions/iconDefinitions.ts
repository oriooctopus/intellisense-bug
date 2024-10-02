/* eslint-disable no-restricted-imports */
import {extractComponentName} from './iconDefinitions.util';
import {IconCategoryEnum} from './iconDefinitions.enums';
import {IconDefinitionType} from './iconDefinitions.types';

export const getIconDefinitions = (): Array<{
  svgFilename: string;
  componentName: string;
  category?: IconCategoryEnum;
  tags?: Array<string>;
  keepColors?: boolean;
}> =>
  IconDefinitions.map((d) => ({
    ...d,
    componentName: extractComponentName(d),
  }));

const IconDefinitions: Array<IconDefinitionType> = [
  // GENERAL
  {
    svgFilename: 'General/Automatic',
    category: IconCategoryEnum.GENERAL,
    tags: [
      'schedule',
      'cron',
      'chronologic',
      'cyclic',
      'repeat',
      'task',
      'trigger',
      'refresh',
    ],
  },
  {
    svgFilename: 'General/Browse Additional File',
    category: IconCategoryEnum.GENERAL,
    tags: ['search', 'look', 'folder'],
  },
  {
    svgFilename: 'General/CascadedArchiveIcon',
    category: IconCategoryEnum.GENERAL,
    tags: ['cloud'],
  },
  {
    svgFilename: 'General/Dashboard',
    category: IconCategoryEnum.GENERAL,
    tags: ['analytics', 'charts', 'intelligence', 'indicator'],
  },
  {
    svgFilename: 'General/Disk',
    category: IconCategoryEnum.GENERAL,
    tags: ['managed'],
  },
  {
    svgFilename: 'General/EmailIcon',
    category: IconCategoryEnum.GENERAL,
    tags: [
      'mail',
      'envelope',
      'communication',
      'letter',
      'network',
      'internet',
    ],
  },
  {
    svgFilename: 'General/Exocompute',
    category: IconCategoryEnum.GENERAL,
    tags: ['recovery', 'restore', 'service'],
  },
  {
    svgFilename: 'General/Failover',
    category: IconCategoryEnum.GENERAL,
    tags: ['restore', 'backup', 'contingence', 'redundant'],
  },
  {
    svgFilename: 'General/Globe',
    category: IconCategoryEnum.GENERAL,
    tags: [
      'world',
      'planet',
      'sphere',
      'universe',
      'timezone',
      'location',
      'latitude',
      'longitude',
      'position',
    ],
  },
  {
    svgFilename: 'General/Hourglass',
    category: IconCategoryEnum.GENERAL,
    tags: ['time', 'wait', 'pause'],
  },
  {
    svgFilename: 'General/LDAP Server',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/List',
    category: IconCategoryEnum.GENERAL,
    tags: ['bullet'],
  },
  {
    svgFilename: 'General/Pending',
    category: IconCategoryEnum.GENERAL,
    tags: ['pause', 'resume', 'task', 'schedule', 'wait'],
  },
  {
    svgFilename: 'General/Permission',
    category: IconCategoryEnum.GENERAL,
    tags: [
      'key',
      'lock',
      'unlock',
      'sign',
      'encrypt',
      'decrypt',
      'cryptography',
    ],
  },
  {
    svgFilename: 'General/Pre-Post Script',
    category: IconCategoryEnum.GENERAL,
    tags: ['batch', 'executable'],
  },
  {
    svgFilename: 'General/Return',
    category: IconCategoryEnum.GENERAL,
    tags: ['key', 'enter', 'break'],
  },
  {
    svgFilename: 'General/SSO',
    category: IconCategoryEnum.GENERAL,
    tags: ['sign', 'log', 'user', 'access', 'lock', 'secure'],
  },
  {
    svgFilename: 'General/Subscription',
    category: IconCategoryEnum.GENERAL,
    tags: ['cloud', 'web', 'service', 'azure'],
  },
  {
    svgFilename: 'General/White List',
    category: IconCategoryEnum.GENERAL,
    tags: ['check', 'file', 'review', 'allow', 'okay'],
  },
  {
    svgFilename: 'General/Umbrella',
    category: IconCategoryEnum.GENERAL,
    tags: ['cover', 'rain', 'water', 'rain', 'protection', 'outline'],
  },
  {
    svgFilename: 'General/AWS',
    category: IconCategoryEnum.GENERAL,
    tags: ['amazon', 'web', 'service', 'ec2', 'elastic'],
  },
  {
    svgFilename: 'General/Analyzer',
    category: IconCategoryEnum.GENERAL,
    tags: ['chart', 'monitor', 'detail', 'magnify', 'zoom'],
  },
  {
    svgFilename: 'General/Audit_log',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Details',
    category: IconCategoryEnum.GENERAL,
    tags: ['data', 'look'],
  },
  {
    svgFilename: 'General/Events',
    category: IconCategoryEnum.GENERAL,
    tags: ['analytics', 'chart', 'pulse', 'notification', 'monitor'],
  },
  {
    svgFilename: 'General/FilterIcon',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Flag',
    category: IconCategoryEnum.GENERAL,
    tags: ['indicator', 'mark', 'tag'],
  },
  {
    svgFilename: 'General/History',
    category: IconCategoryEnum.GENERAL,
    tags: ['sort', 'order', 'select'],
  },
  {
    svgFilename: 'General/Infinity',
    category: IconCategoryEnum.GENERAL,
    tags: ['forever', 'time'],
  },
  {
    svgFilename: 'General/Inherit',
    category: IconCategoryEnum.GENERAL,
    tags: ['cascade', 'fork', 'path'],
  },
  {
    svgFilename: 'General/Manual',
    category: IconCategoryEnum.GENERAL,
    tags: ['tool', 'wrench', 'fix', 'work'],
  },
  {
    svgFilename: 'General/New_filled',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Overview',
    category: IconCategoryEnum.GENERAL,
    tags: ['brief', 'summary'],
  },
  {
    svgFilename: 'General/Paperclip',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Radar',
    category: IconCategoryEnum.GENERAL,
    tags: ['location', 'pinpoint', 'coordinates', 'position'],
  },
  {
    svgFilename: 'General/Remain Same',
    category: IconCategoryEnum.GENERAL,
    tags: ['dash', 'change', 'policy'],
  },
  {
    svgFilename: 'General/Room_menu',
    category: IconCategoryEnum.GENERAL,
    tags: ['switcher'],
  },
  {
    svgFilename: 'General/Table Configuration',
    category: IconCategoryEnum.GENERAL,
    tags: ['setup', 'cog', 'gear'],
  },
  {
    svgFilename: 'General/Popover',
    category: IconCategoryEnum.GENERAL,
    tags: ['right', 'popup', 'menu', 'feedback', 'tooltip'],
  },
  {
    svgFilename: 'General/WhiteList2',
    category: IconCategoryEnum.GENERAL,
    tags: ['check', 'okay'],
  },
  {
    svgFilename: 'General/Reports',
    category: IconCategoryEnum.GENERAL,
    tags: ['analytics', 'data', 'chart', 'slides'],
  },
  {
    svgFilename: 'General/EventsThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Keyboard Shortcut',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Wildcards',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/FailoverThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/RadarThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/RecoveryTaskDetailsReportThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Recovery Task Details Report',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/TaskSummaryThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/ObjectDetailAuditReportThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Object Audit Report',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Safe for Recovery',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Most Popular',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Upgrade',
    category: IconCategoryEnum.GENERAL,
    componentName: 'UpgradeGeneralIcon',
  },
  {
    svgFilename: 'General/Popular',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Card View',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/List View',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Comment',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Validate',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/List Row',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Tablespace',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Overwrite',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Threats',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/RecoveryPlan',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/LegalHold',
    category: IconCategoryEnum.GENERAL,
    tags: ['hand', 'stop'],
  },
  {
    svgFilename: 'General/Webhooks',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/DataSecurityCommandCenter',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Matches',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/FileRestrictions',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Parameters',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Limits',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Licenses',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Order',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Organization',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/QAuth',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/QAuthThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/QAuthPolicy',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/QAuthRequest',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/ArchivalAndStorage',
    category: IconCategoryEnum.GENERAL,
    tags: ['folder', 'filecabinet'],
  },
  {
    svgFilename: 'General/DataSource',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Security',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Storage',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/CloudAccount',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/UserManagement',
    category: IconCategoryEnum.GENERAL,
    tags: ['gear'],
  },
  {
    svgFilename: 'General/RubrikCloudVault',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/DownloadBacpac',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/RecoverToDatabase',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/VirtualDataCenter',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/VMC',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/AdminCredentials',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/ChartConfiguration',
    category: IconCategoryEnum.GENERAL,
    tags: ['settings'],
  },
  {
    svgFilename: 'General/Catalog',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/DataObservability',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Support',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/BreakFixContent',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/HowToContent',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/NASShareObject',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/M365GroupIcon',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/M365SharePointTeamsGroupIcon',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/AzureContainer',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/AzureStorageAccount',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/AWSS3Bucket',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/AWSS3Inventory',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/AzureApplicationRegistration',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/AzureEnterpriseApps',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Devices',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/OnPremADDomains',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/OnPremADDomainControllers',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/EncryptedLocations',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/KMSSettings',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/NutanixPrismCentral',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/StarFilled',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/StarOutlined',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/RestoreFullInstance',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/RestoreIssues',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/RestoreJiraSettings',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/RestoreProjects',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/MFA',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Language',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Trial',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Plugin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/VMTemplate',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Chatbot',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/MatchesThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/APIPlayground',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Contacts',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/QAuthObject',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/QAuthObjectThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/RecoverToNewFolder',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/MicrosoftEntraID',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/ExternalCluster',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/RSCIndexReport',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/RSCIndexReportThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/ChildRelationship',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/ContentLibrary',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/DependsOn',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Insight',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/ParentRelationship',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/HostClusterLinux',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/HostClusterWindows',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/AzureBlob',
    category: IconCategoryEnum.GENERAL,
  },

  {
    svgFilename: 'General/ActiveOperation',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/CustomizedIntelligence',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Snooze',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/MSTeamsChat',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/ObjectBackupSummaryReport',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/ObjectBackupSummaryReportThin',
    category: IconCategoryEnum.GENERAL,
  },
  // Note: Microsoft has strong guidelines from their brand team
  // asking to keep their 4 Box Microsoft icon with no modifications.
  {
    svgFilename: 'General/MicrosoftBackupStorage',
    category: IconCategoryEnum.GENERAL,
    tags: ['syntex'],
    keepColors: true,
  },
  {
    svgFilename: 'General/SnapshotQuarantined',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/IsolatedCluster',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/M365SharepointGroups',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/M365TeamsGroups',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Table',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/Schema',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/ManageFilter',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/UserRolesThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/UserServiceAccountThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    svgFilename: 'General/SSOGroupsThin',
    category: IconCategoryEnum.GENERAL,
  },
  {
    componentName: 'ObjectBackupConfigurations',
    svgFilename: 'General/ObjectBackupConfiguration',
    category: IconCategoryEnum.GENERAL,
  },

  // FILE TYPES

  {
    svgFilename: 'File Types/File/Audio',
    category: IconCategoryEnum.FILE_TYPES,
    tags: ['music', 'sound', 'wav', 'mp3'],
  },
  {
    svgFilename: 'File Types/File/CSVIcon',
    category: IconCategoryEnum.FILE_TYPES,
    tags: ['data', 'table'],
  },
  {
    svgFilename: 'File Types/File/Compressed File',
    category: IconCategoryEnum.FILE_TYPES,
    tags: ['zip', 'rar', 'tar'],
  },
  {
    svgFilename: 'File Types/File/Generic',
    category: IconCategoryEnum.FILE_TYPES,
  },
  {
    svgFilename: 'File Types/File/LOG',
    category: IconCategoryEnum.FILE_TYPES,
  },
  {
    svgFilename: 'File Types/File/PDF',
    category: IconCategoryEnum.FILE_TYPES,
    tags: ['document', 'postscript', 'adobe', 'rich', 'text'],
  },
  {
    svgFilename: 'File Types/File/PPT',
    category: IconCategoryEnum.FILE_TYPES,
    tags: ['slide', 'presentation', 'powerpoint', 'office', 'microsoft'],
  },
  {
    svgFilename: 'File Types/File/Regular',
    category: IconCategoryEnum.FILE_TYPES,
    tags: ['symlink', 'document', 'text'],
  },
  {
    svgFilename: 'File Types/File/Text',
    category: IconCategoryEnum.FILE_TYPES,
    tags: ['plain', 'txt'],
  },
  {
    svgFilename: 'File Types/File/Video',
    category: IconCategoryEnum.FILE_TYPES,
    tags: ['movie', 'clip', 'mpeg', 'mp4', 'h264'],
  },
  {
    svgFilename: 'File Types/File/Word',
    category: IconCategoryEnum.FILE_TYPES,
    tags: ['document', 'office', 'microsoft'],
  },
  {
    svgFilename: 'File Types/File/XLS',
    category: IconCategoryEnum.FILE_TYPES,
    tags: ['excel', 'document', 'csv', 'office', 'microsoft'],
  },

  // SNAPPABLE BRAND ICONS

  {
    svgFilename: 'Snappable/AWS EC2',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['amazon', 'web', 'service', 'cloud'],
  },
  {
    svgFilename: 'Snappable/AWS',
    componentName: 'AWSLogoIcon',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['amazon', 'web', 'service', 'ec2', 'rds', 'cloud'],
  },
  {
    svgFilename: 'Snappable/AWS RDS',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['amazon', 'web', 'service', 'ec2', 'rds', 'cloud'],
  },
  {
    svgFilename: 'Snappable/Azure',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['microsoft', 'web', 'service', 'cloud'],
  },
  {
    svgFilename: 'Snappable/Google Cloud',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['web', 'service', 'cloud'],
  },
  {
    svgFilename: 'Snappable/Linux',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['open'],
  },
  {
    svgFilename: 'Snappable/NutanixLogo',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/SAP Hana',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['erp', 'data', 'enterprise', 'cloud'],
  },
  {
    svgFilename: 'Snappable/Windows',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/vSphere',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['vmware', 'cloud', 'compute'],
  },
  {
    svgFilename: 'Snappable/Kubernetes/Full Size View',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['docker', 'container', 'k8s', 'deploy', 'app', 'scale'],
  },
  {
    svgFilename: 'Snappable/Kubernetes/Minimized View',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['docker', 'container', 'k8s', 'deploy', 'app', 'scale'],
  },
  {
    svgFilename: 'Snappable/O365/Exchange',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['business', 'email', 'calendar', 'inbox', 'messaging'],
  },
  {
    svgFilename: 'Snappable/O365/Office 365',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['microsoft', 'service', 'cloud', 'o365'],
  },
  {
    svgFilename: 'Snappable/O365/OneDrive',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['cloud', 'storage'],
  },
  {
    svgFilename: 'Snappable/O365/Share Point',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['wiki', 'knowledge', 'repository', 'team', 'management'],
  },
  {
    svgFilename: 'Snappable/O365/Teams',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['chat', 'message', 'video', 'call', 'group'],
  },
  {
    svgFilename: 'Snappable/O365/Teams Group',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['chat', 'message', 'video', 'call', 'group'],
  },
  {
    svgFilename: 'Snappable/O365/List Row Item',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/AWSThin',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['amazon', 'web', 'service', 'ec2', 'rds', 'cloud'],
  },
  {
    svgFilename: 'Snappable/NetApp',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/Qumolo',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/Cassandra',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/Dell-EMC-Isilon',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/Pure-Storage',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/MongoDB',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['database', 'storage'],
  },
  {
    svgFilename: 'Snappable/IBM DB2',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
    tags: ['database'],
  },
  {
    svgFilename: 'Snappable/AIX',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/Atlassian',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/Confluence',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/JiraSoftware',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/Salesforce',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/Zscaler',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/GoSDK',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/PowerShellSDK',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/PythonSDK',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/ServiceNow',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/Splunk',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/Terraform',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/VMware',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/Postgresql',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/PostgresqlCluster',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/PostgresqlDatabase',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },
  {
    svgFilename: 'Snappable/RedHatOpenShift',
    category: IconCategoryEnum.SNAPPABLE_BRAND,
  },

  // ACTION

  {
    svgFilename: 'Action/Add Icon',
    category: IconCategoryEnum.ACTION,
    tags: ['plus', 'more', 'expand'],
  },
  {
    svgFilename: 'Action/CheckIcon',
    category: IconCategoryEnum.ACTION,
    tags: ['success', 'accept', 'approve', 'okay', 'yes'],
  },
  {
    svgFilename: 'Action/Copy',
    category: IconCategoryEnum.ACTION,
    tags: ['duplicate'],
  },
  {
    svgFilename: 'Action/Create_A_Report',
    category: IconCategoryEnum.ACTION,
    tags: ['new', 'add', 'plus', 'file'],
  },
  {
    svgFilename: 'Action/Download',
    category: IconCategoryEnum.ACTION,
    tags: ['web', 'cloud'],
  },
  {
    svgFilename: 'Action/Edit',
    category: IconCategoryEnum.ACTION,
    tags: ['modify', 'write', 'draw', 'pencil'],
  },
  {
    svgFilename: 'Action/More Options',
    category: IconCategoryEnum.ACTION,
    tags: ['triple', 'ellipsis', 'truncate'],
  },
  {
    svgFilename: 'Action/New_link',
    category: IconCategoryEnum.ACTION,
  },
  {
    svgFilename: 'Action/Resume',
    category: IconCategoryEnum.ACTION,
    tags: ['play', 'next', 'arrow'],
  },
  {
    svgFilename: 'Action/Upgrade',
    category: IconCategoryEnum.ACTION,
    tags: ['cog', 'gear', 'refresh'],
  },
  {
    svgFilename: 'Action/Discover',
    category: IconCategoryEnum.ACTION,
    tags: ['data', 'search', 'find', 'zoom', 'detail'],
  },
  {
    svgFilename: 'Action/Import',
    category: IconCategoryEnum.ACTION,
  },
  {
    svgFilename: 'Action/Export',
    category: IconCategoryEnum.ACTION,
  },
  {
    svgFilename: 'Action/PlusIcon',
    category: IconCategoryEnum.ACTION,
    tags: ['add', 'more', 'expand'],
  },
  {
    svgFilename: 'Action/Refresh',
    category: IconCategoryEnum.ACTION,
    tags: ['reload', 'recycle', 'automatic'],
  },
  {
    svgFilename: 'Action/Remove',
    category: IconCategoryEnum.ACTION,
    tags: ['times', 'reject'],
  },
  {
    svgFilename: 'Action/Search',
    category: IconCategoryEnum.ACTION,
    tags: ['look', 'zoom', 'detail'],
  },
  {
    svgFilename: 'Action/TrashbinIcon',
    category: IconCategoryEnum.ACTION,
    tags: ['delete', 'dispose', 'garbage'],
  },
  {
    svgFilename: 'Action/Collapse',
    category: IconCategoryEnum.ACTION,
    tags: ['menu', 'row'],
  },
  {
    svgFilename: 'Action/Expand',
    category: IconCategoryEnum.ACTION,
    tags: ['menu', 'row'],
  },
  {
    svgFilename: 'Action/Re-order',
    category: IconCategoryEnum.ACTION,
  },
  {
    svgFilename: 'Action/Clone',
    category: IconCategoryEnum.ACTION,
  },
  {
    svgFilename: 'Action/MaximizeArrows',
    category: IconCategoryEnum.ACTION,
  },
  {
    svgFilename: 'Action/MinimizeArrows',
    category: IconCategoryEnum.ACTION,
  },
  {
    svgFilename: 'Action/Retry',
    category: IconCategoryEnum.ACTION,
  },
  {
    svgFilename: 'Action/DiagonalResizing',
    category: IconCategoryEnum.ACTION,
    tags: ['resize', 'diagonal'],
  },
  {
    svgFilename: 'Action/Send',
    category: IconCategoryEnum.ACTION,
  },
  {
    svgFilename: 'Action/DownloadDisk',
    category: IconCategoryEnum.ACTION,
  },

  // ARROW & CARET

  {
    svgFilename: 'Arrow _ Caret/Arrow/Bidirectional',
    category: IconCategoryEnum.ARROW_AND_CARET,
    tags: ['compare', 'diff'],
  },
  {
    svgFilename: 'Arrow _ Caret/Arrow/DecreaseIcon',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Arrow/Down',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Arrow/DownFilledIcon',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Arrow/IncreaseIcon',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Arrow/Left',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Arrow/LeftFilledIcon',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Arrow/Right',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Arrow/RightFilledIcon',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Arrow/Up',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Arrow/UpFilledIcon',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Arrow/Up_and_Down',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Caret/DoubleCaretLeft',
    componentName: 'DoubleCaretLeftIcon',
    category: IconCategoryEnum.ARROW_AND_CARET,
    tags: ['rewind'],
  },
  {
    svgFilename: 'Arrow _ Caret/Caret/DoubleCaretRight',
    componentName: 'DoubleCaretRightIcon',
    category: IconCategoryEnum.ARROW_AND_CARET,
    tags: ['forward'],
  },
  {
    svgFilename: 'Arrow _ Caret/Caret/Down',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Caret/Left',
    category: IconCategoryEnum.ARROW_AND_CARET,
    tags: ['less'],
  },
  {
    svgFilename: 'Arrow _ Caret/Caret/Right',
    category: IconCategoryEnum.ARROW_AND_CARET,
    tags: ['greater'],
  },
  {
    svgFilename: 'Arrow _ Caret/Caret/Up',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Caret/CaretPreviousThin',
    componentName: 'CaretPreviousThinIcon',
    category: IconCategoryEnum.ARROW_AND_CARET,
    tags: ['less', 'left'],
  },
  {
    svgFilename: 'Arrow _ Caret/Caret/CaretNextThin',
    componentName: 'CaretNextThinIcon',
    category: IconCategoryEnum.ARROW_AND_CARET,
    tags: ['greater', 'right'],
  },
  {
    svgFilename: 'Arrow _ Caret/Sort/Ascending',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Sort/Descending',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },
  {
    svgFilename: 'Arrow _ Caret/Sort/Unset',
    category: IconCategoryEnum.ARROW_AND_CARET,
  },

  // DEFAULT STATUS

  {
    svgFilename: 'Default Status/Downloading',
    category: IconCategoryEnum.DEFAULT_STATUS,
  },
  {
    svgFilename: 'Default Status/Uploading',
    category: IconCategoryEnum.DEFAULT_STATUS,
  },
  {
    svgFilename: 'Default Status/Cancelled/Fill',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['dash'],
  },
  {
    svgFilename: 'Default Status/Cancelled/Outline',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['dash'],
  },
  {
    svgFilename: 'Default Status/Failed/Fill',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['times'],
  },
  {
    svgFilename: 'Default Status/Failed/Outline',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['times'],
  },
  {
    svgFilename: 'Default Status/Info/Fill',
    category: IconCategoryEnum.DEFAULT_STATUS,
  },
  {
    svgFilename: 'Default Status/Info/Outline',
    category: IconCategoryEnum.DEFAULT_STATUS,
  },
  {
    svgFilename: 'Default Status/Missing/Fill',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['question'],
  },
  {
    svgFilename: 'Default Status/Missing/Outline',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['question'],
  },
  {
    svgFilename: 'Default Status/Paused/Fill',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['wait'],
  },
  {
    svgFilename: 'Default Status/Paused/Outline',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['wait'],
  },
  {
    svgFilename: 'Default Status/Progress/Fill',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['load', 'inprogress', 'background'],
  },
  {
    svgFilename: 'Default Status/Progress/Outline',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['load', 'inprogress', 'background', 'crawl'],
  },
  {
    svgFilename: 'Default Status/Scheduled/Fill',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['crawl', 'time', 'clock'],
  },
  {
    svgFilename: 'Default Status/Scheduled/Outline',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['crawl', 'time', 'clock'],
  },
  {
    svgFilename: 'Default Status/Success/Fill',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['check', 'approve'],
  },
  {
    svgFilename: 'Default Status/Success/Outline',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['check', 'approve'],
  },
  {
    svgFilename: 'Default Status/Warning/Fill',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['failed', 'caution'],
  },
  {
    svgFilename: 'Default Status/Warning/Outline',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['crawl', 'failed', 'caution'],
  },
  {
    svgFilename: 'Default Status/Disabled/Outline',
    componentName: 'DisabledOutlineIcon',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['unavailable'],
  },
  {
    svgFilename: 'Default Status/Disabled/Fill',
    componentName: 'DisabledFillIcon',
    category: IconCategoryEnum.DEFAULT_STATUS,
    tags: ['unavailable'],
  },
  {
    svgFilename: 'Default Status/Recommend/RecommendFill',
    componentName: 'RecommendFill',
    category: IconCategoryEnum.DEFAULT_STATUS,
  },
  {
    svgFilename: 'Default Status/Recommend/RecommendOutline',
    componentName: 'RecommendOutline',
    category: IconCategoryEnum.DEFAULT_STATUS,
  },
  {
    svgFilename: 'Default Status/Malicious/Fill',
    componentName: 'MaliciousFill',
    category: IconCategoryEnum.DEFAULT_STATUS,
  },
  {
    svgFilename: 'Default Status/Malicious/Outline',
    componentName: 'MaliciousOutline',
    category: IconCategoryEnum.DEFAULT_STATUS,
  },

  // GROUP > File

  {
    svgFilename: 'Group/File/Linux',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/File/Regular Copy',
    componentName: 'FileCopyIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['move', 'copy', 'transfer'],
  },
  {
    svgFilename: 'Group/File/Regular',
    componentName: 'FilesetIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/File/Windows',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/File/Symlink Files',
    componentName: 'SymlinkFileIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/File/FileAzure',
    componentName: 'AzureFileIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/File/FileEFS',
    componentName: 'AmazonEFSFileIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/File/FileNetapp',
    componentName: 'NetappFileIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/File/FileNutanix',
    componentName: 'NutanixFileIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Folder

  {
    svgFilename: 'Group/Folder/Folder',
    componentName: 'FolderIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Folder/Symlink Folder',
    componentName: 'SymlinkFolderIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Policy

  {
    svgFilename: 'Group/Policy/Certificate Signing Request',
    category: IconCategoryEnum.GROUP,
    tags: ['csr', 'key', 'cryptography'],
  },
  {
    svgFilename: 'Group/Policy/Certificate',
    category: IconCategoryEnum.GROUP,
    tags: ['cryptography', 'signature', 'key', 'document'],
  },
  {
    svgFilename: 'Group/Policy/Covered Objects',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Policy/Discovery',
    category: IconCategoryEnum.GROUP,
    tags: ['find', 'detail', 'search', 'look', 'zoom', 'document'],
  },
  {
    svgFilename: 'Group/Policy/Object Details',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Policy/Out of Compliance',
    category: IconCategoryEnum.GROUP,
    tags: ['failed', 'rejected'],
  },
  {
    svgFilename: 'Group/Policy/CertificateThin',
    category: IconCategoryEnum.GROUP,
    tags: ['cryptography', 'signature', 'key', 'document'],
  },

  // GROUP > VM

  {
    svgFilename: 'Group/VM/AHV VMs',
    componentName: 'AHVVMsIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['nutanix', 'virtual'],
  },
  {
    svgFilename: 'Group/VM/Hyper-V VMs',
    componentName: 'HyperVVMsIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['microsoft', 'azure', 'virtual'],
  },
  {
    svgFilename: 'Group/VM/vCenter VMs',
    componentName: 'VCenterVMsIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['vmware', 'virtual'],
  },
  {
    svgFilename: 'Group/VM/VM',
    componentName: 'VMIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['virtual'],
  },
  {
    svgFilename: 'Group/VM/Multiple_VMs',
    category: IconCategoryEnum.GROUP,
    tags: ['virtual'],
  },

  // GROUP > Restore

  {
    svgFilename: 'Group/Restore/Restore to Another User',
    componentName: 'RestoreToAnotherUserIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Restore/Restore to Original User',
    componentName: 'RestoreToOriginalUserIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Restore/Restore to the Another Document Library',
    componentName: 'RestoreToAnotherDocLibIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Restore/Restore to the Another List',
    componentName: 'RestoreToAnotherListIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Restore/Restore to the Original Document Library',
    componentName: 'RestoreToOriginalDocLibIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Restore/Restore to the Original List',
    componentName: 'RestoreToOriginalListIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Restore/Restore to Another Channel',
    componentName: 'RestoreToAnotherChannelIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Restore/Restore to Original Channel',
    componentName: 'RestoreToOriginalChannelIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Restore/Restore to Original Database',
    componentName: 'RestoreToOriginalDatabaseIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Restore/Tablespace Recovery',
    componentName: 'TablespaceRecoveryIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > User

  {
    svgFilename: 'Group/User/Groups',
    category: IconCategoryEnum.GROUP,
    tags: ['o365', 'user'],
  },
  {
    svgFilename: 'Group/User/Multiple Users',
    componentName: 'MultipleUsersIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['share'],
  },
  {
    svgFilename: 'Group/User/Profile',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/User/Service Account',
    category: IconCategoryEnum.GROUP,
    tags: ['config', 'setup', 'cog', 'gear'],
  },
  {
    svgFilename: 'Group/User/User Roles',
    componentName: 'UserRolesIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['security', 'access', 'key', 'credentials', 'rights'],
  },
  {
    svgFilename: 'Group/User/User',
    componentName: 'UserIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['account'],
  },
  {
    svgFilename: 'Group/User/UserInGlobalMenuThin',
    componentName: 'UserInGlobalMenuThinIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['account', 'menu'],
  },

  // GROUP > VCenter

  {
    svgFilename: 'Group/VCenter/VMware',
    category: IconCategoryEnum.GROUP,
    tags: ['virtual'],
  },

  // GROUP > Continues Protection Log

  {
    svgFilename: 'Group/Continues Protection Log/Regular',
    componentName: 'ContinuesProtectionLogIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['cdp', 'infinity'],
  },

  // GROUP > Snapshot

  {
    svgFilename: 'Group/Snapshot/Download Snapshot',
    componentName: 'DownloadSnapshotIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['camera', 'image'],
  },
  {
    svgFilename: 'Group/Snapshot/On-demand',
    category: IconCategoryEnum.GROUP,
    tags: ['camera', 'image', 'power', 'switch'],
  },
  {
    svgFilename: 'Group/Snapshot/Snapshot',
    componentName: 'SnapshotIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['camera', 'image'],
  },

  // GROUP > Blueprint

  {
    svgFilename: 'Group/Blueprint/Blueprint',
    componentName: 'BlueprintIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['AppFlows', 'inventory'],
  },

  // GROUP > Database

  {
    svgFilename: 'Group/Database/Data Center',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Database/Database',
    componentName: 'DatabaseIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Database/Oracle DBs',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Database/SQL Server DBs',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Database/Blueprint Datastore',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Database/Data Cluster',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Database/Availability Groups',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Database/Log Shipping Targets',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Database/Availability Group Database',
    componentName: 'AvailabilityGroupDatabaseIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['available', 'db'],
  },
  {
    svgFilename: 'Group/Database/Data Guard Group',
    componentName: 'DataGuardGroupDatabaseIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['db'],
  },
  {
    svgFilename: 'Group/Database/HADRDatabase',
    componentName: 'HADRDatabaseIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['db'],
  },

  // GROUP > Hyper-V

  {
    svgFilename: 'Group/Hyper-V/Hyper-V Cluster',
    componentName: 'HyperVClusterIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Hyper-V/Hyper-V SCVMM',
    componentName: 'HyperVSCVMMIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Hyper-V/Hyper-V Server',
    componentName: 'HyperVServerIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Path Status

  {
    svgFilename: 'Group/Path/Path Status',
    componentName: 'PathStatusIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Host

  {
    svgFilename: 'Group/Host/Cluster',
    category: IconCategoryEnum.GROUP,
    tags: ['server'],
  },
  {
    svgFilename: 'Group/Host/Single',
    category: IconCategoryEnum.GROUP,
    tags: ['server'],
  },
  {
    svgFilename: 'Group/Host/Linux',
    category: IconCategoryEnum.GROUP,
    tags: ['server'],
  },
  {
    svgFilename: 'Group/Host/Windows',
    category: IconCategoryEnum.GROUP,
    tags: ['server'],
  },
  {
    svgFilename: 'Group/Host/Blueprint',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Infrastructure Cluster

  {
    svgFilename: 'Group/Infrastructure Cluster/Download',
    componentName: 'InfrastructureDownloadIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['server'],
  },
  {
    svgFilename: 'Group/Infrastructure Cluster/Regular',
    componentName: 'InfrastructureIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['server'],
  },
  {
    svgFilename: 'Group/Infrastructure Cluster/InfrastructureThin',
    componentName: 'InfrastructureThinIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['server'],
  },
  {
    svgFilename: 'Group/Infrastructure Cluster/InfrastructureClusterNutanix',
    componentName: 'InfrastructureClusterNutanixIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['server'],
  },

  // GROUP > Shield

  {
    svgFilename: 'Group/Shield/CDP',
    category: IconCategoryEnum.GROUP,
    tags: ['shield', 'protect'],
  },
  {
    svgFilename: 'Group/Shield/Clear SLA',
    category: IconCategoryEnum.GROUP,
    tags: ['shield', 'protect'],
  },
  {
    svgFilename: 'Group/Shield/Compliance',
    category: IconCategoryEnum.GROUP,
    tags: ['shield', 'approve', 'protect', 'check'],
  },
  {
    svgFilename: 'Group/Shield/Do Not Protect',
    category: IconCategoryEnum.GROUP,
    tags: ['shield', 'skip', 'block', 'cancel'],
  },
  {
    svgFilename: 'Group/Shield/Info',
    category: IconCategoryEnum.GROUP,
    tags: ['shield', 'important', 'attention', 'warning'],
  },
  {
    svgFilename: 'Group/Shield/Keep_forever',
    category: IconCategoryEnum.GROUP,
    tags: ['shield', 'infinity', 'protect'],
  },
  {
    svgFilename: 'Group/Shield/Paused SLA',
    category: IconCategoryEnum.GROUP,
    tags: ['shield', 'protect'],
  },
  {
    svgFilename: 'Group/Shield/Retention Lock',
    category: IconCategoryEnum.GROUP,
    tags: ['shield', 'protect'],
  },
  {
    svgFilename: 'Group/Shield/SLADomainAuditReportThin',
    componentName: 'SLADomainAuditReportThinIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['shield', 'protect'],
  },
  {
    svgFilename: 'Group/Shield/SLA Domain Audit Report',
    componentName: 'SLADomainAuditReportIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['shield', 'protect'],
  },
  {
    svgFilename: 'Group/Shield/ComplianceThin',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Shield/ProtectionThin',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Shield/ProtectionDetailThin',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > SLA

  {
    svgFilename: 'Group/SLA/Regular',
    componentName: 'SLAIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['shield', 'protection'],
  },

  // GROUP > Service Name

  {
    svgFilename: 'Group/Service Name/Regular',
    componentName: 'ServiceNameIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Cluster - on Map

  {
    svgFilename: 'Group/Cluster/Retention Lock',
    category: IconCategoryEnum.GROUP,
    tags: ['connected'],
  },
  {
    svgFilename: 'Group/Cluster/Warning',
    category: IconCategoryEnum.GROUP,
    tags: ['unstable', 'unhealthy'],
  },
  {
    svgFilename: 'Group/Cluster/Critical',
    category: IconCategoryEnum.GROUP,
    tags: ['disconnected'],
  },

  // GROUP > Bell

  {
    svgFilename: 'Group/Bell/Filled',
    category: IconCategoryEnum.GROUP,
    tags: ['notify'],
  },
  {
    svgFilename: 'Group/Bell/Outline',
    category: IconCategoryEnum.GROUP,
    tags: ['notify'],
  },

  // GROUP > Gear

  {
    svgFilename: 'Group/Gear/Filled',
    category: IconCategoryEnum.GROUP,
    tags: ['cog'],
  },
  {
    svgFilename: 'Group/Gear/Outline',
    category: IconCategoryEnum.GROUP,
    tags: ['cog', 'crystal'],
  },

  // GROUP > O365

  {
    svgFilename: 'Group/O365/Document Library',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/O365/Site',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/O365/Sites',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/O365/InPlaceRecovery',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Calendar

  {
    svgFilename: 'Group/Calendar/Date_Picker',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Calendar/Regular',
    componentName: 'CalendarIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['selected', 'approve', 'check'],
  },

  // GROUP > Live Mount

  {
    svgFilename: 'Group/Live Mount/Live Mount-VM',
    componentName: 'LiveMountVMIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['virtual'],
  },
  {
    svgFilename: 'Group/Live Mount/Live Mount',
    componentName: 'LiveMountIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['snapshot', 'camera'],
  },

  // GROUP > Lock

  {
    svgFilename: 'Group/Lock/Lock',
    componentName: 'LockIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['access', 'block', 'secure', 'security', 'guard', 'blocked'],
  },
  {
    svgFilename: 'Group/Lock/Unlock',
    componentName: 'UnlockIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['access', 'unblock', 'secure', 'security', 'guard', 'available'],
  },

  // GROUP > Tags

  {
    svgFilename: 'Group/Tags/Categories',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Tags/Single',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Volume

  {
    svgFilename: 'Group/Volume/EBS_Volume',
    componentName: 'VolumesIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['elastic', 'block', 'storage'],
  },
  {
    svgFilename: 'Group/Volume/Managed Volumes',
    componentName: 'ManagedVolumesIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Volume/Windows Volumes',
    componentName: 'WindowsVolumesIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Volume/SLAManagedVolumes',
    componentName: 'SlaManagedVolumes',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Volume/LegacyManagedVolumes',
    componentName: 'LegacyManagedVolumes',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > VCD

  {
    svgFilename: 'Group/VCD/VApp',
    category: IconCategoryEnum.GROUP,
    tags: ['vmware', 'virtual'],
  },
  {
    svgFilename: 'Group/VCD/VCD Instance',
    componentName: 'VCDInstanceIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['vmware', 'virtual'],
  },
  {
    svgFilename: 'Group/VCD/VCD vApps',
    componentName: 'VCDVAppsIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['vmware', 'virtual'],
  },

  // GROUP > Trending

  {
    svgFilename: 'Group/Trending/Down',
    category: IconCategoryEnum.GROUP,
    tags: ['analytics', 'chart', 'monitor', 'dashboard', 'reduce'],
  },
  {
    svgFilename: 'Group/Trending/Up',
    category: IconCategoryEnum.GROUP,
    tags: ['analytics', 'chart', 'monitor', 'dashboard', 'increase'],
  },

  // GROUP > Resize

  {
    svgFilename: 'Group/Resize/Maximize',
    componentName: 'MaximizeIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['grow', 'increase', 'bigger'],
  },
  {
    svgFilename: 'Group/Resize/Minimize',
    componentName: 'MinimizeIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['reduce', 'smaller'],
  },

  // GROUP > Peer

  {
    svgFilename: 'Group/Peer/Peer1Icon',
    componentName: 'Peer1Icon',
    category: IconCategoryEnum.GROUP,
    tags: ['one', 'first'],
  },
  {
    svgFilename: 'Group/Peer/Peer2Icon',
    componentName: 'Peer2Icon',
    category: IconCategoryEnum.GROUP,
    tags: ['two', 'second'],
  },

  // GROUP > Storage

  {
    svgFilename: 'Group/Storage/Storage Automatic V2',
    componentName: 'StorageAutomaticV2Icon',
    category: IconCategoryEnum.GROUP,
    tags: ['continuous', 'cycle'],
  },
  {
    svgFilename: 'Group/Storage/Storage Manual Setting',
    componentName: 'StorageManualSettingIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['gear', 'cog'],
  },

  // GROUP > Cloud

  {
    svgFilename: 'Group/Cloud/Filled',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Cloud/Outline',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Replication

  {
    svgFilename: 'Group/Replication/Replication Icon',
    componentName: 'ReplicationIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Replication/Source Icon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Pin

  {
    svgFilename: 'Group/Pin/Pin Outline',
    componentName: 'PinOutlineIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['PinIcon'],
  },
  {
    svgFilename: 'Group/Pin/Pin Fill',
    componentName: 'PinFillIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['PinIcon'],
  },
  {
    svgFilename: 'Group/Pin/Pin Straight',
    componentName: 'PinStraightIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['PinIcon', 'Thumbtack', 'Stick'],
  },

  // GROUP > Kubernetes

  {
    svgFilename: 'Group/Kubernetes/Kubernetes Cluster',
    componentName: 'KubernetesClusterIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['k8s', 'container', 'docker'],
  },
  {
    svgFilename: 'Group/Kubernetes/Kubernets Namespace',
    componentName: 'KubernetesNamespaceIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['k8s', 'container', 'docker'],
  },

  // GROUP > Compute

  {
    svgFilename: 'Group/Compute/Compute',
    componentName: 'ComputeIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['chip', 'cpu', 'memory', 'resources'],
  },

  // GROUP > Capacity

  {
    svgFilename: 'Group/Capacity/Filled',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Capacity/Outlined',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Capacity/ObjectCapacityThin',
    componentName: 'ObjectCapacityThinIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Capacity/ResourcePool',
    componentName: 'ResourcePoolIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Connection

  {
    svgFilename: 'Group/Connection/Connected',
    componentName: 'ConnectedIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['on', 'close', 'socket', 'plug'],
  },
  {
    svgFilename: 'Group/Connection/Disconnected',
    componentName: 'DisconnectedIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['off', 'open', 'interrupted', 'socket', 'plug'],
  },

  // GROUP > Recovery

  {
    svgFilename: 'Group/Recovery/IsolatedRecovery',
    componentName: 'IsolatedRecoveryIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Recovery/InPlaceRecovery',
    componentName: 'InPlaceRecoveryIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Recovery/InstantRecovery',
    componentName: 'InstantRecoveryIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Recovery/DisasterRecovery',
    componentName: 'DisasterRecoveryIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > NAS

  {
    svgFilename: 'Group/NAS/NAS',
    componentName: 'NASIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['network', 'storage', 'server', 'rack'],
  },
  {
    svgFilename: 'Group/NAS/NAS System',
    componentName: 'NASSystemIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['network', 'storage', 'server', 'rack'],
  },

  // GROUP > NetApp

  {
    svgFilename: 'Group/NetApp/NetApp Cluster',
    componentName: 'NetAppClusterIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Linux

  {
    svgFilename: 'Group/Linux/Linux Cluster',
    componentName: 'LinuxClusterIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Node

  {
    svgFilename: 'Group/Node/Node',
    componentName: 'NodeIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Instance

  {
    svgFilename: 'Group/Instance/EC2 Instance',
    componentName: 'EC2InstanceIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['elastic', 'amazon', 'cloud', 'computing'],
  },
  {
    svgFilename: 'Group/Instance/EC2 Instances',
    componentName: 'EC2InstancesIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['elastic', 'amazon', 'cloud', 'computing'],
  },
  {
    svgFilename: 'Group/Instance/GCP Instance',
    componentName: 'GCPInstanceIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['google', 'cloud', 'computing'],
  },
  {
    svgFilename: 'Group/Instance/General Instance',
    componentName: 'GeneralInstanceIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['cloud', 'computing'],
  },
  {
    svgFilename: 'Group/Instance/RDS Instance',
    componentName: 'RDSInstanceIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['amazon', 'cloud', 'computing'],
  },
  {
    svgFilename: 'Group/Instance/MSSQL Instance',
    componentName: 'MSSQLInstanceIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['microsoft', 'sql'],
  },

  // GROUP > Azure

  {
    svgFilename: 'Group/Azure/Managed Disks',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Azure/Resource Groups',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Azure/Managed Disks Tab',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Persistent Disks

  {
    svgFilename: 'Group/Persistent Disks/Persistent Disks',
    componentName: 'PersistentDisksIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Persistent Disks/Persistent Disks Tab',
    componentName: 'PersistentDisksTabIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Archive

  {
    svgFilename: 'Group/Archive/Global Archival Location',
    componentName: 'GlobalArchivalLocationIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['file', 'drawer', 'folder'],
  },
  {
    svgFilename: 'Group/Archive/Local Archival Location',
    componentName: 'LocalArchivalLocationIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['file', 'drawer', 'folder'],
  },

  // GROUP > Theme

  {
    svgFilename: 'Group/Theme/Bright',
    componentName: 'ThemeBrightIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Theme/Dark',
    componentName: 'ThemeDarkIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > SQL
  {
    svgFilename: 'Group/SQL/SQLServer',
    componentName: 'SQLServerIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/SQL/SQLManagedInstance',
    componentName: 'SQLManagedInstance',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Source
  {
    svgFilename: 'Group/Source/CassandraSource',
    componentName: 'CassandraSourceIcon',
    category: IconCategoryEnum.GROUP,
  },
  {
    svgFilename: 'Group/Source/MongoDBSource',
    componentName: 'MongoDBSourceIcon',
    category: IconCategoryEnum.GROUP,
  },

  // GROUP > Eye
  {
    svgFilename: 'Group/Eye/EyeShow',
    componentName: 'EyeShow',
    category: IconCategoryEnum.GROUP,
    tags: ['visible', 'vision', 'visibility'],
  },
  {
    svgFilename: 'Group/Eye/EyeHide',
    componentName: 'EyeHide',
    category: IconCategoryEnum.GROUP,
    tags: ['invisible', 'hidden', 'visibility'],
  },

  // Group > Thumbs
  {
    svgFilename: 'Group/Thumbs/ThumbsFillDown',
    componentName: 'ThumbsFillDownIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['dislike', 'feedback', 'disapproval'],
  },
  {
    svgFilename: 'Group/Thumbs/ThumbsFillUp',
    componentName: 'ThumbsFillUpIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['like', 'feedback', 'approval'],
  },
  {
    svgFilename: 'Group/Thumbs/ThumbsOutlineDown',
    componentName: 'ThumbsOutlineDownIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['dislike', 'feedback', 'disapproval'],
  },
  {
    svgFilename: 'Group/Thumbs/ThumbsOutlineUp',
    componentName: 'ThumbsOutlineUpIcon',
    category: IconCategoryEnum.GROUP,
    tags: ['like', 'feedback', 'approval'],
  },

  // Group > Workloads
  {
    svgFilename: 'Group/Workloads/Okta',
    componentName: 'OktaIcon',
    category: IconCategoryEnum.GROUP,
  },

  // Rooms
  {
    svgFilename: 'Rooms/GlobalDashboard',
    componentName: 'GlobalDashboardIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/DataProtectionFill',
    componentName: 'DataProtectionFillIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/DataProtectionOutline',
    componentName: 'DataProtectionOutlineIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/DataSecurityCommandCenterFill',
    componentName: 'DataSecurityCommandCenterFillIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/DataSecurityCommandCenterOutline',
    componentName: 'DataSecurityCommandCenterOutlineIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/OrchestratedRecoveryFill',
    componentName: 'OrchestratedRecoveryFillIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/OrchestratedRecoveryOutline',
    componentName: 'OrchestratedRecoveryOutlineIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/RansomwareMonitoringFill',
    componentName: 'RansomwareMonitoringFillIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/RansomwareMonitoringOutline',
    componentName: 'RansomwareMonitoringOutlineIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/SensitiveDataDiscoveryFill',
    componentName: 'SensitiveDataDiscoveryFillIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/SensitiveDataDiscoveryOutline',
    componentName: 'SensitiveDataDiscoveryOutlineIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/SaaSAppProtectionFill',
    componentName: 'SaaSAppProtectionFillIcon',
    category: IconCategoryEnum.ROOM,
  },
  {
    svgFilename: 'Rooms/SaaSAppProtectionOutline',
    componentName: 'SaaSAppProtectionOutlineIcon',
    category: IconCategoryEnum.ROOM,
  },
];
