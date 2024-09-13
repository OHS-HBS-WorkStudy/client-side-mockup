import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import NewThread from './NewThread.js';
import Controller from './Controller.js';
import Navigator from './Navigator.js';

function App() {
  const [screenState, changeScreen] = useState(0);
  const [questionName, changeQuestion] = useState("none");
  const [loggedIn, isLoggedIn] = useState(false);

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


  function toLoginPage() {
    changeScreen(3);
  }

  function trueLog() {
    isLoggedIn(true);
    console.log(loggedIn);
  }
  
    function toSignUp() {
    changeScreen(4);
}

  return (
    <div>
      <Controller screen={screenState} homeFunction={toThread} threadData={questionName} logFunction={trueLog}/>
      <Navigator action={toNewThread} action2={toHomePage} action3={toLoginPage} />
    <div>
      <Controller screen={screenState} homeFunction={toThread} threadData={questionName}/>
      <Navigator action={toNewThread} action2={toHomePage} action4={toSignUp} />
    </div>
  );
}

export default App;
