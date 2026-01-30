import React from 'react'
import "../../src/CSS/Footer/index.css"

const Footer = () => {
  return (
    <div className='Footer'>
      <h4>Local Face</h4>

      <div>
        {/* Note a barra '/>' ao final e o 'className' */}
        <input
          type="email"
          className="input"
          id="Email"
          name="Email"
          placeholder="uiverse@verse.io"
          autoComplete="off"
        />

        <input
          className="button--submit"
          value="Subscribe"
          type="submit"
        />
      </div>
    </div>
  )
}

export default Footer