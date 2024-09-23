import logo from './logo.svg';
import './App.css';

import { useState, createContext } from 'react';

import System from './System.js';

export const ScreenContext = createContext(0);
export const SwitchContext = createContext(0);

function App() {

  const [screenState, switchScreen] = useState(0);

  function changeScreen(val) {
    switchScreen(val);
    console.log(val);
    console.log(screenState);
  }

  return (
    <div class="App">
      <ScreenContext.Provider value={screenState}>
        <SwitchContext.Provider value={changeScreen}>
          <System />
        </SwitchContext.Provider>
      </ScreenContext.Provider>
    </div>
  );
}

export default App;
