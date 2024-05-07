'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { FormNewsletterProgame } from '../forms/form-newsletter-progame'

import banner from '../../../public/progame/banner-popup.png'

export function DialogProgame() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasClosedPopup = localStorage.getItem('hasClosedPopup')
    if (!hasClosedPopup) {
      const timeoutId = setTimeout(() => {
        setIsOpen(true)
      }, 4000)

      return () => clearTimeout(timeoutId)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('hasClosedPopup', 'true')
  }

  return (
    <>
      {isOpen && (
        <div className="animate-fade fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/70 "
            onClick={() => setIsOpen(false)}
          />
          <dialog
            className="relative flex max-w-5xl items-center justify-between rounded-lg border bg-zinc-900 max-sm:flex-col max-sm:py-6"
            open
          >
            <div className="flex w-full flex-col gap-10 p-6">
              <div className="flex flex-col">
                <h2 className="font-headline text-2xl font-bold uppercase text-white">
                  Quer receber novidades e descontos?
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase text-zinc-400">
                  Cadastre-se na nossa Newsletter do progame e receba
                  informações diretamente em seu WhatsApp
                </p>
              </div>

              <FormNewsletterProgame />
            </div>

            <div className="w-full">
              <Image
                src={banner}
                className="h-[550px] w-full rounded-lg max-sm:hidden"
                quality={100}
                alt=""
              />
            </div>

            <button
              className="absolute right-2 top-2 text-zinc-200"
              onClick={handleClose}
            >
              <X className="w-4" />
            </button>

            <button
              className="absolute bottom-2 left-2 text-xs uppercase text-zinc-600 underline underline-offset-2 max-sm:bottom-2 max-sm:left-8"
              onClick={handleClose}
            >
              Não quero mais receber esse pop-up
            </button>
          </dialog>
        </div>
      )}
    </>
  )
}
