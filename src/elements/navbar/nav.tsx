import Link from 'next/link'
import { IconLogo } from '@/components/logo/icon-logo'
import { DialogContact } from '@/elements/dialogs/dialog-contact'
import { ResponsiveMenu } from './responsive'

export function Nav() {
  return (
    <nav className="fixed left-0 top-0 flex w-full items-center justify-between px-80 py-4 backdrop-blur-xl max-lg:px-16 max-sm:px-6">
      <Link href="/">
        <IconLogo className="size-10" />
      </Link>

      <ul className="flex items-center gap-8 text-sm font-light  uppercase tracking-widest text-zinc-400 max-lg:hidden ">
        <li>
          <Link href="/sobre" className="transition-all hover:text-zinc-100">
            Sobre
          </Link>
        </li>

        <li>
          <Link
            href="/list-projetos"
            className="transition-all hover:text-zinc-100"
          >
            Projetos
          </Link>
        </li>

        <li>
          <Link
            href="/list-artigos"
            className="transition-all hover:text-zinc-100"
          >
            Artigos
          </Link>
        </li>

        <li>
          <Link href="/posts" className="transition-all hover:text-zinc-100">
            Blog
          </Link>
        </li>

        <li>
          <DialogContact />
        </li>
      </ul>

      <ul className="lg:hidden">
        <li className="text-primary">
          <ResponsiveMenu />
        </li>
      </ul>
    </nav>
  )
}
