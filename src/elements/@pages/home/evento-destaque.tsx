'use client'

import Image from 'next/image'
import { Toaster, toast } from 'sonner'
import { Button } from '@/components/ui/button'

import reprogramando from '@/assets/cover/reprogramando.png'

export function EventoDestaque() {
  return (
    <section className="my-28 px-56 max-lg:px-16 max-sm:px-6">
      <h2 className="mb-4 text-xl font-bold uppercase max-sm:pb-6">Eventos</h2>

      <div className="grid grid-cols-2 items-center gap-4 max-sm:grid-cols-1">
        <div className="w-full ">
          <Image src={reprogramando} alt="" />
        </div>

        <div className="flex w-full flex-col ">
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
              toast('Salve na agenda', {
                description: 'O evento acontecerá no dia 05/05/2024',
              })
            }
          >
            Ir para evento
          </Button>
        </div>
      </div>
      <Toaster theme="dark" />
    </section>
  )
}
