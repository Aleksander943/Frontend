import { useEffect, useState } from "react";
import type { ResumoData } from "./transaction/transaction";

interface HomeProps {
  resumo: ResumoData;
}

const formatAmount = (value: number) =>
  value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });



export function Home({ resumo }: HomeProps) {
  const [usuario, setUsuario] = useState<string | null>("");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("username");
    setUsuario(nomeSalvo);
  }, []);


  const percent = resumo.receita > 0
    ? Math.max(0, Math.round(((resumo.receita - resumo.despesa) / resumo.receita) * 100))
    : 0;

  const totalMovimentado = resumo.receita + resumo.despesa;
  const receitaPercent = totalMovimentado > 0 ? Math.round((resumo.receita / totalMovimentado) * 100) : 0;
  const despesaPercent = totalMovimentado > 0 ? Math.round((resumo.despesa / totalMovimentado) * 100) : 0;

  return (
    <div className="relative h-full overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1f6b43] via-[#14552f] to-[#0b3f24] p-5 shadow-lg">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/[0.04]" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-white/[0.03]" />

      <div className="relative mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#5be093] text-lg font-black text-[#10442a]">
            {usuario?.charAt(0).toUpperCase() ?? "A"}
          </div>
          <div className="min-w-0">
            <p className="truncate text-[clamp(1rem,5.4vw,1.65rem)] font-semibold capitalize leading-tight text-white">{usuario ?? "aleksander"}</p>
            <p className="text-[11px] text-[#84d5aa]">Fevereiro de 2025</p>
          </div>
        </div>

        <button className="relative flex h-9 w-9 items-center justify-center rounded-[12px] border border-white/15 bg-white/[0.08] text-white/80">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </div>

      <div className="relative mb-3">
        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#74d8a6]">Saldo disponível</p>
        <div className="mb-2.5 flex items-end gap-[6px] text-white">
          <span className="mb-[6px] whitespace-nowrap text-[clamp(1.4rem,6vw,1.8rem)] font-bold">R$</span>
          <span className="min-w-0 truncate whitespace-nowrap text-[clamp(2rem,9.3vw,2.8rem)] font-extrabold leading-none tracking-[-1px]">{formatAmount(resumo.saldo)}</span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-[999px] border border-[#4dd78f]/30 bg-[#1f7b4d]/55 px-3 py-1">
          <span className="h-[7px] w-[7px] rounded-full bg-[#58dd98]" />
          <span className="text-[12px] font-medium text-[#85dfb1]">{percent}% do rendimento poupado</span>
        </div>
      </div>

      <div className="relative grid grid-cols-2 gap-2.5">
        <div className="min-w-0 rounded-[18px] border border-white/10 bg-white/[0.09] p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-[#2e8d59]/70 text-sm">💚</span>
            <span className="text-[12px] font-medium text-[#a6d7bc]">Receitas</span>
          </div>
          <p className="truncate whitespace-nowrap text-[clamp(1.1rem,6vw,1.8rem)] font-extrabold leading-none tracking-tight text-white">R$ {formatAmount(resumo.receita)}</p>
          <p className="mt-1 text-[11px] font-semibold text-[#6fe2a8]">{receitaPercent}% da movimentação</p>
        </div>

        <div className="min-w-0 rounded-[18px] border border-white/10 bg-white/[0.09] p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-[#7b7f2b]/60 text-sm">🟡</span>
            <span className="text-[12px] font-medium text-[#a6d7bc]">Despesas</span>
          </div>
          <p className="truncate whitespace-nowrap text-[clamp(1.1rem,6vw,1.8rem)] font-extrabold leading-none tracking-tight text-white">R$ {formatAmount(resumo.despesa)}</p>
          <p className="mt-1 text-[11px] font-semibold text-[#f0be43]">{despesaPercent}% da movimentação</p>
        </div>
      </div>
    </div>
  );
}
