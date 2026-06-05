import { AccessCodeForm } from '@/components/accessCodeForm'

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">ASEC Resource Portal</h1>
      <AccessCodeForm />
      <br />
      <p className="mb-8 max-w-150 text-foreground sm:text-sm">
        <a href="/info" className="text-blue-500 hover:text-blue-700">
        Learn more
        </a>
      </p>
    </section>
  )
}
