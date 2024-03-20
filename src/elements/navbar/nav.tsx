import Link from 'next/link'
import { ResponsiveMenu } from './responsive'
import { IconLogo } from '@/components/logo/icon-logo'
import { DialogContact } from '@/elements/dialogs/dialog-contact'

export function Nav() {
  return (
    <nav className="fixed left-0 top-0 flex w-full items-center justify-between px-56 py-4 backdrop-blur-xl max-lg:px-16 max-sm:px-6">
      <Link href={`${process.env.NEXT_PUBLIC_URL_BASE}/`}>
        <IconLogo className="size-10" />
      </Link>

      <ul className="flex items-center gap-8 text-sm font-semibold  uppercase leading-5 text-zinc-400 max-lg:hidden ">
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_URL_BASE}/sobre`}
            className="transition-all hover:text-zinc-100"
          >
            Sobre
          </Link>
        </li>

        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_URL_BASE}/list-projetos`}
            className="transition-all hover:text-zinc-100"
          >
            Projetos
          </Link>
        </li>

        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_URL_BASE}/list-artigos`}
            className="transition-all hover:text-zinc-100"
          >
            Artigos
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
