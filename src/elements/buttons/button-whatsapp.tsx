'use client'

import { Button } from '@/components/ui/button'
import { track } from '@vercel/analytics/react'
import Link from 'next/link'

export function ButtonWhatsapp() {
  return (
    <Button
      className="animate-left"
      onClick={() => {
        track('WhatsApp', { location: 'Progame' })
      }}
      asChild
    >
      <Link href="#" target="_blank">
        Fale com o professor
      </Link>
    </Button>
  )
}
