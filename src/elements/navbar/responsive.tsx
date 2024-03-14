import Link from 'next/link'
import { Menu } from 'lucide-react'

import { GithubIcon } from '@/components/icons/github'
import { BehanceIcon } from '@/components/icons/behance'
import { InstagramIcon } from '@/components/icons/instagram'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ResponsiveMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-6 mt-6 w-80 max-sm:mr-6">
        <DropdownMenuItem>
          <Link href="/">Home</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/sobre">Sobre</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/list-projetos">Projetos</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/list-artigos">Artigos</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="https://github.com/felippedonatto" target="_blank">
                <GithubIcon className="w-5" fill="#71717a" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.behance.net/felippedon8296"
                target="_blank"
              >
                <BehanceIcon className="w-5" fill="#71717a" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/donattodev_"
                target="_blank"
              >
                <InstagramIcon className="w-5" fill="#71717a" />
              </Link>
            </li>
          </ul>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
