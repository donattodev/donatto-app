'use client'

import Link from 'next/link'
import { projetos } from '@/data/projetos'
import { ChangeEvent, useState } from 'react'
import { Input } from '@/components/ui/input'
import { ChromeIcon } from '@/components/icons/chrome'
import { GithubIcon } from '@/components/icons/github'

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  LibraryBig,
  Music,
  ShoppingBag,
} from 'lucide-react'

export default function ListaDeProjetos() {
  const [input, setInput] = useState('')
  const [page, setPage] = useState(1)

  const filteredProjetos = projetos.filter((projeto) =>
    projeto.name.toLowerCase().includes(input.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredProjetos.length / 5)

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
    setPage(1)
  }

  function goToNextPage() {
    setPage(page + 1)
  }

  function goToLastPage() {
    setPage(totalPages)
  }

  function goBackNextPage() {
    setPage(page - 1)
  }

  function goToFirstPage() {
    setPage(1)
  }

  return (
    <div className="flex flex-col justify-center gap-6 px-56 py-32 max-xl:px-28 max-md:px-16 max-sm:px-6">
      <div className="flex flex-col gap-3">
        <h2 className="animate-left font-black uppercase text-primary">
          Projetos em destaque
        </h2>

        <div className="flex items-center justify-center gap-4 max-xl:flex-col">
          <div className="animate-left flex w-full flex-col gap-4 ">
            <Link href="https://music-relax.vercel.app/" target="_blank">
              <div className="flex cursor-pointer flex-col gap-4 rounded-md border p-4 transition-all hover:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <Music />
                  <h2 className="text-lg font-bold">Music Relax</h2>
                </div>
                <span className="text-xs font-bold uppercase text-primary">
                  Front End
                </span>
                <span className="text-xs font-medium uppercase text-zinc-400">
                  Next Js, Tailwind, ShadcnUi, oAuth Google
                </span>
              </div>
            </Link>
          </div>

          <div className="animate-rigth flex w-full flex-col gap-4">
            <Link href="https://cupons-pi.vercel.app/" target="_blank">
              <div className="flex cursor-pointer flex-col gap-4 rounded-md border p-4 transition-all hover:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <ShoppingBag />
                  <h2 className="text-lg font-bold">Cupons</h2>
                </div>
                <span className="text-xs font-bold uppercase text-primary">
                  Front End
                </span>
                <span className="text-xs font-medium uppercase text-zinc-400">
                  Next Js, Tailwind, ShadcnUi, Geo Localização, FakerJs
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <form className="animate-left mt-6 max-w-sm">
        <Input
          type="text"
          onChange={onSearchInputChanged}
          placeholder="Procurar por projetos"
        />
      </form>

      <ul className="animate-down flex flex-col gap-2">
        <h2 className="font-black uppercase text-primary">Outros Projetos</h2>

        {filteredProjetos.slice((page - 1) * 5, page * 5).map((projeto) => (
          <div
            key={projeto.id}
            className="flex cursor-pointer justify-between rounded border px-6 py-3 text-zinc-300 transition-all hover:bg-zinc-900 hover:text-zinc-100"
          >
            <Link
              className="flex items-center gap-3 font-bold"
              href={projeto.projeto}
              target="_blank"
            >
              {projeto.name}
            </Link>

            <ul className="flex items-center gap-4">
              <li>
                <Link href={projeto.projeto} target="_blank">
                  <ChromeIcon className="icon w-5" />
                </Link>
              </li>

              {projeto.github === null ? (
                ''
              ) : (
                <li>
                  <Link href={projeto.github} target="_blank">
                    <GithubIcon className="icon w-5" />
                  </Link>
                </li>
              )}

              {projeto.docs === null ? (
                ''
              ) : (
                <li>
                  <Link href={projeto.docs} target="_blank">
                    <LibraryBig className="icon w-5 text-zinc-500" />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ))}
      </ul>

      <div className="animate-down col-span-3 flex items-center justify-between rounded-md border px-4 max-sm:flex-col max-sm:items-start max-sm:pb-2">
        <div className="col-span-1 py-3 text-xs font-semibold text-zinc-400">
          Mostrando {Math.min(filteredProjetos.length)} de{' '}
          {filteredProjetos.length}
        </div>

        <div className="col-span-2 flex items-center justify-end gap-4">
          <div className="text-xs font-semibold text-zinc-500">
            Página {page} de {totalPages}
          </div>

          <div className="flex items-center gap-4">
            <button
              className="rounded bg-neutral-600 px-2 py-1 text-zinc-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-900 dark:text-zinc-500 disabled:dark:bg-zinc-900"
              onClick={goToFirstPage}
              disabled={page === 1}
            >
              <ChevronsLeft className="w-4 " />
            </button>

            <button
              className="rounded bg-neutral-600 px-2 py-1 text-zinc-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-900 dark:text-zinc-500 disabled:dark:bg-zinc-900"
              onClick={goBackNextPage}
              disabled={page === 1}
            >
              <ChevronLeft className="w-4" />
            </button>

            <button
              className="rounded bg-neutral-600 px-2 py-1 text-zinc-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-900 dark:text-zinc-500 disabled:dark:bg-zinc-900"
              onClick={goToNextPage}
              disabled={page === totalPages}
            >
              <ChevronRight className="w-4 " />
            </button>

            <button
              className="rounded bg-neutral-600 px-2 py-1 text-zinc-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-900 dark:text-zinc-500 disabled:dark:bg-zinc-900"
              onClick={goToLastPage}
              disabled={page === totalPages}
            >
              <ChevronsRight className="w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
