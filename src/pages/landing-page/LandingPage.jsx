import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import BannerLandingPage from '../banner-landing-page/BannerLandingPage'
import FormAnamnese from '../form-anamnese/FormAnamnese'

export default function LandingPage() {

  const [showAnamnese, setShowAnamnese] = useState(false)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/formulario-anamnese")

  }
  const handlePagamento = () => {
    navigate("/pagamento-ritual")

  }

  return (
    <>
      <p>Landing Page</p>
      {!showAnamnese && (<BannerLandingPage />)}
      <br />
      <br />
      <p>Informações: o Ritual custa R$ 160,00 e será possível realizar o pagamento após o preenchimento da Ficha de Anamnese</p>
      <br />
      <br />
      {!showAnamnese && (<h1>Seu ritual está quase garantido...</h1>)}
      <button onClick={() => handleClick()}>Responder Ficha de Anamnese</button>
      <button onClick={() => handlePagamento()}>Realizar Pagamento</button>
      {/* <button onClick={() => setShowAnamnese(!showAnamnese)}>Cancelar</button>
      {showAnamnese && (
        <FormAnamnese />
      )} */}
    </>
  )
}