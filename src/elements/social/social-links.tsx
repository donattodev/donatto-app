import { BehanceIcon } from '@/components/icons/behance'
import { GithubIcon } from '@/components/icons/github'
import { InstagramIcon } from '@/components/icons/instagram'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { SpotifyIcon } from '@/components/icons/spotofy-icon'
import { YoutubIcon } from '@/components/icons/youtube-icon'
import Link from 'next/link'

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link
          href="https://www.youtube.com/channel/UCuzXf39ClGKVnH8HikpgMUA"
          target="_blank"
        >
          <YoutubIcon className="icon animate-down w-6" />
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/donattodev_" target="_blank">
          <InstagramIcon className="icon animate-down w-6" />
        </Link>
      </li>
      <li>
        <Link href="https://www.behance.net/felippedon8296" target="_blank">
          <BehanceIcon className="icon animate-down w-6" />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/donattodev" target="_blank">
          <GithubIcon className="icon animate-down w-6" />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/felippe-donatto-oliveira-7212a4121/"
          target="_blank"
        >
          <LinkedinIcon className="icon animate-down w-6" />
        </Link>
      </li>
      <li>
        <Link
          href="https://open.spotify.com/intl-pt/album/17VsdbGONVYMYrIxOemkP0"
          target="_blank"
        >
          <SpotifyIcon className="icon animate-down w-6" />
        </Link>
      </li>
    </ul>
  )
}
