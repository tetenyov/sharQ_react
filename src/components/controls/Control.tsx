import React from 'react'

enum ButtonTypes {
  'button',
  'submit',
  'reset',
  undefined
}

type TProps = {
  type: ButtonTypes;
  value: string;
  // children
}

function Control(props: TProps) {

  return (
    <button type={props.type} value={props.value}>
      {/* {props.children} */}
    </button>
  )
}

export default Control
