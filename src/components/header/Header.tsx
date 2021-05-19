import { Suspense, lazy, useState } from 'react';
import { useDispatch } from 'react-redux';

import { 
  generateProblem, 
  toggleStart, 
} from '../../store/action-creators/action-creators';

const Settings = lazy(() => import('../settings/Settings'))

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
      <button 
        type='button' className='page-header__button-start' 
        onClick={handleStartClick}
      >
        Start
      </button>
      <button type='button' 
        className={`page-header__settings-toggler ${isOpen ? 'page-header__settings-toggler--close' : ''}`} 
        onClick={handleMenuClick} 
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Settings menuIsOpen={isOpen} />
      </Suspense>
    </header>
  );
};

export default Header;
