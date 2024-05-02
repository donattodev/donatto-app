'use client'

import { CornerRightUp } from 'lucide-react'

export function UpScroll() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      onClick={handleClick}
      className="animate-down flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-zinc-950"
    >
      <CornerRightUp className="w-5 text-zinc-300" />
    </div>
  )
}
