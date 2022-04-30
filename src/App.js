//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import IsOpen from './OpenSign';
import Parade from './AnimalParade';

import TigerKing from '../src/HeyAllYou.mp3';
import CaroleBasking from '../src/ImNever.mp3';

function App() {
  //track states for stop lights, animal sizes, and animal parade
  const audio = new Audio(TigerKing);
  const audioTwo = new Audio(CaroleBasking);

  const [isOpen, setIsOpen] = useState(true);

  function playTigerKing() {
    audio.play();
  }
  function playCaroleBaskin() {
    audioTwo.play();
  }

  function handleOpenZoo() {
    setIsOpen(true);
    playTigerKing();
  }
  function handleCloseZoo() {
    setIsOpen(false);
    playCaroleBaskin();
  }

  const [tigerKingSize, setTigerKingSize] = useState(10);
  const [tigerQueenSize, setTigerQueenSize] = useState(10);

  const [traffic, setTraffic] = useState(['cheetah', 'tiger']);

  return (
    <div className="App">
      <div className="fight">
        <div className="monster">
          <img src="tigerking.png" width={10 * tigerKingSize} />

          <div className="buttons">
            {/* Clicking this button will have tiger king size go up by one */}
            <button onClick={() => setTigerKingSize(tigerKingSize + 1)}>
              Ima Shoot you before I shoot my cat
            </button>

            {/* Clicking this button will make carole basking size go up by one */}
            <button onClick={() => setTigerQueenSize(tigerQueenSize - 1)}>
              The womans just obsessed with me!
            </button>
          </div>
        </div>

        <div className="monster">
          <img src="caroleBaskin.png" width={10 * tigerQueenSize} />

          <div className="buttons">
            {/* Clicking this will make carole basking size go up by one */}
            <button onClick={() => setTigerQueenSize(tigerQueenSize + 1)}>
              Hey all you cool cats and kittens!
            </button>

            {/* Clicking this will make joe exotic size go up by one */}
            <button onClick={() => setTigerKingSize(tigerKingSize - 1)}>
              I really appreciate the fact that none of these people like me
            </button>
          </div>
        </div>
      </div>

      <IsOpen isOpen={isOpen} />
      <div className="buttons">
        {/* <button onClick={() => setIsOpen('red')}>Red</button>
        <button onClick={() => setIsOpen('yellow')}>Yellow</button>
        <button onClick={() => setIsOpen('green')}>Green</button> */}

        <button onClick={handleOpenZoo}>Open Zoo</button>
        <button onClick={handleCloseZoo}>Close Zoo</button>
      </div>

      <Parade animals={traffic} />
      <div className="buttons">
        <button onClick={() => setTraffic([...traffic, 'cheetah'])}>Cheetah</button>
        <button onClick={() => setTraffic([...traffic, 'tiger'])}>Tiger</button>
        <button onClick={() => setTraffic([...traffic, 'panther'])}>Panther</button>
      </div>
    </div>
  );
}

export default App;
