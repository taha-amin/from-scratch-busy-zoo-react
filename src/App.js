//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import IsOpen from './OpenSign';

function App() {
  //track states for stop lights, animal sizes, and animal parade
  const [isOpen, setIsOpen] = useState('red');

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
