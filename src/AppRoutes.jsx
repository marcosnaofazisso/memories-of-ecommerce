import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Teste from './pages/pagamento/Teste'
import Contato from './pages/contato/Contato.jsx'
import Carrinho from './pages/carrinho/Carrinho'
import Produtos from './pages/produtos/Produtos'

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/testes" element={<Teste />} />
            </Routes>
        </>
    )
}

export default AppRoutes;