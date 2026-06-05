'use client'

import { collection, getDocs, query, where } from 'firebase/firestore'
import { type FormEvent, useState } from 'react'
import { useCookies } from 'react-cookie'

import db from '@/lib/firebase'
import { PageRoutes } from '@/lib/pageroutes'
import { Link } from '@/lib/transition'
import { buttonVariants } from './ui/button'

export function AccessCodeForm() {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null)
  const [accessName, setAccessName] = useState<string | null>(null)
  const [isCheckingAccess, setIsCheckingAccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [cookies, setCookie] = useCookies(['accessPerm', 'accessName', 'accessExpiration'])
  const accessPerm = cookies.accessPerm == true
  const accessNameCookie = cookies.accessName

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const accessCode = String(formData.get('accessCode') ?? '').trim()

    setIsCheckingAccess(true)
    setErrorMessage(null)

    try {
      const usersQuery = query(collection(db, 'users'), where('code', '==', accessCode))
      const querySnapshot = await getDocs(usersQuery)
      const matchedUser = querySnapshot.docs[0]

      if (matchedUser) {
        const matchedName = matchedUser.data().name
        setHasAccess(true)
        setAccessName(typeof matchedName === 'string' ? matchedName : null)
        setCookie('accessPerm', 'true', { path: '/', maxAge: 60 * 60 })
        setCookie('accessName', matchedName, { path: '/', maxAge: 60 * 60 })
        setCookie('accessExpiration', Date.now() + 60 * 60 * 1000, { path: '/', maxAge: 60 * 60 })
        return
      }

      setHasAccess(false)
      setAccessName(null)
      setErrorMessage('Access denied. Incorrect code.')
    } catch (error) {
      console.error('Error checking access code:', error)
      setHasAccess(false)
      setAccessName(null)
      setErrorMessage('Unable to verify access code right now. Please try again.')
    } finally {
      setIsCheckingAccess(false)
    }
  }

  const tod = new Date().getHours()

  return (
    <section>
      {!accessPerm && (
        <>
          {!hasAccess && (
            <p className="mb-8 max-w-150 text-primary sm:text-base">
              This is an internal site only for access by approved members of ASEC. Please input the
              access code.
            </p>
          )}
          {hasAccess && (
            <p className="mb-8 max-w-150 text-primary sm:text-base">
              This is an internal site only for access by approved members of ASEC. Please click the
              button to continue.
            </p>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              name="accessCode"
              type="password"
              placeholder="Enter access code"
              className="mb-4 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              disabled={isCheckingAccess}
            />
            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
            <button
              className={buttonVariants({ className: 'px-6', size: 'lg' })}
              type="submit"
              disabled={isCheckingAccess}
            >
              {isCheckingAccess ? 'Checking...' : 'Verify access code'}
            </button>
          </form>
        </>
      )}
      {accessPerm && (
        <div>
          {tod < 12 ? (
            <p className="text-lg font-medium text-primary">Good morning{accessNameCookie ? `, ${accessNameCookie}` : ''}</p>
          ) : tod < 18 ? (
            <p className="text-lg font-medium text-primary">Good afternoon{accessNameCookie ? `, ${accessNameCookie}` : ''}</p>
          ) : (
            <p className="text-lg font-medium text-primary">Good evening{accessNameCookie ? `, ${accessNameCookie}` : ''}</p>
          )}
          <p>This session expires at {new Date(cookies.accessExpiration).toLocaleString().slice(11)}</p>
          <br />
          <Link
            href={`/docs${PageRoutes[0].href}`}
            className={buttonVariants({ className: 'px-6', size: 'lg' })}
          >
            Go to docs
          </Link>
        </div>
      )}
    </section>
  )
}