"use client";

import { AccessCodeForm } from '@/components/accessCodeForm'
import { motion } from 'framer-motion'

export default function Homepage() {
  return (
    <motion.section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.h1 className="mb-4 text-4xl font-bold sm:text-7xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>ASEC Resource Portal</motion.h1>
      <AccessCodeForm />
      <br />
      <motion.p className="mb-8 max-w-150 text-foreground sm:text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <motion.a href="/info" className="text-blue-500 hover:text-blue-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Learn more
        </motion.a>
      </motion.p>
    </motion.section>
  )
}
