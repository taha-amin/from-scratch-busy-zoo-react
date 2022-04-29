import logo from './logo.svg';
import './App.css';

function App() {
  //track states for stop lights, animal sizes, and animal parade

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
