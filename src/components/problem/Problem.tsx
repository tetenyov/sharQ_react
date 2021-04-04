import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { Operations } from '../../constants/constants';
import { TOperation } from '../../store/types/settings';

function Problem() {
  const problem = useSelector((state: RootState) => state.problem);
  const operation = useSelector((state: RootState) => state.settings.operation);

  const getOperation = (value: TOperation, vocabulary: typeof Operations) => {
    const selectedOperation = Object.entries(value).find(([_, value]) => value) || '';

    return Operations[selectedOperation[0].toUpperCase()];
  }

  return (
    <section className='problem'>
      <h2 className='visually-hidden'>Problem</h2>
      <table className='problem__table'>
        <tbody>
          <tr className='problem__answer'>
            <td className='problem__cell problem__cell--answer'>
              <input className='problem__answer-input' type='text' id='answer'
                value={problem.answer} disabled 
              />
            </td>
          </tr>
          <tr className='problem__question'>
            <td className='problem__cell problem__cell--first-integer'>
              {problem.leftInt}
            </td>
            <td className='problem__cell problem__cell--operation'>
              {getOperation(operation, Operations)}
            </td>
            <td className='problem__cell problem__cell--second-integer'>
              {problem.rightInt}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Problem;
