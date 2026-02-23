import { useState } from "react"
import { Home } from "./home"
import { NavBar } from "./navBar"
import { Transaction, type ResumoData } from "./transaction/transaction"

export function Dashboard() {
const [resumo, setResumo] = useState<ResumoData>({ receita: 0, despesa: 0, saldo: 0 })

return (
   <div className="w-full h-screen max-w-3xl rounded-[28px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.08)]">
   <Home resumo={resumo} />
   <Transaction onResumoChange={setResumo} />
   <NavBar />
   </div> 
)
}
