import logo from './logo.svg';
import './App.css';

import { useState, createContext } from 'react';

import System from './System.js';

export const ScreenContext = createContext(0);
export const SwitchContext = createContext(0);
export const QuestionContext = createContext(0);

export const AccountContext = createContext(0);
export const AccountActiveContext = createContext(0);
export const AccountChangeContext = createContext(0);
export const AccountActivateContext = createContext(0);

function App() {
  const [screenState, switchScreen] = useState(0);
  const [questionType, changeType] = useState(0);

  const [accountState, accountChange] = useState("Guest");
  const [accountActive, activateAccount] = useState(false);

  function changeScreen(val) {
    switchScreen(val);
    console.log(val);
    console.log(screenState);
  }

  function changeScreen(val, type) {
    switchScreen(val);
    changeType(type);
    console.log(val);
    console.log(screenState);
  }

  function setAccount(data) {
    accountChange(data);
  }

  function accountActivater() {
    activateAccount(true);
  }

  return (
    <div class="App">
      <AccountContext.Provider value={accountState}>
        <AccountActiveContext.Provider value={accountActive}>
          <AccountChangeContext.Provider value={setAccount}>
            <AccountActivateContext.Provider value={accountActivater}>
                <ScreenContext.Provider value={screenState}>
                  <QuestionContext.Provider value={questionType}>
                      <SwitchContext.Provider value={changeScreen}>
                        <System />
                      </SwitchContext.Provider>
                  </QuestionContext.Provider>
                </ScreenContext.Provider>
              </AccountActivateContext.Provider>
            </AccountChangeContext.Provider>
          </AccountActiveContext.Provider>
      </AccountContext.Provider>
    </div>
  );
}

export default App;
