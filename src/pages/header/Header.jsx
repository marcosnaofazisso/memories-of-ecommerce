import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav>
                <ul style={{display: 'flex'}}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/sobre">Sobre a Aldeia</NavLink></li>
                    <li><NavLink to="/agenda">Agenda</NavLink></li>
                    <li><NavLink to="/umbanda">Umbanda</NavLink></li>
                    <li><NavLink to="/xamanismo">Xamanismo</NavLink></li>
                    <li><NavLink to="/tantra">Tantra</NavLink></li>
                    <li><NavLink to="/curas">Curas</NavLink></li>
                    <li><NavLink to="/terapias">Terapias</NavLink></li>
                    <li><NavLink to="/contato">Contato</NavLink></li>
                    <li><NavLink to="/landing-page">Ritual de Ayahuasca</NavLink></li>
                    <li><NavLink to="/testes">Testes</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header