import Link from 'next/link'
import { GithubIcon, Menu } from 'lucide-react'

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
          <Link href="/">Artigos</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/posts">Blog</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ul className="flex items-center gap-4">
            <li>
              <GithubIcon size={18} />
            </li>
            <li>
              <GithubIcon size={18} />
            </li>
            <li>
              <GithubIcon size={18} />
            </li>
            <li>
              <GithubIcon size={18} />
            </li>
          </ul>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
