import {useState, getContext, createContext} from 'react';

import Title from './Title.js';
import Display from './Display.js';
import Navigator from './Navigator.js';

export const AccountContext = createContext("none");
export const AccountChangeContext = createContext(0);

export default function System() {
    const [account, accountChange] = useState("none");

    return(
        <AccountContext.Provider value={account}>
            <AccountChangeContext.Provider value={accountChange}>
                <div>
                    <Navigator />
                    <Display />
                </div>
            </AccountChangeContext.Provider>
        </AccountContext.Provider>
    );
}