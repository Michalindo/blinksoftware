import React from 'react';
import './sliderButton.scss'

function PreviousButton(props) {

  return (
    <button onClick={props.handler}>
      {props.value}
    </button>
  );
}

export default PreviousButton;



