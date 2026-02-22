import "./App.css";
import { type ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/login/login";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Register } from "./register/Register";

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
      <div className="bg-gray-200 min-h-screen w-full flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

          {/* Redireciona rotas inexistentes para o login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;