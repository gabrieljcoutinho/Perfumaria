import React from 'react'


import MarcacaoDePagina from '../UI/Blog/MarcacaoDePagina.jsx'
import ConteudoTodoPrincipal from '../UI/Blog/ConteudoTodoPrincipal.jsx'
import ConteudoImgPrincipalBlog from '../UI/Blog/ConteudoImgPrincipalBlog.jsx'




const Blog = () => {
  return (
    <div>

            <MarcacaoDePagina />
            <ConteudoTodoPrincipal />
          <ConteudoImgPrincipalBlog />
    </div>
  )
}

export default Blog