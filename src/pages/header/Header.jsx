import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav>
                <ul style={{ display: 'flex' }}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/sobre">Sobre</NavLink></li>
                    <li><NavLink to="/agenda">Agenda</NavLink></li>
                    <li><NavLink to="/contato">Contato</NavLink></li>
                    <li><NavLink to="/landing-page">Landing Page</NavLink></li>
                    <li><NavLink to="/testes">Testes</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header