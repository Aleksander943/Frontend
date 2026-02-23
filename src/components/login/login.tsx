import { Mail, Lock, ShieldCheck, ChartLine } from "lucide-react";
import { useState } from "react";
import api from "../../services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/https://financeiro-api-1wmw.onrender.com/login", { email, password });

      const { token, user } = response.data;

      localStorage.setItem("token", token);

      localStorage.setItem("username", user.name);

      sessionStorage.setItem("isAuthenticated", "true");

      navigate("/dashboard", { replace: true });

      console.log("login feito com sucesso");

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const mensagem =
          error.response?.data?.error ||
          error.response?.data?.mensagem ||
          "Erro ao fazer login. Tente novamente.";
        setError(mensagem);
        console.error(mensagem);
      } else {
        setError("Erro ao fazer login. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f4] flex items-center justify-center px-8">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.08)] px-8 py-12">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-[#2d6a4f] rounded-lg flex items-center justify-center">
            <ChartLine className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-[#1a1a18] tracking-tight text-sm">
            Finly
          </span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <p className="text-xs text-[#9a9a94] mb-1 tracking-wide">
            Bem-vindo de volta
          </p>
          <h1
            className="text-2xl font-semibold text-[#1a1a18] tracking-tight leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Acesse sua conta
          </h1>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-red-700 font-medium">⚠️ {error}</p>
          </div>
        )}

        {/* Mini stats */}
        <div className="grid grid-cols-3 bg-[#f7f7f4] rounded-xl p-3 mb-6">
          <div className="text-center">
            <p className="text-xs font-medium text-[#1a1a18]">R$ 4.280</p>
            <p className="text-[10px] text-[#c4c4bc] uppercase tracking-wider mt-0.5">
              Saldo
            </p>
          </div>
          <div className="text-center border-x border-[#ebebeb]">
            <p className="text-xs font-medium text-[#2d6a4f]">−12%</p>
            <p className="text-[10px] text-[#c4c4bc] uppercase tracking-wider mt-0.5">
              Gastos
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs font-medium text-[#1a1a18]">8</p>
            <p className="text-[10px] text-[#c4c4bc] uppercase tracking-wider mt-0.5">
              Metas
            </p>
          </div>
        </div>

        {/* Form — mantendo sua estrutura original */}
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c4c4bc]">
              <Mail className="w-4 h-4" />
            </span>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="bg-white w-full pl-9 pr-3 py-3 border border-[#ebebeb] rounded-xl text-sm text-[#1a1a18] placeholder-[#c4c4bc] outline-none transition-all focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10"
            />
          </div>

          {/* Senha */}

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c4c4bc]">
              <Lock className="w-4 h-4" />
            </span>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="bg-white w-full pl-9 pr-14 py-3 border border-[#ebebeb] rounded-xl text-sm text-[#1a1a18] placeholder-[#c4c4bc] outline-none transition-all focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-medium text-[#9a9a94] hover:text-[#1a1a18] transition-colors"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          {/* Forgot */}
          <div className="flex justify-end -mt-1">
            <button
              type="button"
              className="text-xs text-[#2d6a4f] font-medium hover:opacity-70 transition-opacity"
            >
              Esqueci a senha
            </button>
          </div>

          {/* Submit — mantendo seu input type submit */}
          <input
            type="submit"
            value={loading ? "Entrando..." : "Entrar"}
            disabled={loading}
            className="mt-1 w-full bg-[#2d6a4f] hover:bg-[#235c43] active:scale-[0.99] text-white font-medium text-sm py-3 rounded-xl cursor-pointer transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          />
        </form>

        {/* Signup */}
        <p className="text-center text-xs text-[#9a9a94] mt-5">
          Ainda não tem conta?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-[#2d6a4f] font-medium hover:opacity-70 transition-opacity"
          >
            Criar gratuitamente
          </button>
        </p>

        {/* Footer */}
        <div className="flex items-center justify-center gap-1.5 mt-6 pt-5 border-t border-[#ebebeb]">
          <ShieldCheck className="w-5 h-5 text-[#c4c4bc]" />
          <span className="text-[10px] text-[#c4c4bc]">
            Protegido por criptografia AES-256
          </span>
        </div>
      </div>
    </div>
  );
}
