import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';

import { 
  changeSettingsOperand, 
  changeSettingsOperation, 
  changeSettingsSpeed 
} from '../../store/action-creators/action-creators';

type SettingsProps = { menuIsOpen: boolean };

function Settings({ menuIsOpen }: SettingsProps) {
  const settings = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  const handleInputChange = ({ target }: { target: any }) => {
    if (target.name === 'leftInt' || target.name === 'rightInt') {
      dispatch(changeSettingsOperand({
        operand: target.name,
        value: target.value,
      }))
    }
    
    if (target.name === 'operation') {
      dispatch(changeSettingsOperation(target.value))
    }

    if (target.name === 'speed') {
      dispatch(changeSettingsSpeed(Number(target.value)))
    }
  };

  return (
    <ul className={`settings-list ${menuIsOpen ? 'settings-list--show' : ''}`}
      onChange={handleInputChange}
    >
      <li className="settings-list__item">
        <fieldset className="settings-list__fieldset">
          <legend className="settings-list__legend">Первое число</legend>
          <p className="settings-list__inputs-group">
            <input className="settings-list__input settings-list__input--first-number-one"
              type="radio" name="leftInt" value="oneDigit" checked={settings.leftInt.oneDigit}
            />
            <input className="settings-list__input settings-list__input--first-number-two"
              type="radio" name="leftInt" value="twoDigits" checked={settings.leftInt.twoDigits}
            />
            <input className="settings-list__input settings-list__input--first-number-three settings-list__input--hidden"
              type="radio" name="leftInt" value="threeDigits" checked={settings.leftInt.threeDigits}
            />
          </p>
        </fieldset>
      </li>
      <li className="settings-list__item">
        <fieldset className="settings-list__fieldset">
          <legend className="settings-list__legend">Второе число</legend>
          <p className="settings-list__inputs-group">
            <input className="settings-list__input settings-list__input--second-number-one"
              type="radio" name="rightInt" value="oneDigit" checked={settings.rightInt.oneDigit}
            />
            <input className="settings-list__input settings-list__input--second-number-two"
              type="radio" name="rightInt" value="twoDigits" checked={settings.rightInt.twoDigits}
            />
          </p>
        </fieldset>
      </li>
      <li className="settings-list__item">
        <fieldset className="settings-list__fieldset">
          <legend className="settings-list__legend">Действие</legend>
          <p className="settings-list__inputs-group">
            <input className="settings-list__input settings-list__input--operation-add"
              type="radio" name="operation" value="add" checked={settings.operation.add}
            />
            <input className="settings-list__input settings-list__input--operation-subtr"
              type="radio" name="operation" value="sub" checked={settings.operation.sub}
            />
            <input className="settings-list__input settings-list__input--operation-mult"
              type="radio" name="operation" value="mult" checked={settings.operation.mult}
            />
            <input className="settings-list__input settings-list__input--operation-div"
              type="radio" name="operation" value="div" checked={settings.operation.div}
            />
          </p>
        </fieldset>
      </li>
      <li className="settings-list__item">
        <label className="settings-list__legend">
          Скорость акулы
          <input type="range" name="speed" value={settings.speed} min="1" max="5" />
        </label>
      </li>
    </ul>
  )
};

export default Settings;
