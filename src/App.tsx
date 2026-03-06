import "./App.css";
import { type ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/login/login";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Register } from "./components/register/Register";

function isAuthenticated() {
  const hasToken = Boolean(localStorage.getItem("token"));
  const hasSessionAuth = sessionStorage.getItem("isAuthenticated") === "true";
  return hasToken && hasSessionAuth;
}

function PrivateRoute({ children }: { children: ReactElement }) {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-[100svh] w-full sm:min-h-[100dvh] sm:flex sm:items-center sm:justify-center sm:bg-[#d7ddda]">
        <div className="w-full sm:max-w-[430px] sm:min-h-[85vh] sm:rounded-[2rem] sm:overflow-hidden">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

          {/* Redireciona rotas inexistentes para o login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;