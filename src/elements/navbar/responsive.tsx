import Link from 'next/link'
import { GithubIcon } from '@/components/icons/github'
import { BehanceIcon } from '@/components/icons/behance'
import { InstagramIcon } from '@/components/icons/instagram'
import { YoutubIcon } from '@/components/icons/youtube-icon'

import { Book, Headset, Home, LibraryBig, Menu, User } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from '@/components/ui/dialog'

export function ResponsiveMenu() {
  return (
    <Dialog>
      <DialogTrigger>
        <Menu />
      </DialogTrigger>
      <DialogContent className="flex min-h-screen max-w-full flex-col items-center justify-center gap-6 border-none  bg-transparent backdrop-blur-lg max-lg:px-0">
        <>
          <ul className="flex flex-col items-center gap-4">
            <li>
              <DialogClose asChild>
                <Link href="/" className="flex items-center gap-3">
                  <Home className="w-5" />
                  <span className="mt-1">Home</span>
                </Link>
              </DialogClose>
            </li>

            <li>
              <DialogClose asChild>
                <Link className="flex items-center gap-3" href="/sobre">
                  <User className="w-5" />
                  <span className="mt-1">Sobre</span>
                </Link>
              </DialogClose>
            </li>

            <li>
              <DialogClose asChild>
                <Link className="flex items-center gap-3" href="/list-projetos">
                  <LibraryBig className="w-5" />
                  <span className="mt-1">Projeto</span>
                </Link>
              </DialogClose>
            </li>

            <li>
              <DialogClose asChild>
                <Link className="flex items-center gap-3" href="/list-artigos">
                  <Book className="w-5" />
                  <span className="mt-1">Artigos</span>
                </Link>
              </DialogClose>
            </li>

            <li>
              <DialogClose asChild>
                <Link className="flex items-center gap-3" href="/contato">
                  <Headset className="w-5" />
                  <span className="mt-1">Contato</span>
                </Link>
              </DialogClose>
            </li>
          </ul>

          <ul className="flex items-center gap-3">
            <li>
              <Link href="https://github.com/felippedonatto" target="_blank">
                <GithubIcon className="w-5" fill="#7c7c8a" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.behance.net/felippedon8296"
                target="_blank"
              >
                <BehanceIcon className="w-5" fill="#7c7c8a" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/donattodev_/"
                target="_blank"
              >
                <InstagramIcon className="w-5" fill="#7c7c8a" />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.youtube.com/channel/UCuzXf39ClGKVnH8HikpgMUA"
                target="_blank"
              >
                <YoutubIcon className="w-5" fill="#7c7c8a" />
              </Link>
            </li>
          </ul>
        </>
      </DialogContent>
    </Dialog>
  )
}
