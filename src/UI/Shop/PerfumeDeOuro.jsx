import React from 'react'
import "../../CSS/Shop/perfumeDeOuro.css"

import imgDeOuro from "../../assets/imgShop/perfumeDeOuro.png"

type Props = {}

const PerfumeDeOuro = (props: Props) => {
  return (
    <div className='mainPerfumeDeOuro'>
            <img src={imgDeOuro} alt="" />

    </div>
  )
}

export default PerfumeDeOuro