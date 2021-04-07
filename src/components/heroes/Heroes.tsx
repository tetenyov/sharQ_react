import { useState, useEffect, useRef } from 'react';

import bgImage from '../../img/bg_upper_part.png';
import ducky from '../../img/ducky.webp';
import shark from '../../img/shark.webp';

function Heroes() {
  const [ duckyStyles, setDuckyStyles ] = useState({
    left: '20vw'
  });

  const duckyRef = useRef<HTMLImageElement>(null);
  const sharkRef = useRef<HTMLImageElement>(null);
  
  // useEffect(() => {
  //   let left = Number(duckyStyles.left.match(/\d/g)?.join(''))
  //   left += 13

  //   if (duckyRef.current) {
  //     const interval = setInterval(() => {

  //       setDuckyStyles({
  //         ...duckyStyles, left: `${left}vw`
  //       })
  //     }, 1000)
  //     return () => clearInterval(interval)
  //   }
  // })

  return (
    <section className='heroes' style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className="visually-hidden">Поле с анимацией</h2>
      <img className='heroes__ducky' src={ducky} alt='yellow duck'
        ref={duckyRef} style={duckyStyles}
      />
      <img className='heroes__shark' src={shark} alt='angry shark'
        ref={sharkRef}
      />
    </section>
  );
};

export default Heroes;
