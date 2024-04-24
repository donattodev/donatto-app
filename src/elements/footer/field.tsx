import { ComponentProps, ReactNode } from 'react'

export type FieldProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Field({ children }: FieldProps) {
  return (
    <div className="flex flex-row items-start justify-between bg-zinc-900 px-56 py-20 max-lg:px-16 max-sm:px-6">
      {children}
    </div>
  )
}
