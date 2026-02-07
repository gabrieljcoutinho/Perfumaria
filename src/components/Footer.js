import React from 'react'
import "../../src/CSS/Footer/index.css"

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className="footer-content">
        <h4>Local Face</h4>

        <div className="newsletter">
          <p className='seInscrever'>Subscribe to Our Newsletter</p>
          <p className='subTexto'>Receive updates on New Arrivals and Special Promotions</p>
        </div>

        <div className="todasAsListas">
          <div className="listas categoria">
            <h5>Categorias</h5>
            <ul className='listaDasCategorias'>
              <li>Fashion</li>
              <li>Jewelry</li>
              <li>Sports</li>
              <li>Electronics</li>
              <li>Indoor</li>
            </ul>
          </div>

          <div className="listas shopping">
            <h5>Shopping</h5>
            <ul>
              <li>Payments</li>
              <li>Delivery options</li>
              <li>Buyer protection</li>
            </ul>
          </div>

          <div className="listas custumer">
            <h5>Customer care</h5>
            <ul>
              <li>Help center</li>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
              <li>Returns & refund</li>
              <li>Survey & feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;