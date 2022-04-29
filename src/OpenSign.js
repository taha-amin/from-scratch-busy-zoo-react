import React from 'react';

export default function IsOpen({ isOpen }) {
  //this component takes in isOpen prop and renders differently based on whether isOpen props is true or false
  <div className="is-open">
    <div className={`red circle ${color === 'red' && 'on'}`}></div>

    <div className={`yellow circle ${color === 'yellow' && 'on'}`}></div>

    <div className={`green circle ${color === 'green' && 'on'}`}></div>
  </div>;
}
