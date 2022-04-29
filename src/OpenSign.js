import React from 'react';

export default function IsOpen({ isOpen }) {
  return (
    //this component takes in isOpen prop and renders differently based on whether isOpen props is true or false
    <div className="is-open">
      <div className={`red circle ${isOpen === 'red' && 'on'}`}></div>

      <div className={`yellow circle ${isOpen === 'yellow' && 'on'}`}></div>

      <div className={`green circle ${isOpen === 'green' && 'on'}`}></div>
    </div>
  );
}
