import React from 'react'
import "../../CSS/Blog/primeiroPerfumeBlog.css"

import img1 from "../../assets/imgBlog/imgBlogConteudo.png"



const PrimeiroPerfumeDoBlog = () => {
  return (
    <div className='primeriPerfumeBlog'>

            <div className="img">
            <img src={img1} alt="" className='imgPrimeiraBlog' />
            </div>

            <div className="conteudo">
                    <h3>The Overture: Discovering Your Signature Scent</h3>

                    <p></p>
            </div>

    </div>
  )
}

export default PrimeiroPerfumeDoBlog