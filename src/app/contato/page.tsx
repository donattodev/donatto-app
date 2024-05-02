import Link from 'next/link'
import { Mail, Smartphone } from 'lucide-react'
import { FormContato } from '@/elements/forms/form-contato'
import { SocialLinks } from '@/elements/social/social-links'

export default function Contato() {
  return (
    <div className="grid grid-cols-2 gap-2 px-56 py-32 max-xl:px-28 max-md:px-16 max-sm:grid-cols-1 max-sm:gap-8 max-sm:px-6">
      <div className="flex flex-col gap-8">
        <div className="mb-6">
          <h2 className="animate-left text-2xl font-bold uppercase">
            Orçamentos
          </h2>
          <span className="animate-left block text-sm font-light text-zinc-400">
            Entre em contato para tirar suas duvidas sobre os serviços.
          </span>
        </div>

        <ul className="mb-6 flex flex-col gap-4">
          <li>
            <Link href="#" className="animate-left flex items-center gap-3">
              <Mail className="w-5 text-primary" />
              <span className="font-medium text-zinc-200">
                donattodev@gmail.com
              </span>
            </Link>
          </li>
          <li>
            <Link href="#" className="animate-left flex items-center gap-3">
              <Smartphone className="w-5 text-primary" />
              <span className="font-medium text-zinc-200">77 9 9818-5475</span>
            </Link>
          </li>
        </ul>

        <SocialLinks />
      </div>
      <div>
        <FormContato />
      </div>
    </div>
  )
}
