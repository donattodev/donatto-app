'use client'

import { Button } from '@/components/ui/button'
import { track } from '@vercel/analytics/react'
import Link from 'next/link'

export function ButtonMatricula() {
  return (
    <Button
      variant={'outline'}
      className="animate-left border-2 border-primary bg-transparent"
      onClick={() => {
        track('Matricula', { location: 'Progame' })
      }}
      asChild
    >
      <Link href="#" target="_blank">
        Matricule-se agora
      </Link>
    </Button>
  )
}
