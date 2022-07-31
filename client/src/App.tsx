import React, { useState } from 'react';
import logo from './logo.svg';
import GoogleAuth from './components/GoogleAuth';
import './App.css';

function App() {
  const [googleAccessToken, setGoogleAccessToken] = useState<string>('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <GoogleAuth />
      
    </div>
  );
}

export default App;
