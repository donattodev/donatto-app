import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface RootProps extends ComponentProps<'nav'> {
  children: ReactNode
  bg?: boolean
}

export function Root({ bg, children, ...props }: RootProps) {
  return (
    <nav
      className={twMerge(
        'absolute left-0 top-0 flex  h-[10vh] w-full items-center justify-between px-56 max-xl:px-28 max-md:px-16 max-sm:px-6',
        bg ? 'bg-zinc-900' : 'bg-transparent',
      )}
      {...props}
    >
      {children}
    </nav>
  )
}
