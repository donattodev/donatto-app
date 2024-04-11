'use client'

import Image from 'next/image'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

import reprogramando from '@/assets/cover/reprogramando.png'
import { Toaster } from '@/components/ui/sonner'

export default function Agenda() {
  return (
    <div className="px-56 py-28 max-lg:px-16 max-sm:px-6">
      <div className="flex items-center gap-6 rounded-lg border-2 p-4 max-sm:flex-col">
        <Image src={reprogramando} alt="" className="w-36 max-sm:w-full" />

        <div className="flex flex-col">
          <hgroup className="flex flex-col">
            <h2 className="font-title text-2xl font-bold uppercase">
              Reprogramando
            </h2>
            <h3 className="mb-2 text-sm font-bold uppercase text-zinc-500">
              Workaula
            </h3>
          </hgroup>

          <Button
            className="self-start max-sm:w-full"
            onClick={() =>
              toast('Inscrições fechadas', {
                description: 'As incrições serão abertas no dia 25/03/2024',
              })
            }
          >
            Ir para evento
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
