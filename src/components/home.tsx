export function Home() {
    return(
         <div className="relative overflow-hidden rounded-b-[28px] bg-gradient-to-br from-[#1e4d38] via-[#2d6a4f] to-[#3d8f65] px-6 pb-10 pt-6">

      {/* Círculos decorativos */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-8 left-3 h-28 w-28 rounded-full bg-white/[0.04]" />

      {/* Greeting + Bell */}
      <div className="relative mb-6 flex items-start justify-between">
        <div>
          <p className="text-[13px] text-white/60">Olá, João 👋</p>
          <p className="text-[12px] text-white/40">Fevereiro 2025</p>
        </div>

        <button className="relative flex rounded-xl bg-white/10 p-[0.55rem] text-white/90">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="absolute right-[5px] top-[5px] h-[7px] w-[7px] rounded-full border-2 border-[#2d6a4f] bg-red-500" />
        </button>
      </div>

      {/* Saldo */}
      <div className="relative mb-5">
        <p className="mb-[5px] text-[11px] uppercase tracking-[0.07em] text-white/50">
          Saldo disponível
        </p>
        <p className="mb-2 font-serif text-[34px] font-bold leading-none tracking-tight text-white">
          R$ 5.169,50
        </p>
        <span className="rounded-full bg-white/15 px-[10px] py-[3px] text-[11px] font-medium text-white/85">
          61% do rendimento poupado
        </span>
      </div>

      {/* Pills receita / despesa */}
      <div className="relative grid grid-cols-2 gap-[10px]">

        <div className="rounded-2xl bg-white/10 p-[0.85rem]">
          <div className="mb-[5px] flex items-center gap-[5px]">
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[6px] bg-[#52b788] text-[10px] font-extrabold text-white">↑</span>
            <span className="text-[11px] text-white/55">Receitas</span>
          </div>
          <p className="text-[15px] font-bold tracking-tight text-white">R$ 8.450,00</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-[0.85rem]">
          <div className="mb-[5px] flex items-center gap-[5px]">
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[6px] bg-[#fbbf24] text-[10px] font-extrabold text-white">↓</span>
            <span className="text-[11px] text-white/55">Despesas</span>
          </div>
          <p className="text-[15px] font-bold tracking-tight text-white">R$ 3.280,50</p>
        </div>

      </div>
    </div>
    )
};