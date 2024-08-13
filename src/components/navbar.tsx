import Link from 'next/link'
import { ModeToggle } from './theme-toggle-button'
import { buttonVariants } from './ui/button'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <h1>mTask</h1>

      <div className="flex items-center gap-x-2">
        <Link href="/new" className={buttonVariants({ variant: 'secondary' })}>
          New Task
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}
