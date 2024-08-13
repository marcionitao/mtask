import Link from 'next/link'
import { ModeToggle } from './theme-toggle-button'
import { buttonVariants } from './ui/button'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between pt-5">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        mTask
      </h1>

      <div className="flex items-center gap-x-2">
        <Link href="/new" className={buttonVariants({ variant: 'secondary' })}>
          New Task
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}
