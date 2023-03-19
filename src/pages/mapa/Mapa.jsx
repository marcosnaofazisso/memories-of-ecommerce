import React from 'react'

function Mapa() {
    return (
        <>
            <h1>Mapa</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.2948830558475!2d-122.3515595841921!3d47.620398895017665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901545e1eec4d9%3A0x44cc7208c7c2e533!2sObelisco%20Espacial%2C%20400%20Broad%20St%2C%20Seattle%2C%20WA%2098109%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1679230577423!5m2!1spt-BR!2sbr"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    )
}

export default Mapa