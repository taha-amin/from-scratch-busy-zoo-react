//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import IsOpen from './OpenSign';

function App() {
  //track states for stop lights, animal sizes, and animal parade
  const [isOpen, setIsOpen] = useState('red');

  const [tigerKingSize, setTigerKingSize] = useState(10);
  const [tigerQueenSize, setTigerQueenSize] = useState(10);

  return (
    // how onClick will look for each event
    // <button onClick={() => setIsOpen('true')}
    // <button onClick={() => setIsClosed('false')}

    // <button onClick={() => setUnicornSize(UnicornSize + 1)}
    // <button onClick={() => setLionSize(LionSize + 1)}

    // <button onClick={() => setParade([...parade, 'flamingo'])}>Flamingo</button>
    // <button onClick={() => setParade([...parade, 'Hippo'])}>Hippo</button>
    // <button onClick={() => setParade([...parade, 'Camel'])}>Camel</button>
    // <button onClick={() => setParade([...parade, 'Monkey'])}>Monkey</button>

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
            <button onClick={() => setTigerKingSize(tigerKingSize + 1)}>
              I really appreciate the fact that none of these people like me
            </button>
          </div>
        </div>
      </div>

      <IsOpen isOpen={isOpen} />
      <div className="buttons">
        <button onClick={() => setIsOpen('red')}>Red</button>
        <button onClick={() => setIsOpen('yellow')}>Yellow</button>
        <button onClick={() => setIsOpen('green')}>Green</button>
      </div>
    </div>
  );
}

export default App;
