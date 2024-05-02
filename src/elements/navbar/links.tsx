import { ComponentProps } from 'react'
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export type LinksProps = ComponentProps<'ul'>

const navigation = [
  // { name: 'Sobre', href: '#', current: false },
  { name: 'Projetos', href: 'projetos', current: false },
]

export function Links(props: LinksProps) {
  return (
    <>
      <ul
        className="inline-flex gap-8 font-sans text-sm font-semibold uppercase text-zinc-400 max-sm:hidden"
        {...props}
      >
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="animate-down flex flex-col"
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </ul>

      <Sheet>
        <SheetTrigger className="sm:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="animate-left flex flex-col"
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </SheetContent>
      </Sheet>
    </>
  )
}
