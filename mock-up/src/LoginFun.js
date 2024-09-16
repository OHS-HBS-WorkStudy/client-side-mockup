import React, { createContext, useState, useContext } from 'react';

const LoginContext = createContext();


export default function LoginProvider({ LoginCon }) {
  const [loggedIn, setLoggedIn] = useState(false);

  function trueLog() {
    setLoggedIn(true);
    console.log(loggedIn);
  }

  return (
    <LoginContext.Provider value={{ loggedIn, trueLog }}>
      {LoginCon}
    </LoginContext.Provider>
  );
}


export function useLogin() {
  return useContext(LoginContext);
}
