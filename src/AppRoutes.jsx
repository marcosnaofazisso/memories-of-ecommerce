import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import LandingPage from './pages/landing-page/LandingPage'
import Sobre from './pages/sobre/Sobre'
import Agenda from './pages/agenda/Agenda'
import FormAnamnese from './pages/form-anamnese/FormAnamnese'
import Pagamento from './pages/pagamento/Pagamento'
import Teste from './pages/pagamento/Teste'
import EsqueciMinhaSenha from './pages/esqueci-minha-senha/EsqueciMinhaSenha'

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/formulario-anamnese" element={<FormAnamnese />} />
                <Route path="/pagamento-ritual" element={<Pagamento />} />
                <Route path="/testes" element={<Teste />} />
                <Route path="/esqueci-minha-senha" element={<EsqueciMinhaSenha />} />
            </Routes>
        </>
    )
}

export default AppRoutes;