import Link from 'next/link'
import { Menu } from 'lucide-react'

import { GithubIcon } from '@/components/icons/github'
import { BehanceIcon } from '@/components/icons/behance'
import { InstagramIcon } from '@/components/icons/instagram'

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'

export function ResponsiveMenu() {
  return (
    <Dialog>
      <DialogTrigger>
        <Menu />
      </DialogTrigger>
      <DialogContent className="flex min-h-screen w-full flex-col items-center justify-center border-none bg-transparent backdrop-blur-lg">
        <DialogHeader>
          <ul className="flex flex-col gap-4">
            <li>
              <DialogClose asChild>
                <Link href={`${process.env.NEXT_PUBLIC_URL_BASE}/`}>Home</Link>
              </DialogClose>
            </li>

            <li>
              <DialogClose asChild>
                <Link href={`${process.env.NEXT_PUBLIC_URL_BASE}/sobre`}>
                  Sobre
                </Link>
              </DialogClose>
            </li>

            <li>
              <DialogClose asChild>
                <Link
                  href={`${process.env.NEXT_PUBLIC_URL_BASE}/list-projetos`}
                >
                  Projeto
                </Link>
              </DialogClose>
            </li>

            <li>
              <DialogClose asChild>
                <Link href={`${process.env.NEXT_PUBLIC_URL_BASE}/list-artigos`}>
                  Artigos
                </Link>
              </DialogClose>
            </li>

            <li>
              <DialogClose asChild>
                <Link href={`${process.env.NEXT_PUBLIC_URL_BASE}/contato`}>
                  Contato
                </Link>
              </DialogClose>
            </li>

            <li>
              <ul className="flex items-center gap-3">
                <li>
                  <Link
                    href="https://github.com/felippedonatto"
                    target="_blank"
                  >
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
              </ul>
            </li>
          </ul>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
