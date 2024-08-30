import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import NewThread from './NewThread.js';
import Controller from './Controller.js';
import Navigator from './Navigator.js';

function App() {
  const [screenState, changeScreen] = useState(0);

  function toNewThread() {
    changeScreen(1);
    console.log(screenState);
  }

  function toThread() {
    changeScreen(2);
  }

  return (
    <div>
      <Controller screen={screenState} homeFunction={toThread}/>
      <Navigator action={toNewThread} />
    </div>
  );
}

export default App;
