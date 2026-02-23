import { useState, useEffect, useCallback, useMemo } from "react";
import { AdicionarTransaction } from "./novo/adicionarTransaction";
import api from "../../../services/api";

// Mapeamento de ícones e cores por categoria
const categoryMap: Record<string, { icon: string; color: string }> = {
  trabalho: { icon: "💼", color: "bg-[#2d6a4f]/10" },
  moradia: { icon: "🏠", color: "bg-[#9b59b6]/10" },
  alimentacao: { icon: "🍽️", color: "bg-[#e07b39]/10" },
  saude: { icon: "💊", color: "bg-[#e74c3c]/10" },
  lazer: { icon: "🎬", color: "bg-[#e8c84a]/10" },
  transporte: { icon: "🚗", color: "bg-[#1abc9c]/10" },
  investimento: { icon: "📈", color: "bg-[#4a90d9]/10" },
  outros: { icon: "💰", color: "bg-gray-100" },
};

type ApiTransaction = {
  id: number;
  description: string;
  value?: number | string;
  amount?: number | string;
  type: string;
  category?: string;
  createdAt?: string;
  date?: string;
};

export type ResumoData = {
  receita: number;
  despesa: number;
  saldo: number;
};

type TransactionProps = {
  onResumoChange?: (resumo: ResumoData) => void;
};

export function Transaction({ onResumoChange }: TransactionProps) {
  const [open, setOpen] = useState(false);
  const [transactions, setTransactions] = useState<ApiTransaction[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await api.get("/transactions");
      setTransactions(response.data);
    } catch (error) {
      console.error("Erro ao buscar transações:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const resumo = useMemo(
    () =>
      transactions.reduce(
        (acc, t) => {
          const transactionValue = Number(t.value ?? t.amount ?? 0);
          const transactionType = String(t.type || "").toLowerCase();

          if (transactionType === "receita") {
            acc.receita += transactionValue;
          } else {
            acc.despesa += transactionValue;
          }

          acc.saldo = acc.receita - acc.despesa;
          return acc;
        },
        { receita: 0, despesa: 0, saldo: 0 }
      ),
    [transactions]
  );

  useEffect(() => {
    onResumoChange?.(resumo);
  }, [resumo, onResumoChange]);

  return (
    <div className="px-4 py-5">
      <div className="mb-4 flex items-center  justify-between">
        <h2 className="text-[17px] font-bold text-[#1a1a18]">Extrato</h2>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 rounded-full bg-[#2d6a4f] px-3 py-[6px] text-[12px] font-semibold text-white"
        >
          Novo
        </button>
      </div>

      {/* List */}
      <div className="rounded-[20px] border border-[#ebebeb] bg-white px-4">
        {loading ? (
          <p className="py-10 text-center text-[13px] text-[#9a9a94]">Carregando...</p>
        ) : transactions.length === 0 ? (
          <p className="py-10 text-center text-[13px] text-[#9a9a94]">Nenhuma transação encontrada.</p>
        ) : (
          transactions.map((t, index) => {
            const isReceita = String(t.type || "").toLowerCase() === "receita";
            const categoryKey = t.category || "outros";
            const category = categoryMap[categoryKey] || categoryMap.outros;
            const dateValue = t.date || t.createdAt;
            const transactionValue = Number(t.value ?? t.amount ?? 0);

            return (
              <div 
                key={t.id} 
                className={`flex items-center gap-3 py-[14px] ${index !== transactions.length - 1 ? "border-b border-[#f5f5f3]" : ""}`}
              >
                <div className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] ${category.color} text-[19px]`}>
                  {category.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] font-medium text-[#1a1a18]">{t.description}</p>
                  <p className="text-[11px] text-[#c4c4bc]">
                    {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
                    {dateValue
                      ? ` · ${new Date(dateValue).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}`
                      : ""}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className={`text-[13.5px] font-bold ${isReceita ? "text-[#2d6a4f]" : "text-[#1a1a18]"}`}>
                    {isReceita ? "+" : "-"} R$ {transactionValue.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                  <span className={`rounded-[10px] px-[7px] py-[2px] text-[10px] font-semibold ${isReceita ? "bg-[#e8f4ef] text-[#2d6a4f]" : "bg-[#fff5f0] text-[#e07b39]"}`}>
                    {isReceita ? "Receita" : "Despesa"}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      <AdicionarTransaction open={open} onOpenChange={setOpen} onCreated={fetchTransactions} />
    </div>
  );
}