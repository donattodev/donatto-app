import Link from 'next/link'
import { ComponentProps } from 'react'
import { IconLogo } from '@/components/logos/icon-logo'

export type LogoProps = ComponentProps<typeof Link>

export function Logo(props: LogoProps) {
  return (
    <Link {...props}>
      <IconLogo className="animate-down w-10" />
    </Link>
  )
}
