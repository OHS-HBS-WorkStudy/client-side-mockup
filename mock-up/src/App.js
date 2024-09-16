import logo from './logo.svg';
import './App.css';

import LoginProvider from './LoginFun.js';

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


  function toLoginPage() {
    changeScreen(3);
  }

  
    function toSignUp() {
    changeScreen(4);
}

  return (
    <LoginProvider>
    <div>
      <Controller screen={screenState} homeFunction={toThread} threadData={questionName}/>
      <Navigator action={toNewThread} action2={toHomePage} action3={toLoginPage} action4={toSignUp} />
    </div>
    </LoginProvider>
  );
}

export default App;
