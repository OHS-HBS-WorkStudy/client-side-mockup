import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import NewThread from './NewThread.js';
import Controller from './Controller.js';
import Navigator from './Navigator.js';

function App() {
  const [screenState, changeScreen] = useState(0);
  const [questionName, changeQuestion] = useState("none");

  function toNewThread() {
    changeScreen(1);
    console.log(screenState);
  }

  function toThread(name) {
    console.log(name);
    changeQuestion(name);
    console.log(questionName);
    changeScreen(2);
  }

  function toHomePage() {
    changeScreen(0)
  }

  return (
    <div>
      <Controller screen={screenState} homeFunction={toThread} threadData={questionName}/>
      <Navigator action={toNewThread} action2={toHomePage} />
    </div>
  );
}

export default App;
