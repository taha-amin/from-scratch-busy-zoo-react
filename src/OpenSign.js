import React from 'react';

export default function IsOpen({ isOpen }) {
  // function start() {
  //   audio.play();
  // }

  // function end() {
  //   audioTwo.play();
  // }

  return (
    //this component takes in isOpen prop and renders differently based on whether isOpen props is true or false
    <div className="is-open">
      {/* <div className={`red circle ${isOpen === 'red' && 'on'}`}></div>

      <div className={`yellow circle ${isOpen === 'yellow' && 'on'}`}></div>

      <div className={`green circle ${isOpen === 'green' && 'on'}`}></div> */}

      {isOpen
        ? 'My name is Joe Exotic and we are open for business'
        : 'I am never going to financially recover from this'}
    </div>
  );
}
