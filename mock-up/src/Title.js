import { useContext } from 'react';

import {SwitchContext} from './App.js';

import CustomButton from './CustomButton.js';


export default function Title() {
    const change_screen = useContext(SwitchContext);

    return (
        <div class="Title"> 
            <h1>Academics Anonymous</h1>

            <CustomButton func={change_screen} data={1} name={"Sign-Up"} />
            <CustomButton func={change_screen} data={2} name={"Login"} />
        </div>
    );
}