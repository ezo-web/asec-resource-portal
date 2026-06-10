import { type Paths } from '@/lib/pageroutes'

export const Documents: Paths[] = [
  {
    heading: 'Home',
    title: 'Resource Home',
    href: '/resource-home',
    items: [
      {
        title: 'Members',
        href: '/members',
      },
      {
        title: 'Schedule',
        href: '/schedule',
      },
      {
        title: 'Clubs',
        href: '/clubs',
      },
      {
        title: 'Finances',
        href: '/finances',
      },
      {
        title: 'Template Library',
        href: '/templates',
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: 'Meetings',
    title: 'Meeting Guides',
    href: '/meeting-guides',
    items: [
      {
        title: 'Internal Meetings',
        href: '/internal-meetings',
      },
      {
        title: 'Consortium',
        href: '/consortium',
      },
    ],
  },
  {
      spacer: true,
  },
  {
    heading: 'Documents',
    title: 'Handling',
    href: '/handling',
  },
  {
    title: 'Reports',
    href: '/reports',
    items: [
      {
    title: 'Transparency Report',
    href: '/transparency',
      },
      {
        title: 'Monthly Audit',
        href: '/monthly-audit',
      }
    ]
  },
  {
    spacer: true,
  },
  {
    title: 'Navigation',
    href: '/navigation',
    heading: 'Documents',
  },
  {
    title: 'Structure',
    href: '/structure',
    items: [
      {
        title: 'Deep',
        href: '/deep',
        items: [
          {
            title: 'Deeper',
            href: '/deeper',
            items: [
              {
                title: 'Even deeper',
                href: '/even-deeper',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: 'Markdown',
    href: '/markdown',
    heading: 'Components',
    items: [
      {
        title: 'Cards',
        href: '/cards',
      },
      {
        title: 'Diagrams',
        href: '/diagrams',
      },
      {
        title: 'Filetree',
        href: '/filetree',
      },
      {
        title: 'Lists',
        href: '/lists',
      },
      {
        title: 'Maths',
        href: '/maths',
      },
      {
        title: 'Notes',
        href: '/notes',
      },
      {
        title: 'Steps',
        href: '/steps',
      },
      {
        title: 'Table',
        href: '/table',
      },
      {
        title: 'Tabs',
        href: '/tabs',
      },
    ],
  },
]
