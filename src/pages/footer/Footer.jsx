import React from 'react'
import RedesSociais from '../redes-sociais/RedesSociais'

export default function Footer() {
    return (
        <div>
            <div>
                <h2>Footer</h2>
                <p>Rua do Endereço, 999 - Bairro, Cidade - UF, 00000-000, Brasil</p>
            </div>
            <div>
                <RedesSociais />
            </div>

            <div>
                <p>Todos os direitos reservados</p>
                <p>Desenvolvido por Pessoa Desenvolvedora</p>
            </div>

        </div >
    )
}