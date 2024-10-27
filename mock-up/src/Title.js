import { useContext } from 'react';

import {SwitchContext} from './App.js';

import CustomButton from './CustomButton.js';


export default function Title() {

    return (
        <div class="Title"> 
            <h1 id="title">Anonymous Academy</h1>
        </div>
    );
}