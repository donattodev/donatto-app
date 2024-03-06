import Link from 'next/link'
import { Menu } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DialogContact } from '../dialogs/dialog-contact'

export function ResponsiveMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-6 mt-6 w-80 max-sm:mr-0">
        <DropdownMenuLabel>Bem-vindo</DropdownMenuLabel>
        <DropdownMenuSeparator />
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
          <Link href="/blog">Blog</Link>
        </DropdownMenuItem>

        <span>
          <DialogContact />
        </span>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
