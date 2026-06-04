"use client";

import { FormEvent, useState } from 'react';
import { buttonVariants } from './ui/button';
import { PageRoutes } from '@/lib/pageroutes';
import { Link } from '@/lib/transition';
import { useCookies } from 'react-cookie';

export function AccessCodeForm(){
  const [hasAccess, setHasAccess] = useState<boolean | null>(null)
  const [formPassed, setFormPassed] = useState<boolean | null>(null)
  const [cookies, setCookie] = useCookies(['accessPerm']);
  const accessPerm = cookies.accessPerm;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
  const accessCode = formData.get('accessCode') as string | null
  if (accessCode && accessCode === process.env.NEXT_PUBLIC_ACCESS_CODE) {
    setHasAccess(true)
    setCookie('accessPerm', 'true', { path: '/', maxAge: 60 * 60 }) // Cookie expires in 1 hour
  } else {
    setHasAccess(false)
    setCookie('accessPerm', 'false', { path: '/', maxAge: 60 * 60 }) // Cookie expires in 1 hour
  }
  }

    return (
    <>
    {!accessPerm && (
      <div>
        {!hasAccess && <p className="mb-8 max-w-150 text-foreground sm:text-base">
        This is an internal site only for access by approved members of ASEC. Please input the access code.
        </p>}
        {hasAccess && (
          <p className="mb-8 max-w-150 text-foreground sm:text-base">
            This is an internal site only for access by approved members of ASEC. Please click the button to continue.
          </p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              name="accessCode"
              type="password"
              placeholder="Enter access code"
              className="mb-4 border border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
      </form>
      </div>
    )}
    {accessPerm && (
      <div>
        {hasAccess && (
            <div className="flex items-center justify-center gap-5">
                <button className={buttonVariants({ className: 'px-6', size: 'lg' })} onClick={() => setFormPassed(true)}>
                    <Link
                        href={`/docs${PageRoutes[0].href}`}
                        className={buttonVariants({ className: 'px-6', size: 'lg' })}
                    >
                        Continue
                    </Link>
                </button>
            </div>
        )}
      </div>
    )}
    </>
    )
}