import Link from 'next/link'
import { ComponentProps } from 'react'

export interface ArtigosContainerProps extends ComponentProps<typeof Link> {
  title: string
  description: string
  tags: string
}

export function ArtigoContainer({
  title,
  description,
  tags,
  ...props
}: ArtigosContainerProps) {
  return (
    <li className="rounded-md border border-zinc-500/20 p-6 hover:bg-zinc-900">
      <Link
        {...props}
        target="_blank"
        className="flex flex-col text-xs font-bold uppercase text-zinc-300 transition-all "
      >
        <span className="text-xl font-bold uppercase">{title}</span>
        <span className="mb-1 mt-3 w-full max-w-md truncate text-sm text-zinc-700">
          {description}
        </span>

        <ul className="flex items-center gap-2 ">
          <li className="text-xs font-bold uppercase text-primary ">{tags}</li>
        </ul>
      </Link>
    </li>
  )
}
