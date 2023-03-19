import React from 'react'

export default function Pagamento() {

    const stylePagamento = {
        textAlign: "center",
    }

    return (
        <>
            <div style={stylePagamento}>
                <h1>Pagamento</h1>
                <h2>Produtos</h2>
                <p>Poncho Txai de lã</p>
                <img style={{ width: 150, marginLeft: 50 }} src="https://img.elo7.com.br/product/main/4595969/poncho-peruano-etnico-unissex-color-capa.jpg" alt="poncho txai" />
                <p>Quantidade: 1</p>
                <p>Preço: R$ 400</p>
                <a href="https://pag.ae/7Zd7ShEzr/button" target="_blank" title="Pagar com PagSeguro">
                    {/* <img src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar.gif" alt="Pague com PagSeguro - é rápido, grátis e seguro!" /> */}
                    <button>Comprar</button>
                </a>
                <br />
                <br />
                <br />
            </div>
        </>
    )
}