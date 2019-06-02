import React from 'react';
import './sliderAvatar.scss'

function SliderAvatar(props) {
  return (
    <div className="avatar" style={{ backgroundImage: `url(${props.avatar})` }}></div>
  );
}

export default SliderAvatar;
