import React, {useState, useEffect} from 'react';
import SliderAvatar from './sliderAvatar/sliderAvatar';
import NextButton from './sliderNextButton/sliderNextButton';
import PreviousButton from './sliderPreviousButton/sliderPreviousButton';
import './slider.scss';

function Slider() {

  const nicks = ['gaearon', 'acdlite', 'yyx990803', 'unclebob', 'martinfowler'];
  const [count, setCount] = useState(0);
  const [avatar, setAvatar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${nicks[count]}`)
    .then(response => response.json())
    .then(response =>{
      console.log(response);
      setAvatar(response.avatar_url)
      setIsLoading(false);
    })
  }, [count]);

  let NextHandler = () => {
    if (count === nicks.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1)
    };
  }

  let PreviousHandler = () => {
    if (count === 0) {
      setCount(nicks.length-1);
    } else {
      setCount(count - 1)
    };
  };

  let result;
  
  if (isLoading) {
    result = 
    <div className="avatar">
      <p className ="avatar-loading">Loading...</p>  
    </div>
  } else {
    result = <SliderAvatar avatar={avatar}/> 
  }

  return (
    <div className="slider">
      {result}
      <div className="buttons">
        <PreviousButton handler = {PreviousHandler}/>
        <NextButton handler={NextHandler}/>
      </div>
    </div>
    );
}

export default Slider;
