import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <div className="flex-auto">{children}</div>
        <Footer />
      </div>
    </>
  )
}
