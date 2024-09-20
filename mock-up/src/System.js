import {useState, getContext} from 'react';

import Title from './Title.js';
import Display from './Display.js';
import Navigator from './Navigator.js';

export default function System() {
    return(
        <div>
            <Title />
            <Display />
            <Navigator />
        </div>
    );
}