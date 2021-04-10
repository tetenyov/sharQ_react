import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Settings from '../settings/Settings';
import { generateProblem, startRound } from '../../store/action-creators/action-creators';


function Header() {
  const [ isOpen, setIsOpen ] = useState(false);
  const dispatch = useDispatch();

  const handleMenuClick = () => setIsOpen(!isOpen);
  
  const handleStartClick = () => {
    dispatch(generateProblem());
    dispatch(startRound());
  };

  return (
    <header className='page-header'>
      <button type='button' onClick={handleStartClick}>
        Start
      </button>
      <button type='button' className='page-header__settings-toggler' onClick={handleMenuClick}>
        Menu
      </button>
      <Settings menuIsOpen={isOpen}/>
    </header>
  );
};

export default Header;
