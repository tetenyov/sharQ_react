import React, { useState } from 'react'

import Settings from '../settings/Settings'


function Header() {
  const [ isOpen, setIsOpen ] = useState(false)

  const handleMenuClick = () => setIsOpen(!isOpen)

  return (
    <header className='page-header'>
      <button type='button'>Start</button>
      <button type='button' onClick={handleMenuClick}>Menu</button>
      <Settings menuIsOpen={isOpen}/>
    </header>
  )
}

export default Header
