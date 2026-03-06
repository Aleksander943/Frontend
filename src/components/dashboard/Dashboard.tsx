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
      <div className="h-[100svh] w-full overflow-hidden bg-[#edf2ef] sm:h-[100dvh] sm:max-w-[440px] sm:rounded-[42px] sm:shadow-[0_20px_60px_rgba(9,30,20,0.16)] p-2">
         <div className="flex h-full flex-col overflow-hidden">
            <main className="min-h-0 flex-1 p-1.5 pb-1">
               <div className="grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)] gap-4 sm:grid-rows-[46%_54%]">
                  <section className="min-h-0 overflow-visible sm:overflow-hidden">
                     <Home resumo={resumo} />
                  </section>
                  <section className="min-h-0 overflow-hidden">
                     <Transaction onResumoChange={handleResumoChange} />
                  </section>
               </div>
            </main>
            <footer className="h-[70px] shrink-0">
               <NavBar />
            </footer>
         </div>
      </div>
   )
}