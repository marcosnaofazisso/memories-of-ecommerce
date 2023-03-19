import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

    const firstStyle = {
        //display: 'flex', 
        listStyleType: "none"
    }

    return (
        <div>
            <nav>
                <ul style={firstStyle}>
                    <li ><NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink></li>
                    <li><NavLink to="/sobre">Sobre</NavLink></li>
                    <li><NavLink to="/contato">Contato</NavLink></li>
                    <li><NavLink to="/produtos">Produtos</NavLink></li>
                    <li><NavLink to="/landing-page">Landing Page</NavLink></li>
                    <li><NavLink to="/carrinho">Carrinho</NavLink></li>
                    <li><NavLink to="/testes">Testes</NavLink></li>
                </ul>
            </nav>
        </div >
    )
}

export default Header