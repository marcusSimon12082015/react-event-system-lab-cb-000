// Code Keypad Component Here
import React from 'react';

export defult class Keypad extends React.Component
{
  function passFunction()
  {
    console.log('Entering password...');
  }
  render(){
    return(<div><input type='password' onKeyUp={this.passFunction}></div>);
  }
}
