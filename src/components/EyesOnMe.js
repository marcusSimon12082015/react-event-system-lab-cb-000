// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component
{
  function focusOnMe(event)
  {
    const eventType = event.type;

  }

  render()
  {
    return(<div><button onFocus={this.focusOnMe} onBlur={this.focusOnMe}></button></div>);
  }
}
