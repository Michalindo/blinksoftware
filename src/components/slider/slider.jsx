import React, { useState, useEffect } from 'react';
import SliderAvatar from './sliderAvatar/sliderAvatar';
import Button from './sliderButton/sliderButton';
import './slider.scss';

const nicks = ['gaearon', 'acdlite', 'yyx990803', 'unclebob', 'martinfowler'];

function Slider() {

  const [actualNicksIndex, setactualNicksIndex] = useState(0);
  const [avatar, setAvatar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${nicks[actualNicksIndex]}`)
      .then(response => response.json())
      .then(response => {
        setAvatar(response.avatar_url)
        setIsLoading(false);
      })
  }, [actualNicksIndex]);

  let NextHandler = () => {
    if (actualNicksIndex === nicks.length - 1) {
      setactualNicksIndex(0);
    } else {
      setactualNicksIndex(actualNicksIndex + 1)
    };
  }

  let PreviousHandler = () => {
    if (actualNicksIndex === 0) {
      setactualNicksIndex(nicks.length - 1);
    } else {
      setactualNicksIndex(actualNicksIndex - 1)
    };
  };

  let result;

  if (isLoading) {
    result =
      <div className="avatar">
        <p className="avatar-loading">Loading...</p>
      </div>
  } else {
    result = <SliderAvatar avatar={avatar} />
  }

  return (
    <div className="slider">
      {result}
      <div className="buttons">
        <Button handler={PreviousHandler} value="&laquo; Previous" />
        <Button handler={NextHandler} value=" Next &raquo;" />
      </div>
    </div>
  );
}

export default Slider;
