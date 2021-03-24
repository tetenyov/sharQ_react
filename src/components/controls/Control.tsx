import React from 'react'

type TControl = JSX.IntrinsicElements['button']

function Control(props: TControl) {

  return (
    <button type={props.type} value={props.value}>
      {props.children}
    </button>
  )
}

export default Control
