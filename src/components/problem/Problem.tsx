import React from 'react'

function Problem() {
  return (
    <section className='problem'>
      <h2 className='visually-hidden'>Problem</h2>
      <table className='problem__table'>
        <tbody>
          <tr className='problem__answer'>
            <td className='problem__cell problem__cell--answer'>
              <input className='problem__answer-input' type='text' id='answer' disabled />
            </td>
          </tr>
          <tr className='problem__question'>
            <td className='problem__cell problem__cell--first-integer' />
            <td className='problem__cell problem__cell--operation' />
            <td className='problem__cell problem__cell--second-integer' />
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Problem
