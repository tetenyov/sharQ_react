import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/index';
import { finishRound } from '../../store/action-creators/action-creators';

import bgImage from '../../img/bg_upper_part.png';
import ducky from '../../img/ducky.webp';
import shark from '../../img/shark.webp';

function Heroes() {
  const isStart = useSelector((state: RootState) => state.progress.isStart);
  const position = useSelector((state: RootState) => state.progress.position);
  const sharkSpeed = useSelector((state: RootState) => state.settings.speed);

  const dispatch = useDispatch();

  const duckyRef = useRef<HTMLImageElement>(null);
  const sharkRef = useRef<HTMLImageElement>(null);
  
  const handleHeroesPositions = () => {
    const ducky = duckyRef.current?.getBoundingClientRect().left;
    const shark = sharkRef.current?.getBoundingClientRect().right;

    if (shark && ducky) {
      if (shark > ducky) {
        dispatch(finishRound());
      }
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;

    if (isStart) {
      interval = setInterval(handleHeroesPositions, 200)
    }

    return () => clearInterval(interval);
  }, [isStart]);

  return (
    <section className='heroes' style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className='visually-hidden'>Поле с анимацией</h2>
      <img className='heroes__ducky' src={ducky} alt='yellow duck'
        ref={duckyRef} style={{left: `${position}vw`}}
      />
      <img className={`${isStart ? 'heroes__shark heroes__shark--move' : 'heroes__shark'}`} 
        src={shark} alt='angry shark'
        style={{animationDuration: `${25 / sharkSpeed }s`}} ref={sharkRef}
      />
    </section>
  );
};

export default Heroes;
