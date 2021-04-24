import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/index';
import { toggleResume } from '../../store/action-creators/action-creators';

import Header from '../header/Header';
import Heroes from '../heroes/Heroes';
import Problem from '../problem/Problem';
import ControlsList from '../controls/ControlsList';
import ModalContainer from '../modal/ModalContainer';

import { Score } from '../../constants/constants';

function App() {
  const { isResume } = useSelector((state: RootState) => state.gameStates);
  const { score } = useSelector((state: RootState) => state.progress);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(toggleResume(false))
  };

  return (
    <div className='page-wrapper'>
      <Header />
      <main className='page-main'>
        <Heroes />
        <Problem />
        <ControlsList />
      </main>
      {isResume && 
        <ModalContainer>
          {score === Score.WIN 
            ? <p>Ducky saved!</p>
            : <p>Poor ducky!</p>
          }   
          <button type='button' onClick={handleButtonClick}>
            Play again
          </button>
        </ModalContainer>
      }
    </div>
  );
}

export default App;
