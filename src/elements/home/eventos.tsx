'use client'

import Image from 'next/image'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'

import reprogramando from '../../../public/reprogramando.png'

export function EventosHome() {
  return (
    <section className="my-28 px-56 max-lg:px-16 max-sm:px-4 ">
      <h2 className="text-xl font-bold uppercase max-sm:pb-6">Eventos</h2>

      <div className="flex items-center justify-center gap-6 max-sm:flex-col">
        <div className="w-full ">
          <Image src={reprogramando} alt="" />
        </div>

        <div className="flex w-full flex-col gap-4 py-[100px]">
          <div>
            <hgroup className="mb-12 flex flex-col gap-1">
              <h2 className="font-title text-2xl font-bold uppercase">
                Reprogramando
              </h2>
              <h3 className="font-bold uppercase text-zinc-500">Workaula</h3>
            </hgroup>
            <p className="mb-2 text-sm font-light">
              O primeiro site que eu fiz foi o Google Glass, desenvolvido no
              curso de{' '}
              <span className="font-bold text-primary">HTML e CSS</span> do{' '}
              <span className="font-bold text-primary">CURSO EM VÍDEO</span>,
              então resolvir reprograma-lo e gravar isso em uma aula gratuita
              pra vocês.
            </p>
            <p className="mb-2 text-sm font-light">
              Claro que usei novas metodologias e maneiras de se fazer, porem
              todos os ensinamentos do{' '}
              <span className="font-bold text-primary">
                {' '}
                Professor Gustavo Guanabara{' '}
              </span>
              são validos até hoje.
            </p>
          </div>

          <Button
            className="self-start"
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
    </section>
  )
}
