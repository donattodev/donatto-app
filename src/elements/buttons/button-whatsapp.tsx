'use client'

import { Button } from '@/components/ui/button'
import { track } from '@vercel/analytics/react'

interface ButtonProps {
  info?: string
  local?: string
}

export function ButtonWhatsapp({
  local = 'Progame',
  info = 'Whatsapp',
}: ButtonProps) {
  return (
    <Button
      className="animate-left"
      onClick={() => {
        track(info, { location: local })
      }}
    >
      Fale com o professor
    </Button>
  )
}
