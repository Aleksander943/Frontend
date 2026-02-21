export function Transaction() {
  return (
    <div className="px-4 py-5">

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[17px] font-bold tracking-tight text-[#1a1a18]">Extrato</h2>
        <button className="flex items-center gap-1 rounded-full bg-[#2d6a4f] px-3 py-[6px] text-[12px] font-semibold text-white">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Novo
        </button>
      </div>

      {/* Filter chips */}
      <div className="mb-4 flex gap-2">
        <button className="rounded-full bg-[#2d6a4f] px-4 py-[7px] text-[12px] font-semibold text-white">
          Todas
        </button>
        <button className="rounded-full border border-[#ebebeb] bg-white px-4 py-[7px] text-[12px] font-semibold text-[#9a9a94]">
          Receitas
        </button>
        <button className="rounded-full border border-[#ebebeb] bg-white px-4 py-[7px] text-[12px] font-semibold text-[#9a9a94]">
          Despesas
        </button>
      </div>

      {/* List */}
      <div className="rounded-[20px] border border-[#ebebeb] bg-white px-4">

        {/* Row — Receita */}
        <div className="flex items-center gap-3 border-b border-[#f5f5f3] py-[14px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#2d6a4f]/10 text-[19px]">
            💼
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-medium text-[#1a1a18]">Salário</p>
            <p className="text-[11px] text-[#c4c4bc]">Trabalho · 01 fev</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[13.5px] font-bold text-[#2d6a4f]">+R$ 6.500,00</p>
            <span className="rounded-[10px] bg-[#e8f4ef] px-[7px] py-[2px] text-[10px] font-semibold text-[#2d6a4f]">
              Receita
            </span>
          </div>
        </div>

        {/* Row — Receita */}
        <div className="flex items-center gap-3 border-b border-[#f5f5f3] py-[14px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#2d6a4f]/10 text-[19px]">
            💼
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-medium text-[#1a1a18]">Freelance</p>
            <p className="text-[11px] text-[#c4c4bc]">Trabalho · 05 fev</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[13.5px] font-bold text-[#2d6a4f]">+R$ 1.950,00</p>
            <span className="rounded-[10px] bg-[#e8f4ef] px-[7px] py-[2px] text-[10px] font-semibold text-[#2d6a4f]">
              Receita
            </span>
          </div>
        </div>

        {/* Row — Despesa */}
        <div className="flex items-center gap-3 border-b border-[#f5f5f3] py-[14px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#9b59b6]/10 text-[19px]">
            🏠
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-medium text-[#1a1a18]">Aluguel</p>
            <p className="text-[11px] text-[#c4c4bc]">Moradia · 05 fev</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[13.5px] font-bold text-[#1a1a18]">−R$ 1.200,00</p>
            <span className="rounded-[10px] bg-[#fff5f0] px-[7px] py-[2px] text-[10px] font-semibold text-[#e07b39]">
              Despesa
            </span>
          </div>
        </div>

        {/* Row — Despesa */}
        <div className="flex items-center gap-3 border-b border-[#f5f5f3] py-[14px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e07b39]/10 text-[19px]">
            🍽️
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-medium text-[#1a1a18]">Mercado</p>
            <p className="text-[11px] text-[#c4c4bc]">Alimentação · 08 fev</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[13.5px] font-bold text-[#1a1a18]">−R$ 430,50</p>
            <span className="rounded-[10px] bg-[#fff5f0] px-[7px] py-[2px] text-[10px] font-semibold text-[#e07b39]">
              Despesa
            </span>
          </div>
        </div>

        {/* Row — Despesa */}
        <div className="flex items-center gap-3 border-b border-[#f5f5f3] py-[14px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e8c84a]/10 text-[19px]">
            🎬
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-medium text-[#1a1a18]">Streaming</p>
            <p className="text-[11px] text-[#c4c4bc]">Lazer · 10 fev</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[13.5px] font-bold text-[#1a1a18]">−R$ 55,00</p>
            <span className="rounded-[10px] bg-[#fff5f0] px-[7px] py-[2px] text-[10px] font-semibold text-[#e07b39]">
              Despesa
            </span>
          </div>
        </div>

        {/* Row — Receita */}
        <div className="flex items-center gap-3 border-b border-[#f5f5f3] py-[14px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#4a90d9]/10 text-[19px]">
            📈
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-medium text-[#1a1a18]">Dividendos</p>
            <p className="text-[11px] text-[#c4c4bc]">Investimento · 14 fev</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[13.5px] font-bold text-[#2d6a4f]">+R$ 187,50</p>
            <span className="rounded-[10px] bg-[#e8f4ef] px-[7px] py-[2px] text-[10px] font-semibold text-[#2d6a4f]">
              Receita
            </span>
          </div>
        </div>

        {/* Row — Despesa */}
        <div className="flex items-center gap-3 border-b border-[#f5f5f3] py-[14px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e07b39]/10 text-[19px]">
            🍽️
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-medium text-[#1a1a18]">Restaurante</p>
            <p className="text-[11px] text-[#c4c4bc]">Alimentação · 15 fev</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[13.5px] font-bold text-[#1a1a18]">−R$ 142,00</p>
            <span className="rounded-[10px] bg-[#fff5f0] px-[7px] py-[2px] text-[10px] font-semibold text-[#e07b39]">
              Despesa
            </span>
          </div>
        </div>

        {/* Row — Despesa (last, no border) */}
        <div className="flex items-center gap-3 py-[14px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#1abc9c]/10 text-[19px]">
            🚗
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-medium text-[#1a1a18]">Uber</p>
            <p className="text-[11px] text-[#c4c4bc]">Transporte · 17 fev</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[13.5px] font-bold text-[#1a1a18]">−R$ 68,00</p>
            <span className="rounded-[10px] bg-[#fff5f0] px-[7px] py-[2px] text-[10px] font-semibold text-[#e07b39]">
              Despesa
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}



