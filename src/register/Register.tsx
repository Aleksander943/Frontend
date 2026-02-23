import type { FormEvent } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export function Register() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim().toLowerCase();
    const password = String(fd.get("password") ?? "").trim();

    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      await api.post("/users", {
        name,
        email,
        password,
      });
      alert("Cadastro realizado com sucesso!");
      localStorage.removeItem("token");
      sessionStorage.removeItem("isAuthenticated");
      navigate("/", { replace: true });
    } catch (error) {
      alert("Erro ao cadastrar");
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] px-6 py-10 font-sans">
      {/* Back button */}
      <button className="mb-8 flex items-center gap-2 text-[#2d6a4f]"
      onClick={() => window.history.back()}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span className="text-[13px] font-semibold">Voltar</span>
      </button>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2d6a4f]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3v18h18" />
              <path d="m7 16 4-4 4 4 4-4" />
            </svg>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-[#1a1a18]">
            Finly
          </span>
        </div>
        <p className="mb-1 text-[12px] uppercase tracking-[0.07em] text-[#2d6a4f]">
          Criar conta
        </p>
        <h1 className="font-serif text-[28px] font-semibold leading-tight tracking-tight text-[#1a1a18]">
          Comece a controlar
          <br />
          suas finanças
        </h1>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4">
        {/* Nome completo */}
        <form id="register-form" onSubmit={handleSubmit}>
          
          <div className="flex flex-col gap-[6px]">
            <label className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#9a9a94]">
              Nome completo
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-[14px] text-[#c4c4bc]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <input
              name="name"
                type="text"
                placeholder="João Silva"
                className="w-full rounded-xl border border-[#ebebeb] bg-white py-3 pl-10 pr-4 text-[14px] text-[#1a1a18] placeholder-[#c4c4bc] outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10"
              />
            </div>
          </div>

          {/* E-mail */}
          <div className="flex flex-col gap-[6px]">
            <label className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#9a9a94]">
              E-mail
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-[14px] text-[#c4c4bc]">
                <Mail className="w-4 h-4" />
              </span>
              <input
                name="email"    
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-xl border border-[#ebebeb] bg-white py-3 pl-10 pr-4 text-[14px] text-[#1a1a18] placeholder-[#c4c4bc] outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10"
              />
            </div>
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-[6px]">
            <label className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#9a9a94]">
              Senha
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-[14px] text-[#c4c4bc]">
                <Lock className="w-4 h-4" />
              </span>
              <input
                name="password"
                type="password"
                placeholder="Mínimo 8 caracteres"
                className="w-full rounded-xl border border-[#ebebeb] bg-white py-3 pl-10 pr-14 text-[14px] text-[#1a1a18] placeholder-[#c4c4bc] outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10"
              />
              <button type="button" className="absolute right-[14px] text-[11px] font-semibold text-[#9a9a94]">
                Ver
              </button>
            </div>

            {/* Password strength */}
            <div className="flex gap-[5px] pt-1">
              <div className="h-[3px] flex-1 rounded-full bg-[#2d6a4f]" />
              <div className="h-[3px] flex-1 rounded-full bg-[#2d6a4f]" />
              <div className="h-[3px] flex-1 rounded-full bg-[#ebebeb]" />
              <div className="h-[3px] flex-1 rounded-full bg-[#ebebeb]" />
            </div>
            <p className="text-[11px] text-[#9a9a94]">
              Força da senha:{" "}
              <span className="font-semibold text-[#2d6a4f]">Média</span>
            </p>
          </div>

          {/* Confirmar senha */}
          <div className="flex flex-col gap-[6px]">
            <label className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#9a9a94]">
              Confirmar senha
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-[14px] text-[#c4c4bc]">
                <Lock className="w-4 h-4" />
              </span>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Repita sua senha"
                className="w-full rounded-xl border border-[#ebebeb] bg-white py-3 pl-10 pr-4 text-[14px] text-[#1a1a18] placeholder-[#c4c4bc] outline-none focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10"
              />
            </div>
          </div>
        </form>

        {/* Terms */}
        <div className="flex items-start gap-3 pt-1">
          <div className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border-2 border-[#2d6a4f] bg-[#2d6a4f]">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="text-[12px] leading-relaxed text-[#9a9a94]">
            Concordo com os{" "}
            <span className="font-semibold text-[#2d6a4f]">Termos de uso</span>{" "}
            e a{" "}
            <span className="font-semibold text-[#2d6a4f]">
              Política de privacidade
            </span>
          </p>
        </div>

        {/* Submit */}
        <button type="submit" form="register-form" className="mt-2 w-full rounded-xl bg-[#2d6a4f] py-[14px] text-[14px] font-semibold text-white transition-all active:scale-[0.99]">
          Criar conta gratuitamente
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-[#ebebeb]" />
          <span className="text-[11px] text-[#c4c4bc]">ou</span>
          <div className="h-px flex-1 bg-[#ebebeb]" />
        </div>

        {/* Login link */}
        <p className="text-center text-[13px] text-[#9a9a94]">
          Já tem conta?{" "}
          <button type="button" onClick={() => navigate("/")} className="font-semibold text-[#2d6a4f]">Entrar</button>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-center gap-[6px]">
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c4c4bc"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span className="text-[11px] text-[#c4c4bc]">
          Protegido por criptografia AES-256
        </span>
      </div>
    </div>
  );
}
