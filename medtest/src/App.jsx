import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/Helpers/ProtectedRout";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
import { UserStorage } from "./UserContext";
import Entrar from "./Components/Login/Entrar";
import Cadastro from "./Components/Login/Cadastro";
import User from "./Components/User/User";
import PerdeuSenha from "./Components/Password/PerdeuSenha";
import AlterarSenha from "./Components/Password/AlterarSenha";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Entrar />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="/perdeu" element={<PerdeuSenha />} />
              <Route path="/resetar" element={<AlterarSenha />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
