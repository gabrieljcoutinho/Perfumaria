import React from 'react'
import "../../CSS/Shop/perfumeDeOuro.css"

import imgDeOuro from "../../assets/imgShop/perfumeDeOuro.png"

type Props = {}

const PerfumeDeOuro = (props: Props) => {
  return (
    <div className='mainPerfumeDeOuro'>


          <main className="conteudoDivPerfumeDeOuro">
          <img src={imgDeOuro} alt=""  className='imgPerfumeDeOuro'/>
              <div className="textoConteudoPerfumeDeouro">
                  <h1>Limited Time Offer: 25% OFF on Golden Algel Perfume</h1>

              </div>
          </main>



    </div>

  )
}

export default PerfumeDeOuro