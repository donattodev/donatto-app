import { ComponentProps } from 'react'
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export type LinksProps = ComponentProps<'ul'>

const navigation = [
  { name: 'Sobre', href: 'sobre', current: false },
  { name: 'Projetos', href: 'projetos', current: false },
  {
    name: 'Artigos',
    href: 'https://blog.donattodev.com.br',
    target: '_blank',
    current: false,
  },
  { name: 'Contato', href: 'contato', current: false },
]

export function Links(props: LinksProps) {
  return (
    <>
      <ul
        className="inline-flex gap-8 font-sans text-sm font-semibold uppercase text-zinc-100 max-sm:hidden"
        {...props}
      >
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="animate-down flex flex-col transition-all duration-200 hover:text-zinc-400"
            aria-current={item.current ? 'page' : undefined}
            target={item.target}
          >
            {item.name}
          </a>
        ))}
      </ul>

      <Sheet>
        <SheetTrigger className="sm:hidden">
          <MenuIcon className="text-primary" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-2 pt-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="animate-down flex flex-col transition-all hover:text-zinc-400"
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
