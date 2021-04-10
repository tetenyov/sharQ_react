import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/index';
import { finishRound } from '../../store/action-creators/action-creators';

import bgImage from '../../img/bg_upper_part.png';
import ducky from '../../img/ducky.webp';
import shark from '../../img/shark.webp';
import angryShark from '../../img/angry_shark.webp';

function Heroes() {
  const [ isAngry, setIsAngry ] = useState(false);
  const [ isDucky, setIsDucky ] = useState(true);
  const [ isAnimation, setIsAnimation ] = useState(false);

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

      if (ducky - shark < 15 && ducky - shark > 0) {
        setIsAngry(true)
      }

      if (shark - ducky > 25) {
        setIsAngry(false);
        setIsAnimation(false);
        setIsDucky(false);
        dispatch(finishRound());
      }
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;

    if (isStart) {
      interval = setInterval(handleHeroesPositions, 200)
      setIsAnimation(true)
    }

    setIsDucky(true);

    return () => clearInterval(interval);
  }, [isStart]);

  return (
    <section className='heroes' style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className='visually-hidden'>Поле с анимацией</h2>
      <img className='heroes__ducky' src={isDucky ? ducky : ''} alt='yellow duck'
        ref={duckyRef} style={{left: `${position}vw`}}
      />
      <img className={`${isStart ? 'heroes__shark heroes__shark--move' : 'heroes__shark'}`} 
        src={isAngry ? angryShark : shark} alt='angry shark'
        style={{animationDuration: `${25 / sharkSpeed }s`, animationPlayState: isAnimation ? 'running' : 'paused'}} 
        ref={sharkRef}
      />
    </section>
  );
};

export default Heroes;
