import { Home } from "./home"
import { NavBar } from "./navBar"
import { Transaction } from "./transaction/transaction"

export function Dashboard() {
return (
   <div className="w-full max-w-3xl rounded-[28px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.08)]">
   <Home />
   <Transaction />
   <NavBar />
   </div> 
)
}
