import { TModalContainer } from '../../types/typed-props';

function ModalContainer(props: TModalContainer) {
  return (
    <div className='modal'>
      { props.children }
    </div>
  )
};

export default ModalContainer;
