import { useState } from "react"
import CreateButton from "./CreateButton"
import { LibraryBig, ArrowRight } from "lucide-react"

export default function Sidebar() {
  /* Criação de variáveis contendo o hex das cores mais usadas pelos elementos. 
  Vale somente para o TypeScript */
  const normalColor: string = '#989999'
  const lightNormalColor: string = '#fffefe'

  const [libraryColor, setLibraryColor] = useState<string>('#b3b3b3')
  const [showMoreButtonColor, setShowMoreButtonColor] = useState<string>(normalColor)

  return (
    <aside className="flex flex-col gap-3 relative left-2 p-5 w-[17.5rem] rounded-lg bg-[#121212]">
      <div className="flex justify-between items-center">
        <button 
          onPointerOver={ () => setLibraryColor(lightNormalColor) } 
          onPointerLeave={ () => setLibraryColor(normalColor) }
          className="flex gap-1 cursor-pointer group" 
          title="Ocultar sua biblioteca"
        >
          <LibraryBig color={libraryColor} />
          <h1 className="text-zinc-300 group-hover:text-[var(--light-normal-color)] font-extrabold">Sua Biblioteca</h1>
        </button>

        <div className="flex gap-3">
          {/* Botão de Criar adaptado para a barra lateral */}
          <CreateButton isSidebar={true} />

          <button 
            onPointerOver={ () => setShowMoreButtonColor(lightNormalColor) }
            onPointerLeave={ () => setShowMoreButtonColor(normalColor) }
            className="cursor-pointer"
            title="Mostrar mais">
            <ArrowRight color={showMoreButtonColor} />
          </button>
        </div>
      </div>
    </aside>
  )
}