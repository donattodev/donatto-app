import { ComponentProps, ReactNode } from 'react'

export type FieldProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Field({ children }: FieldProps) {
  return (
    <div className="box flex flex-row items-start justify-between bg-zinc-900 py-16 max-sm:flex-col max-sm:gap-6">
      {children}
    </div>
  )
}
