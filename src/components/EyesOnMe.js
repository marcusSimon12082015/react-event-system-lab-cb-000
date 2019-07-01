// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component
{
  function focusOnMe(event)
  {
    const eventType = event.type;
    if (eventType === 'focus') {
      console.log('Good!');
    } else {
      console.log('Hey! Eyes on me!');
    }
  }

  render()
  {
    return(<div><button onFocus={this.focusOnMe} onBlur={this.focusOnMe}></button></div>);
  }
}
