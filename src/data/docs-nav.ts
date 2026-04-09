export interface NavItem {
  title: string;
  slug: string;
  href: string;
  description?: string;
}

export interface NavSubSection {
  title: string;
  slug: string;
  href: string;
  description?: string;
  items: NavItem[];
}

export interface NavSection {
  title: string;
  slug: string;
  href: string;
  items: (NavItem | NavSubSection)[];
}

export function isNavSubSection(item: NavItem | NavSubSection): item is NavSubSection {
  return 'items' in item;
}

export const docsNav: NavSection[] = [
  {
    title: 'Getting Started',
    slug: 'getting-started',
    href: '/docs/getting-started/',
    items: [],
  },
  {
    title: 'Configuration',
    slug: 'configuration',
    href: '/docs/configuration/',
    items: [],
  },
  {
    title: 'Pipelines',
    slug: 'pipelines',
    href: '/docs/pipelines/',
    items: [
      { title: 'Version 1', slug: 'pipelines/v1', href: '/docs/pipelines/v1/', description: 'Sequential steps, machine and container execution' },
      { title: 'Version 2', slug: 'pipelines/v2', href: '/docs/pipelines/v2/', description: 'Parallel jobs, SSH, Dockerfile support, advanced expressions' },
    ],
  },
  {
    title: 'Server',
    slug: 'server',
    href: '/docs/server/',
    items: [
      { title: 'Running a Server', slug: 'server/running-a-server', href: '/docs/server/running-a-server/', description: 'Start and manage a bld server instance' },
      { title: 'Database', slug: 'server/database', href: '/docs/server/database/', description: 'Configure PostgreSQL, MySQL, or SQLite backends' },
      { title: 'Authorization', slug: 'server/authorization', href: '/docs/server/authorization/', description: 'Set up OIDC authentication' },
      { title: 'TLS', slug: 'server/tls', href: '/docs/server/tls/', description: 'Enable TLS/SSL for secure connections' },
      { title: 'SSH', slug: 'server/ssh', href: '/docs/server/ssh/', description: 'Configure SSH connection profiles' },
      {
        title: 'User Interface',
        slug: 'server/ui',
        href: '/docs/server/ui/',
        description: 'Web UI for managing pipelines and monitoring runs',
        items: [
          { title: 'Login', slug: 'server/ui/login', href: '/docs/server/ui/login/', description: 'Authenticate with the server UI' },
          { title: 'Dashboard', slug: 'server/ui/dashboard', href: '/docs/server/ui/dashboard/', description: 'Overview of pipeline activity and stats' },
          { title: 'History', slug: 'server/ui/history', href: '/docs/server/ui/history/', description: 'Browse past pipeline run history' },
          { title: 'Monitor', slug: 'server/ui/monitor', href: '/docs/server/ui/monitor/', description: 'Watch a pipeline run in real time' },
          { title: 'Pipelines', slug: 'server/ui/pipelines', href: '/docs/server/ui/pipelines/', description: 'List and manage pipelines on the server' },
          { title: 'Pipeline Info', slug: 'server/ui/pipelines-info', href: '/docs/server/ui/pipelines-info/', description: 'View details and history for a single pipeline' },
          { title: 'Pipeline Run', slug: 'server/ui/pipelines-run', href: '/docs/server/ui/pipelines-run/', description: 'Trigger a pipeline run with variables' },
          { title: 'Cron Jobs', slug: 'server/ui/cron', href: '/docs/server/ui/cron/', description: 'Manage scheduled pipeline runs' },
          { title: 'Cron Info', slug: 'server/ui/cron-info', href: '/docs/server/ui/cron-info/', description: 'View and edit a cron job schedule' },
        ],
      },
    ],
  },
  {
    title: 'GitHub Action',
    slug: 'github-action',
    href: '/docs/github-action/',
    items: [],
  },
  {
    title: 'CLI Reference',
    slug: 'cli',
    href: '/docs/cli/',
    items: [
      { title: 'cat', slug: 'cli/cat', href: '/docs/cli/cat/', description: 'Print a remote pipeline\'s contents' },
      { title: 'check', slug: 'cli/check', href: '/docs/cli/check/', description: 'Validate a pipeline file' },
      { title: 'config', slug: 'cli/config', href: '/docs/cli/config/', description: 'Display the current configuration' },
      { title: 'cp', slug: 'cli/cp', href: '/docs/cli/cp/', description: 'Copy a pipeline on a server' },
      { title: 'cron', slug: 'cli/cron', href: '/docs/cli/cron/', description: 'Manage cron jobs on a server' },
      { title: 'help', slug: 'cli/help', href: '/docs/cli/help/', description: 'Print help for any command' },
      { title: 'hist', slug: 'cli/hist', href: '/docs/cli/hist/', description: 'Browse pipeline run history' },
      { title: 'init', slug: 'cli/init', href: '/docs/cli/init/', description: 'Initialize a bld project directory' },
      { title: 'login', slug: 'cli/login', href: '/docs/cli/login/', description: 'Authenticate with a bld server' },
      { title: 'ls', slug: 'cli/ls', href: '/docs/cli/ls/', description: 'List pipelines on a server' },
      { title: 'monit', slug: 'cli/monit', href: '/docs/cli/monit/', description: 'Monitor a running pipeline' },
      { title: 'mv', slug: 'cli/mv', href: '/docs/cli/mv/', description: 'Move or rename a remote pipeline' },
      { title: 'pull', slug: 'cli/pull', href: '/docs/cli/pull/', description: 'Download a pipeline from a server' },
      { title: 'push', slug: 'cli/push', href: '/docs/cli/push/', description: 'Upload a pipeline to a server' },
      { title: 'rm', slug: 'cli/rm', href: '/docs/cli/rm/', description: 'Remove a pipeline from a server' },
      { title: 'run', slug: 'cli/run', href: '/docs/cli/run/', description: 'Execute a pipeline locally or on a server' },
      { title: 'server', slug: 'cli/server', href: '/docs/cli/server/', description: 'Start a bld server' },
      { title: 'stop', slug: 'cli/stop', href: '/docs/cli/stop/', description: 'Stop a running pipeline' },
      { title: 'supervisor', slug: 'cli/supervisor', href: '/docs/cli/supervisor/', description: 'Manage the supervisor process' },
      { title: 'worker', slug: 'cli/worker', href: '/docs/cli/worker/', description: 'Manage worker processes' },
    ],
  },
  {
    title: 'Examples',
    slug: 'examples',
    href: '/docs/examples/',
    items: [
      { title: '.NET Pipeline', slug: 'examples/dotnet-pipeline', href: '/docs/examples/dotnet-pipeline/', description: 'Build and analyze a .NET project with parallel jobs' },
      { title: 'Node.js Pipeline', slug: 'examples/nodejs-pipeline', href: '/docs/examples/nodejs-pipeline/', description: 'Install, test, and build a Node.js project' },
    ],
  },
];

/** Flat ordered list of all pages for prev/next navigation */
export function flattenNav(): NavItem[] {
  const result: NavItem[] = [];
  for (const section of docsNav) {
    result.push({ title: section.title, slug: section.slug, href: section.href });
    for (const item of section.items) {
      if (isNavSubSection(item)) {
        result.push({ title: item.title, slug: item.slug, href: item.href });
        for (const sub of item.items) {
          result.push(sub);
        }
      } else {
        result.push(item);
      }
    }
  }
  return result;
}
