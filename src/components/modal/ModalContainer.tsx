type TProps = JSX.IntrinsicElements['div'];

function ModalContainer(props: TProps) {
  return (
    <div className='modal'>
      { props.children }
    </div>
  )
};

export default ModalContainer;
