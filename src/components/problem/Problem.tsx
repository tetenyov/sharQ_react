import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';

import { 
  generateProblem, 
  sendCorrectAnswer, 
  moveDucky, 
} from '../../store/action-creators/action-creators';

import { Operations } from '../../constants/constants';

function Problem() {
  const problem = useSelector((state: RootState) => state.problem);
  const isStart = useSelector((state: RootState) => state.gameStates.isStart);
  const operation = useSelector((state: RootState) => state.settings.operation);
  
  const dispatch = useDispatch();

  const problemToAnswer = {
    [Operations.ADD]: () => problem.leftInt + problem.rightInt,
    [Operations.SUB]: () => problem.leftInt - problem.rightInt,
    [Operations.MULT]: () => problem.leftInt * problem.rightInt,
    [Operations.DIV]: () => problem.leftInt / problem.rightInt,
  };

  const isAnswerCorrect = 
    Number(problem.answer) === problemToAnswer[operation]();

  useEffect(() => {
    if (isAnswerCorrect) {
      dispatch(generateProblem());
      dispatch(sendCorrectAnswer());
      dispatch(moveDucky());
    }

  }, [ isAnswerCorrect ]);

  return (
    <section className='problem'>
      <h2 className='visually-hidden'>Problem</h2>
      <table className='problem__table'>
        <tbody>
          <tr className='problem__answer'>
            <td className='problem__cell problem__cell--answer'>
              <input className='problem__answer-input'
                type='text' id='answer' value={problem.answer} disabled 
              />
            </td>
          </tr>
          <tr className='problem__question'>
            <td className='problem__cell problem__cell--first-integer'>
              {isStart && problem.leftInt}
            </td>
            <td className='problem__cell problem__cell--operation'>
              {operation}
            </td>
            <td className='problem__cell problem__cell--second-integer'>
              {isStart && problem.rightInt}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Problem;
