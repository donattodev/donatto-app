import { ComponentProps, ReactNode } from 'react'

export type RootProps = ComponentProps<'footer'> & {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return <footer className="flex w-full flex-col">{children}</footer>
}
