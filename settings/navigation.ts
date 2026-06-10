import { PageRoutes } from '@/lib/pageroutes'

export const Navigations = [
  {
    title: 'Docs',
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: 'Public Site',
    href: '/not-found',
    external: true,
  },
]

export const GitHubLink = {
  href: 'https://github.com/rubixvi/rubix-documents',
}
