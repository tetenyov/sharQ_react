import React from 'react'

import Control from './Control'

function ControlsList() {
  const NUMBER_CONTROLS = 10

  const digitControls = Array.from({length: NUMBER_CONTROLS}, (control, i) => {
    const controlValue = (NUMBER_CONTROLS - 1) - i

    return (
      <li className="controls-list__item" key={i}>
        <Control type="button" value={controlValue}>{ controlValue }</Control>
      </li>
    )
  })

  return (
    <ul className="controls-list">
      { digitControls }
      <li className="controls-list__item controls-list__item--minus" key={'11'}>
        <Control type="button" value="-">&#8722;</Control>
      </li>
      <li className="controls-list__item controls-list__item--delete" key={'12'}>
        <Control type="button">&#8592;</Control>
      </li>
    </ul>
  )
}

export default ControlsList
