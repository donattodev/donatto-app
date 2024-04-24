import Link from 'next/link'
import { GithubIcon } from '@/components/icons/github'
import { BehanceIcon } from '@/components/icons/behance'
import { InstagramIcon } from '@/components/icons/instagram'
import { YoutubIcon } from '@/components/icons/youtube-icon'

import { Book, Headset, Home, LibraryBig, Menu, User } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

export function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <ul className="mt-10 flex flex-col items-start gap-4">
            <li>
              <SheetClose asChild>
                <Link href="/" className="flex items-center gap-3">
                  <Home className="w-5" />
                  <span className="mt-1">Home</span>
                </Link>
              </SheetClose>
            </li>

            <li>
              <SheetClose asChild>
                <Link className="flex items-center gap-3" href="/sobre">
                  <User className="w-5" />
                  <span className="mt-1">Sobre</span>
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link className="flex items-center gap-3" href="/list-projetos">
                  <LibraryBig className="w-5" />
                  <span className="mt-1">Projeto</span>
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link className="flex items-center gap-3" href="/list-artigos">
                  <Book className="w-5" />
                  <span className="mt-1">Artigos</span>
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link className="flex items-center gap-3" href="/contato">
                  <Headset className="w-5" />
                  <span className="mt-1">Contato</span>
                </Link>
              </SheetClose>
            </li>

            <ul className="flex items-center gap-3">
              <li>
                <SheetClose asChild>
                  <Link
                    href="https://github.com/felippedonatto"
                    target="_blank"
                  >
                    <GithubIcon className="w-5" fill="#7c7c8a" />
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link
                    href="https://www.behance.net/felippedon8296"
                    target="_blank"
                  >
                    <BehanceIcon className="w-5" fill="#7c7c8a" />
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link
                    href="https://www.instagram.com/donattodev_/"
                    target="_blank"
                  >
                    <InstagramIcon className="w-5" fill="#7c7c8a" />
                  </Link>
                </SheetClose>
              </li>

              <li>
                <SheetClose asChild>
                  <Link
                    href="https://www.youtube.com/channel/UCuzXf39ClGKVnH8HikpgMUA"
                    target="_blank"
                  >
                    <YoutubIcon className="w-5" fill="#7c7c8a" />
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
