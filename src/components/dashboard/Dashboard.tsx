import { useCallback, useState } from "react"
import { Home } from "./home"
import { NavBar } from "./navBar"
import { Transaction, type ResumoData } from "./transaction/transaction"

export function Dashboard() {
const [resumo, setResumo] = useState<ResumoData>({ receita: 0, despesa: 0, saldo: 0 })

const handleResumoChange = useCallback((nextResumo: ResumoData) => {
   setResumo((prevResumo) => {
      const unchanged =
         prevResumo.receita === nextResumo.receita &&
         prevResumo.despesa === nextResumo.despesa &&
         prevResumo.saldo === nextResumo.saldo

      return unchanged ? prevResumo : nextResumo
   })
}, [])

return (
   <div className="h-[94vh] max-h-[1040px] w-[calc(100%-1.25rem)] max-w-[440px] overflow-hidden rounded-[42px] bg-[#edf2ef] shadow-[0_20px_60px_rgba(9,30,20,0.16)]">
      <div className="flex h-full flex-col">
         <Home resumo={resumo} />
         <Transaction onResumoChange={handleResumoChange} />
         <NavBar />
      </div>
   </div>
)
}
