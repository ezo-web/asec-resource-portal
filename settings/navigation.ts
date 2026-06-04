import { PageRoutes } from '@/lib/pageroutes'

export const Navigations = [
  {
    title: 'Docs',
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: 'Public Site',
    href: 'https://asec.crd.co',
    external: true,
  },
]

export const GitHubLink = {
  href: 'https://github.com/rubixvi/rubix-documents',
}
