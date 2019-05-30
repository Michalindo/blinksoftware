import React from 'react';

function PreviousButton(props) {

  return (
    <button onClick={props.handler}>
      &laquo; Previous    
    </button>
    );
}

export default PreviousButton;



