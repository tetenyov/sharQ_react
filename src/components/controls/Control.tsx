import { TControl } from '../../types/typed-props';

function Control(props: TControl) {
  return (
    <button type={props.type} value={props.value} className="controls-list__button">
      { props.children }
    </button>
  )
};

export default Control;
