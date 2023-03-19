import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


export default function RedesSociais() {

    const target = "_blank"
    const redes = {
        'facebook':'https://www.facebook.com/aldeiaestrelaazuldooriente',
        'instagram':'https://www.instagram.com/aldeiaestrelaazuldooriente/',
        'youtube':'https://www.youtube.com/@AldeiaEstrelaAzuldoOriente',
        
    }

    return (
        <div style={{ display: 'flex' }}>
            <a href={redes.facebook} target={target}><FaFacebook size={40}/></a>
            <a href={redes.instagram} target={target}><FaInstagram size={40}/></a>
            <a href={redes.youtube} target={target}><FaYoutube size={40}/></a>

        </div>
    )
}
