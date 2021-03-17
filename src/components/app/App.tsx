import React from 'react';

import Header from '../header/Header'
import Heroes from '../heroes/Heroes'
import Problem from '../problem/Problem'

import bgImage from '../../img/bg_upper_part.png'

function App() {
  return (
    <div className='page-wrapper' style={{backgroundImage: `url(${bgImage})`}}>
      <Header />
      <Heroes />
      <Problem />
    </div>
  );
}

export default App;
