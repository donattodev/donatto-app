import { Bio } from '@/elements/@pages/sobre/bio'
import { HeaderSobre } from '@/elements/@pages/sobre/header-sobre'
import { FooterBase } from '@/elements/footer/footer-base'

export default function Sobre() {
  return (
    <>
      <div className="px-56 py-28 max-lg:px-16 max-sm:px-6">
        <HeaderSobre />
        <Bio />
      </div>
      <FooterBase />
    </>
  )
}
