import React from 'react'

import bgImage from '../../img/bg_upper_part.png'

function Heroes() {
  return (
    <section className='heroes' style={{ backgroundImage: `url(${bgImage})` }}>
       <h2 className="visually-hidden">Поле с анимацией</h2>
      
    </section>
  )
}

export default Heroes
