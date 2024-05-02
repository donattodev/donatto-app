import Link from 'next/link'
import { Mail, Smartphone } from 'lucide-react'
import { YoutubIcon } from '@/components/icons/youtube-icon'
import { InstagramIcon } from '@/components/icons/instagram'
import { BehanceIcon } from '@/components/icons/behance'
import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { SpotifyIcon } from '@/components/icons/spotofy-icon'
import { FormContato } from '@/elements/forms/form-contato'

export default function Contato() {
  return (
    <div className="grid grid-cols-2 gap-2 px-56 py-20 max-xl:px-28 max-md:px-16 max-sm:grid-cols-1 max-sm:gap-8 max-sm:px-6">
      <div className="flex flex-col gap-8 max-sm:items-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold uppercase max-sm:text-center">
            Orçamentos
          </h2>
          <span className="text-sm font-light text-zinc-400 max-sm:text-center">
            Entre em contato para tirar suas duvidas sobre os serviços.
          </span>
        </div>

        <ul className="mb-6 flex flex-col gap-4">
          <li>
            <Link href="#" className="flex items-center gap-3">
              <Mail className="w-5 text-primary" />
              <span className="font-medium text-zinc-200">
                donattodev@gmail.com
              </span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3">
              <Smartphone className="w-5 text-primary" />
              <span className="font-medium text-zinc-200">77 9 9818-5475</span>
            </Link>
          </li>
        </ul>

        <ul className="flex items-center gap-4">
          <li>
            <Link
              href="https://www.youtube.com/channel/UCuzXf39ClGKVnH8HikpgMUA"
              target="_blank"
            >
              <YoutubIcon className="icon w-6" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/donattodev_" target="_blank">
              <InstagramIcon className="icon w-6" />
            </Link>
          </li>
          <li>
            <Link href="https://www.behance.net/felippedon8296" target="_blank">
              <BehanceIcon className="icon w-6" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/donattodev" target="_blank">
              <GithubIcon className="icon w-6" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/felippe-donatto-oliveira-7212a4121/"
              target="_blank"
            >
              <LinkedinIcon className="icon w-6" />
            </Link>
          </li>
          <li>
            <Link
              href="https://open.spotify.com/intl-pt/album/17VsdbGONVYMYrIxOemkP0"
              target="_blank"
            >
              <SpotifyIcon className="icon w-6" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <FormContato />
      </div>
    </div>
  )
}
