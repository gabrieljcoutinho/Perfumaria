import React from 'react'


import MarcacaoDePagina from '../UI/Blog/MarcacaoDePagina.jsx'
import ConteudoTodoPrincipal from '../UI/Blog/ConteudoTodoPrincipal.jsx'
import ConteudoImgPrincipalBlog from '../UI/Blog/ConteudoImgPrincipalBlog.jsx'
import ConteudoTextoPrincipalPrimeiro from '../UI/Blog/ConteudoTextoPrincipalPrimeiro.jsx'




const Blog = () => {
  return (
    <div>

            <MarcacaoDePagina />
            <ConteudoTodoPrincipal />
          <ConteudoImgPrincipalBlog />
          <ConteudoTextoPrincipalPrimeiro />
    </div>
  )
}

export default Blog