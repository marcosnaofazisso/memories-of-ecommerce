import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export default function Contato() {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log("DATA ===>>> ", data)
    }

    const navigate = useNavigate()

    const handleVoltarParaLandingPage = () => {
        navigate("/landing-page")

    }

    return (
        <>
            <h1>Contato</h1>
            <div>
                <div>
                    <label>Nome*</label>
                    <input type="text"
                        placeholder='Nome'
                        {...register("nome", { required: true })}
                    />
                </div>
                <div>
                    <label>Email*</label>
                    <input type="text"
                        placeholder='Email'
                        {...register("email", { required: true })}
                    />
                </div>
                <label >Você toma remédio?</label>
                <input type="checkbox" name='remedio1' id="remedio1" value={"remedio 1"}
                    {...register("remedios")} />
                <label for="remedio1">Remédio 1</label>
                <input type="checkbox" name="remedio2" id="remedio2" value={"remedio 2"}
                    {...register("remedios")} />
                <label for="remedio2">Remédio 2</label>
                <br />
                <br />
                <br />
                <div>
                    <button onClick={() => handleSubmit(onSubmit)()}>Enviar Formulário</button>
                    <button onClick={() => handleVoltarParaLandingPage()}>Cancelar</button>
                </div>
            </div>
        </>
    )
}