import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/login";
import {Dashboard} from "./components/Dashboard";
import { Register } from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-200 min-h-screen w-full flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          {/* Redireciona rotas inexistentes para o login */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;