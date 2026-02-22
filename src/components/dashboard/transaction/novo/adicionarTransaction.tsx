import { Button } from "../../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../ui/dialog";
import { Field, FieldGroup } from "../../../ui/field";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";

type Props = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
};

export function AdicionarTransaction({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm rounded-2xl border border-[#ebebeb] bg-white p-0 shadow-[0_8px_40px_rgba(0,0,0,0.10)]">

        {/* Header */}
        <DialogHeader className="border-b border-[#f5f5f3] px-6 pb-4 pt-6">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f4ef]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </div>
          <DialogTitle className="text-[17px] font-bold tracking-tight text-[#1a1a18]">
            Nova transação
          </DialogTitle>
          <DialogDescription className="text-[13px] text-[#9a9a94]">
            Preencha os dados para registrar sua transação.
          </DialogDescription>
        </DialogHeader>

        {/* Fields */}
        <FieldGroup className="flex flex-col gap-4 px-6 py-5">

          {/* Tipo — toggle receita/despesa */}
          <Field>
            <Label className="mb-[6px] block text-[11px] font-semibold uppercase tracking-[0.05em] text-[#9a9a94]">
              Tipo
            </Label>
            <div className="grid grid-cols-2 gap-2 rounded-xl border border-[#ebebeb] bg-[#f7f7f4] p-1">
              <button className="flex items-center justify-center gap-[6px] rounded-lg bg-white py-[9px] text-[13px] font-semibold text-[#2d6a4f] shadow-sm">
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-[#2d6a4f] text-[10px] font-extrabold text-white">↑</span>
                Receita
              </button>
              <button className="flex items-center justify-center gap-[6px] rounded-lg py-[9px] text-[13px] font-semibold text-[#9a9a94]">
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-[#c4c4bc] text-[10px] font-extrabold text-white">↓</span>
                Despesa
              </button>
            </div>
          </Field>

          {/* Descrição */}
          <Field>
            <Label htmlFor="description" className="mb-[6px] block text-[11px] font-semibold uppercase tracking-[0.05em] text-[#9a9a94]">
              Descrição
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-[12px] text-[#c4c4bc]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"/>
                  <line x1="8" y1="12" x2="21" y2="12"/>
                  <line x1="8" y1="18" x2="21" y2="18"/>
                  <line x1="3" y1="6" x2="3.01" y2="6"/>
                  <line x1="3" y1="12" x2="3.01" y2="12"/>
                  <line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
              </span>
              <Input
                id="description"
                name="description"
                placeholder="Ex: Salário, Mercado..."
                className="w-full rounded-xl border border-[#ebebeb] bg-white py-3 pl-9 pr-4 text-[14px] text-[#1a1a18] placeholder-[#c4c4bc] outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10"
              />
            </div>
          </Field>

          {/* Valor */}
          <Field>
            <Label htmlFor="value" className="mb-[6px] block text-[11px] font-semibold uppercase tracking-[0.05em] text-[#9a9a94]">
              Valor
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-[12px] text-[13px] font-semibold text-[#c4c4bc]">
                R$
              </span>
              <Input
                id="value"
                name="value"
                type="number"
                placeholder="0,00"
                className="w-full rounded-xl border border-[#ebebeb] bg-white py-3 pl-10 pr-4 text-[14px] font-semibold text-[#1a1a18] placeholder-[#c4c4bc] outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10"
              />
            </div>
          </Field>

          {/* Categoria */}
          <Field>
            <Label htmlFor="category" className="mb-[6px] block text-[11px] font-semibold uppercase tracking-[0.05em] text-[#9a9a94]">
              Categoria
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-[12px] text-[#c4c4bc]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
              </span>
              <select
                id="category"
                name="category"
                className="w-full appearance-none rounded-xl border border-[#ebebeb] bg-white py-3 pl-9 pr-4 text-[14px] text-[#1a1a18] outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10"
              >
                <option value="" disabled selected>Selecione...</option>
                <option value="trabalho">💼 Trabalho</option>
                <option value="moradia">🏠 Moradia</option>
                <option value="alimentacao">🍽️ Alimentação</option>
                <option value="saude">💊 Saúde</option>
                <option value="lazer">🎬 Lazer</option>
                <option value="transporte">🚗 Transporte</option>
                <option value="investimento">📈 Investimento</option>
              </select>
              <span className="pointer-events-none absolute right-[12px] text-[#c4c4bc]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </span>
            </div>
          </Field>

          {/* Data */}
          <Field>
            <Label htmlFor="date" className="mb-[6px] block text-[11px] font-semibold uppercase tracking-[0.05em] text-[#9a9a94]">
              Data
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-[12px] text-[#c4c4bc]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </span>
              <Input
                id="date"
                name="date"
                type="date"
                className="w-full rounded-xl border border-[#ebebeb] bg-white py-3 pl-9 pr-4 text-[14px] text-[#1a1a18] outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10"
              />
            </div>
          </Field>

        </FieldGroup>

        {/* Footer */}
        <DialogFooter className="flex gap-2 border-t border-[#f5f5f3] px-6 pb-6 pt-4">
          <Button
            type="button"
            onClick={() => onOpenChange(false)}
            className="flex-1 rounded-xl border border-[#ebebeb] bg-white py-3 text-[13px] font-semibold text-[#9a9a94] hover:bg-[#f7f7f4]"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="flex-1 rounded-xl bg-[#2d6a4f] py-3 text-[13px] font-semibold text-white hover:bg-[#235c43] active:scale-[0.99]"
          >
            Salvar
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}