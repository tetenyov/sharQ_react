import React from 'react'

import Settings from '../settings/Settings'

function Header() {
  return (
    <header className='page-header'>
      <button type='button'>Start</button>
      <button type='button'>Menu</button>
      <Settings />
    </header>
  )
}

export default Header
