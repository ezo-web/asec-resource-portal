import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { type ReactNode } from 'react'

import { Sidebar } from '@/components/sidebar'

interface DocumentsProps {
  children: Readonly<ReactNode>
}

export default async function Documents({ children }: DocumentsProps) {
  const accessPerm = (await cookies()).get('accessPerm')?.value

  if (accessPerm !== 'true') {
    redirect('/')
  }

  return (
    <div className="flex items-start gap-10 pt-10">
      <Sidebar />
      <div className="flex-1 md:flex-6">{children}</div>
    </div>
  )
}
