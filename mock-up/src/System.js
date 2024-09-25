import {useState, getContext, createContext} from 'react';

import Title from './Title.js';
import Display from './Display.js';
import Navigator from './Navigator.js';

export default function System() {
    const [account, accountChange] = useState("none");

    return(
        <div>
            <Title />
            <Display />
            <Navigator />
        </div>
    );
}