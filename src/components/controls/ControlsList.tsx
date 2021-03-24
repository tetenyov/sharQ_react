import React from 'react'

function Controls() {
  const NUMBER_CONTROLS = 10
  const controlsLis = Array.from({ length: NUMBER_CONTROLS })

  return (
    <ul className="controls-list">
      <li className="controls-list__item"><button type="button" value="7">7</button></li>
      <li className="controls-list__item"><button type="button" value="8">8</button></li>
      <li className="controls-list__item"><button type="button" value="9">9</button></li>
      <li className="controls-list__item"><button type="button" value="4">4</button></li>
      <li className="controls-list__item"><button type="button" value="5">5</button></li>
      <li className="controls-list__item"><button type="button" value="6">6</button></li>
      <li className="controls-list__item"><button type="button" value="1">1</button></li>
      <li className="controls-list__item"><button type="button" value="2">2</button></li>
      <li className="controls-list__item"><button type="button" value="3">3</button></li>
      <li className="controls-list__item"><button type="button" value="0">0</button></li>
      <li className="controls-list__item controls-list__item--minus"><button type="button" value="-">&#8722;</button></li>
      <li className="controls-list__item controls-list__item--delete"><button type="button">&#8592;</button></li>
    </ul>
  )
}

export default Controls
