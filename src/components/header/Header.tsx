import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { 
  generateProblem, 
  toggleStart, 
} from '../../store/action-creators/action-creators';

import Settings from '../settings/Settings';

function Header() {
  const [ isOpen, setIsOpen ] = useState(false);
  const dispatch = useDispatch();

  const handleMenuClick = () => setIsOpen(!isOpen);
  
  const handleStartClick = () => {
    dispatch(generateProblem());
    dispatch(toggleStart(true));
  };

  return (
    <header className='page-header'>
      <button type='button' onClick={handleStartClick}>
        Start
      </button>
      <button type='button' className='page-header__settings-toggler' onClick={handleMenuClick}>
        Menu
      </button>
      <Settings menuIsOpen={isOpen} />
    </header>
  );
};

export default Header;
