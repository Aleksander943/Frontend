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
   <div className="h-[100dvh] w-full max-w-[440px] overflow-hidden rounded-[42px] bg-[#edf2ef] shadow-[0_20px_60px_rgba(9,30,20,0.16)]">
      <div className="flex h-full flex-col">
         <div className="min-h-0 flex-1 overflow-y-auto">
            <Home resumo={resumo} />
            <Transaction onResumoChange={handleResumoChange} />
         </div>
         <NavBar />
      </div>
   </div>
)
}
