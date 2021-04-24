import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/index';
import { toggleStart, toggleResume } from '../../store/action-creators/action-creators';

import bgImage from '../../img/bg_upper_part.png';
import ducky from '../../img/ducky.webp';
import shark from '../../img/shark.webp';
import angryShark from '../../img/angry_shark.webp';

import { Jaws } from '../../constants/constants';

function Heroes() {
  const [ isAngry, setIsAngry ] = useState(false);
  const [ isDuckyVisible, setIsDuckyVisible ] = useState(true);

  const isStart = useSelector((state: RootState) => state.gameStates.isStart);
  const position = useSelector((state: RootState) => state.progress.position);
  const sharkSpeed = useSelector((state: RootState) => state.settings.speed);

  const dispatch = useDispatch();

  const duckyRef = useRef<HTMLImageElement>(null);
  const sharkRef = useRef<HTMLImageElement>(null);
  
  const handleHeroesPositions = () => {
    const ducky = duckyRef.current?.getBoundingClientRect().left;
    const shark = sharkRef.current?.getBoundingClientRect().right;

    if (shark && ducky) {

      if (ducky - shark < Jaws.OPEN_DISTANCE_MAX
          && ducky - shark > Jaws.OPEN_DISTANCE_MIN
        ) {
        setIsAngry(true)
      }

      if (shark - ducky > Jaws.SHUT_DISTANCE) {
        setIsAngry(false);
        setIsDuckyVisible(false);
        dispatch(toggleStart(false));
        dispatch(toggleResume(true));
      }
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;

    if (isStart) {
      interval = setInterval(handleHeroesPositions, 200)
    }

    setIsDuckyVisible(true);

    return () => clearInterval(interval);
  }, [ isStart ]);

  return (
    <section className='heroes' style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className='visually-hidden'>Поле с анимацией</h2>
      <img className='heroes__ducky' src={ducky} alt='yellow duck'
        ref={duckyRef} style={{left: `${position}%`, display: isDuckyVisible ? 'block': 'none'}}
      />
      <img className={`${isStart ? 'heroes__shark heroes__shark--move' : 'heroes__shark'}`} 
        src={isAngry ? angryShark : shark} alt='angry shark'
        style={{animationDuration: `${Jaws.SHUT_DISTANCE / sharkSpeed }s`}} 
        ref={sharkRef}
      />
    </section>
  );
};

export default Heroes;
