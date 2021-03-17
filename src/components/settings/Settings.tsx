import React from 'react'

type SettingsProps = {
  menuIsOpen: boolean
}

function Settings({ menuIsOpen }: SettingsProps) {

  return (
    <ul className={`settings-list${menuIsOpen ? '--show' : ''}`}>
      <li className="settings-list__item">
          <fieldset className="settings-list__fieldset">
            <legend className="settings-list__legend">Первое число</legend>
            <p className="settings-list__inputs-group">
              <input className="settings-list__input settings-list__input--first-number-one" type="radio" name="first-number" id="first-number--one-digits" checked />
              <input className="settings-list__input settings-list__input--first-number-two" type="radio" name="first-number" id="first-number--two-digits" />
              <input className="settings-list__input settings-list__input--first-number-three settings-list__input--hidden" type="radio" name="first-number" id="first-number--three-digits" />
            </p>
          </fieldset>
        </li>
        <li className="settings-list__item">
          <fieldset className="settings-list__fieldset"> 
            <legend className="settings-list__legend">Второе число</legend>
            <p className="settings-list__inputs-group">
              <input className="settings-list__input settings-list__input--second-number-one" type="radio" name="second-number" id="second-number--one-digits" checked />
              <input className="settings-list__input settings-list__input--second-number-two" type="radio" name="second-number" id="second-number--two-digits" />
            </p>
          </fieldset>
        </li>
        <li className="settings-list__item">
          <fieldset className="settings-list__fieldset">
            <legend className="settings-list__legend">Действие</legend>
            <p className="settings-list__inputs-group">
              <input className="settings-list__input settings-list__input--operation-add" type="radio" name="operation" id="operation-add" checked />
              <input className="settings-list__input settings-list__input--operation-subtr" type="radio" name="operation" id="operation-subtr" />
              <input className="settings-list__input settings-list__input--operation-mult" type="radio" name="operation" id="operation-mult" />
              <input className="settings-list__input settings-list__input--operation-div" type="radio" name="operation" id="operation-div" />
            </p>
          </fieldset>
        </li>
        <li className="settings-list__item">
          <label className="settings-list__legend">
            Скорость акулы
            <input type="range" name="calc-speed" id="calc-speed" min="1" max="5" />
          </label>
        </li>
    </ul>
  )
}

export default Settings
