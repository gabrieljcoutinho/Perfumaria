import React from 'react'
import "../../CSS/Shop/perfumeDeOuro.css"

import imgDeOuro from "../../assets/imgShop/perfumeDeOuro.png"

type Props = {}

const PerfumeDeOuro = (props: Props) => {
  return (
    <div className='mainPerfumeDeOuro'>


          <main className="imgPerfumeDeOuro">
          <img src={imgDeOuro} alt="" />
              <div className="conteudoDivPerfumeDeOuro">
                  <h1>Limited Time Offer: 25% OFF on Golden Algel Perfume</h1>

              </div>
          </main>



    </div>

  )
}

export default PerfumeDeOuro