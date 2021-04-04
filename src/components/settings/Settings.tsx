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
    switch (target.name) {
      case 'leftInt':
      case 'rightInt':
        dispatch(changeSettingsOperand({
          operand: target.name,
          value: target.value,
        }));
        break;

      case 'operation':
        dispatch(changeSettingsOperation(target.value));
        break;

      default:
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
            {(!settings.operation.div || !settings.rightInt.twoDigits) &&
              <input className="settings-list__input settings-list__input--first-number-one" readOnly
                type="radio" name="leftInt" value="oneDigit" checked={settings.leftInt.oneDigit}
              />
            }
            <input className="settings-list__input settings-list__input--first-number-two" readOnly
              type="radio" name="leftInt" value="twoDigits" checked={settings.leftInt.twoDigits}
            />
            {!settings.operation.mult &&
              <input className="settings-list__input settings-list__input--first-number-three settings-list__input--hidden"
                type="radio" name="leftInt" value="threeDigits" checked={settings.leftInt.threeDigits} readOnly
              />
            }
          </p>
        </fieldset>
      </li>
      <li className="settings-list__item">
        <fieldset className="settings-list__fieldset">
          <legend className="settings-list__legend">Второе число</legend>
          <p className="settings-list__inputs-group">
            <input className="settings-list__input settings-list__input--second-number-one" readOnly
              type="radio" name="rightInt" value="oneDigit" checked={settings.rightInt.oneDigit}
            />
            <input className="settings-list__input settings-list__input--second-number-two" readOnly
              type="radio" name="rightInt" value="twoDigits" checked={settings.rightInt.twoDigits}
            />
            {(!settings.operation.div && !settings.operation.mult) &&
              <input className="settings-list__input settings-list__input--second-number-three" readOnly
                type="radio" name="rightInt" value="threeDigits" checked={settings.rightInt.threeDigits} />
            }
          </p>
        </fieldset>
      </li>
      <li className="settings-list__item">
        <fieldset className="settings-list__fieldset">
          <legend className="settings-list__legend">Действие</legend>
          <p className="settings-list__inputs-group">
            <input className="settings-list__input settings-list__input--operation-add" readOnly
              type="radio" name="operation" value="add" checked={settings.operation.add}
            />
            <input className="settings-list__input settings-list__input--operation-subtr" readOnly
              type="radio" name="operation" value="sub" checked={settings.operation.sub}
            />
            <input className="settings-list__input settings-list__input--operation-mult" readOnly
              type="radio" name="operation" value="mult" checked={settings.operation.mult}
            />
            <input className="settings-list__input settings-list__input--operation-div" readOnly
              type="radio" name="operation" value="div" checked={settings.operation.div}
            />
          </p>
        </fieldset>
      </li>
      <li className="settings-list__item">
        <label className="settings-list__legend">
          Скорость акулы
          <input type="range" name="speed" value={settings.speed} min="1" max="5" readOnly />
        </label>
      </li>
    </ul>
  )
};

export default Settings;
