import { ProjetosPrivate } from '@/elements/@pages/projetos/projetos-private'
import { ProjetosOpenSource } from '@/elements/@pages/projetos/projetos-open-source'
import { DestaqueListProjetos } from '@/elements/@pages/projetos/destaque-list-projetos'

export default function ListaDeProjetos() {
  return (
    <div className="mb-16 mt-32 px-56 max-lg:px-16 max-sm:px-6">
      <DestaqueListProjetos />

      <div>
        <ul className="flex flex-col gap-4">
          <ProjetosOpenSource />
          <ProjetosPrivate />
        </ul>
      </div>
    </div>
  )
}
