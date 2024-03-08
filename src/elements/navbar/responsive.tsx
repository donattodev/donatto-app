import Link from 'next/link'
import { Menu } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { GithubIcon } from '@/components/icons/github'
import { BehanceIcon } from '@/components/icons/behance'
import { InstagramIcon } from '@/components/icons/instagram'

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

        <DropdownMenuItem>
          <Link href="/posts">Blog</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ul className="flex items-center gap-4">
            <li>
              <GithubIcon className="w-5" fill="#71717a" />
            </li>
            <li>
              <BehanceIcon className="w-5" fill="#71717a" />
            </li>
            <li>
              <InstagramIcon className="w-5" fill="#71717a" />
            </li>
          </ul>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
