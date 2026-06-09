'use client'

import Link from 'next/link'
import { LuArrowUpRight, LuGithub } from 'react-icons/lu'

import { Anchor } from '@/components/anchor'
import { Logo } from '@/components/navigation/logo'
import { Search } from '@/components/navigation/search'
import { SheetLeft } from '@/components/sidebar'
import { buttonVariants } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { ModeToggle } from '@/components/ui/theme-toggle'
import { GitHubLink, Navigations } from '@/settings/navigation'
import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <motion.nav className="bg-opacity-5 sticky top-0 z-50 mx-auto flex h-16 w-full items-center justify-between border-b p-1 px-2 backdrop-blur-xl backdrop-filter sm:p-3 md:gap-2 md:px-4">
      <motion.div className="flex items-center gap-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <SheetLeft />
        <Logo />
        <motion.div className="hidden items-center gap-5 text-sm font-medium text-muted-foreground md:flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <NavMenu />
        </motion.div>
      </motion.div>

      <motion.div className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Search />
        <motion.div className="flex gap-2 sm:ml-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <ModeToggle />
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {Navigations.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            absolute
            activeClassName="font-bold text-primary"
            className="flex items-center gap-1 text-sm"
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
          >
            {item.title}{' '}
            <motion.div>
              {item.external && <LuArrowUpRight className="h-3 w-3 align-super" strokeWidth={3} />}
            </motion.div>
          </Anchor>
        )
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        )
      })}
    </>
  )
}
