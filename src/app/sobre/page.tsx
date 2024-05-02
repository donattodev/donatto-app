'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Copy } from 'lucide-react'
import donatto from '@/assets/donatto.jpg'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { SocialLinks } from '@/elements/social/social-links'

export default function Sobre() {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    const bioText = document.getElementById('bioText')

    if (bioText) {
      const textArea = document.createElement('textarea')
      textArea.value = bioText.innerText
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)

      setCopied(true)

      toast({
        title: 'Bio copiada com sucesso!',
        duration: 3000,
      })
    }
  }

  return (
    <>
      <section className="flex justify-center gap-4 px-56 py-16 max-xl:px-28 max-sm:flex-col max-sm:px-6">
        <div className="animate-left w-2/6 max-sm:w-full">
          <Image
            src={donatto}
            alt=""
            width={540}
            height={540}
            className="rounded-xl"
          />
        </div>

        <div className="animate-rigth flex w-4/6 flex-col gap-4 text-zinc-400  max-sm:w-full">
          <p className="text-justify">
            Olá, eu sou{' '}
            <span className="font-bold text-zinc-200">Felippe Donatto</span>,
            sou desenvolvedor front-end com{' '}
            <span className="font-bold text-zinc-200">
              10 anos de experiência
            </span>
            . Apaixonado pela programação, ouso a criar minhas próprias APIs,
            explorando gradualmente o mundo do backend. Como entusiasta da arte,
            também me aventuro no design UI/UX e criação de marcas, embora não
            seja um profissional de design, tenho conhecimentos na área.
          </p>

          <p className="text-justify">
            Desde do inicio trabalho com tecnologias como HTML e CSS, e venho me
            atualizando constantemente com{' '}
            <span className="font-bold text-zinc-200">
              Typescript, Next.js, JavaScript,{' '}
            </span>
            minha jornada reflete uma evolução constante na criação de
            experiências digitais impactantes.
          </p>

          <p className="text-justify">
            Hoje, estou envolvido no projetos pessoais visando melhorar cada dia
            meus conhecimentos e{' '}
            <span className="font-bold text-zinc-200">compartilhando</span> eles
            com a comunidade.
          </p>

          <div>
            <span className="mb-2 block font-bold text-primary">
              Redes sociais
            </span>
            <SocialLinks />
          </div>
        </div>
      </section>

      <div className="px-56 pb-16 max-xl:px-28 max-sm:px-6">
        <div className="flex flex-col gap-6">
          <h2 className="animate-left text-xl font-bold text-primary">BIO</h2>
          <p className="animate-left">
            Esta área é feita para jornalistas, apresentadores de podcast e
            organizadores de eventos copiarem e colarem.
          </p>

          <div className="border-l-4 p-4  leading-6 text-zinc-400" id="bioText">
            <p className="animate-left text-wrap">
              Felippe Donatto é um desenvolvedor front-end e empreendedor
              brasileiro. Sua experiência e dedicação na área o destacam como
              profissional comprometido com o aprimoramento constante.
              Atualmente, ele concentra seus esforços no desenvolvimento de
              projetos inovadores, contribuindo para a evolução do cenário do
              desenvolvimento front-end.
            </p>
          </div>

          <Button
            variant="outline"
            className="animate-left flex items-center gap-2 self-start"
            onClick={copyToClipboard}
          >
            <Copy size={18} />
            {copied ? 'Bio copiada!' : 'Copia Bio'}
          </Button>
        </div>
      </div>

      <Toaster />
    </>
  )
}
