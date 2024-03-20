import { HtmlIcon } from '@/components/icons/html'
import { CssIcon } from '@/components/icons/css'
import { JsIcon } from '@/components/icons/js'
import { NextIcon } from '@/components/icons/next'

export function HeaderHome() {
  return (
    <header className="mb-64 mt-64 px-56 max-lg:px-16 max-sm:mb-28 max-sm:px-6">
      <hgroup className="flex flex-col gap-6">
        <h1 className="font-title text-6xl font-bold">Felippe Donatto</h1>

        <div>
          <h2>
            <span>Desenvolvedor </span>
            <span className="text-lg font-bold text-primary">Front end!</span>
          </h2>
          <p className="mt-1 font-semibold text-zinc-200">
            Transformando <span className="text-primary">sonhos</span> em
            aplicações!
          </p>
        </div>

        <div>
          <ul className="flex items-center gap-4">
            <li>
              <HtmlIcon className="w-6" fill="#71717a" />
            </li>
            <li>
              <CssIcon className="w-6" fill="#71717a" />
            </li>
            <li>
              <JsIcon className="w-6" fill="#71717a" />
            </li>
            <li>
              <NextIcon className="w-6" fill="#71717a" />
            </li>
          </ul>
        </div>
      </hgroup>
    </header>
  )
}
