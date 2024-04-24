import Link from 'next/link'

import { BehanceIcon } from '@/components/icons/behance'
import { GithubIcon } from '@/components/icons/github'
import { InstagramIcon } from '@/components/icons/instagram'
import { YoutubIcon } from '@/components/icons/youtube-icon'

export function Base() {
  return (
    <div className="flex w-full items-center justify-between bg-neutral-950 px-56 py-6  max-lg:px-16 max-sm:px-6">
      <div>
        <ul className="flex items-center gap-3">
          <li className="rounded bg-zinc-900 p-2 transition-all hover:bg-primary">
            <Link href="https://github.com/felippedonatto" target="_blank">
              <GithubIcon className="icon w-5" />
            </Link>
          </li>
          <li className="rounded bg-zinc-900 p-2 transition-all hover:bg-primary">
            <Link href="https://www.behance.net/felippedon8296" target="_blank">
              <BehanceIcon className="icon w-5" />
            </Link>
          </li>
          <li className="rounded bg-zinc-900 p-2 transition-all hover:bg-primary">
            <Link href="https://www.instagram.com/donattodev_/" target="_blank">
              <InstagramIcon className="icon w-5" />
            </Link>
          </li>

          <li className="rounded bg-zinc-900 p-2 transition-all hover:bg-primary">
            <Link
              href="https://www.youtube.com/channel/UCuzXf39ClGKVnH8HikpgMUA"
              target="_blank"
            >
              <YoutubIcon className="icon w-5" />
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}
