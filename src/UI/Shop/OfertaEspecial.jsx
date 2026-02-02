import React from 'react'
import "../../CSS/Shop/ofertaEspecial.css"

import imgPromocaoPerfume from "../../assets/imgShop/ofertaEspecial.png"

type Props = {}

const OfertaEspecial = (props: Props) => {
  return (
    <div className='divOfertaEspecial'>
           <div className="conteudoEscrito">
           Immerse yourself in the calming embrace of Aqua Serenity, a captivating fragrance that evokes the essence of water.
           </div>

           <div className="imgPromocao">
            <img src={imgPromocaoPerfume} alt="" className='imgPromocaoLoja' />
           </div>
        </div>
  )
}

export default OfertaEspecial