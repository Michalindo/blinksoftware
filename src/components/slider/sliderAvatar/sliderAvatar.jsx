import React from 'react';
import './sliderAvatar.scss'

function sliderAvatar(props) {
  return (
    <div className="avatar" style ={{backgroundImage: `url(${props.avatar})`}}></div>    
    );
}

export default sliderAvatar;
