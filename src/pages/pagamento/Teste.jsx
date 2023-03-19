import React, { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient';
//import axios from 'axios';


export default function Teste() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleCadastrar = async () => {

        try {
            const response = await supabase.auth.signUp(
                {
                    email: email,
                    password: password
                });
            console.log(response)

        } catch (error) {
            console.log("ERROR => ", error)
        }

    }


    const handleLogin = async () => {

        try {
            const response = await supabase.auth.signInWithPassword(
                {
                    email: email,
                    password: password
                });
            console.log(response)

        } catch (error) {
            console.log("ERROR => ", error)
        }

    }

    const handleEsqueciSenha = async () => {

        try {
            const response = await supabase.auth
                .resetPasswordForEmail('marcosferreiraf22@gmail.com')
            console.log(response)

        } catch (error) {
            console.log("ERROR => ", error)
        }

    }

    const handleChange = (e) => {
        e.target.name == "email" ? setEmail(e.target.value) : setPassword(e.target.value)

    }


    return (
        <>
            <h1>Teste</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>

                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label>Senha</label>
                    <input type="text" name="password" onChange={(e) => handleChange(e)} />
                </div>
                <button onClick={() => handleCadastrar()}> Realizar Cadastro</button>
                <button onClick={() => handleLogin()}> Realizar Login</button>
            </div>
            <button onClick={() => handleEsqueciSenha()}> Esqueci minha senha</button>
        </>
    )
}