import { useContext } from 'react';

import { ScreenContext } from './App.js';

import SignUp from './screens/SignUp.js';
import Login from './screens/Login.js';
import Settings from './screens/Settings.js';
import Account from './screens/Account.js';
import NewThread from './screens/NewThread.js';
import Thread from './screens/Thread.js';
import Home from './screens/Home.js';

export default function Display() {
    const screen = useContext(ScreenContext);

    switch(screen) {
        case 1:
            return(
                <SignUp />
            );
        case 2:
            return(
                <Login />
            );
        case 3:
            return(
                <Settings />
            );
        case 4:
            return(
                <Account />
            );
        case 5:
            return(
                <NewThread />
            );
        case 6:
            return(
                <Thread />
            );
        default:
            return(
                <Home />
            );
    }
}