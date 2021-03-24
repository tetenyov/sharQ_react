import React from 'react';

import Header from '../header/Header'
import Heroes from '../heroes/Heroes'
import Problem from '../problem/Problem'
import ControlsList from '../controls/ControlsList'

function App() {
  return (
    <div className='page-wrapper'>
      <Header />
      <main className='page-main'>
        <Heroes />
        <Problem />
        <ControlsList />
      </main>
    </div>
  );
}

export default App;
