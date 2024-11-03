import { useContext } from 'react';

import {SwitchContext} from './App.js';
import CustomButton from './CustomButton.js';

import './App.css';

export default function Navigator() {
    const screen_switch = useContext(SwitchContext);
    const change_screen = useContext(SwitchContext);

    return(
        <div>
            <nav>
                <h1>Anonymous Academy</h1>
                <input type="checkbox" id="sidebar-active" />
                    <label for="sidebar-active" className="open-sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </label> 

                <label id="overlay" for="sidebar-active"> </label>
                <div class="link-container">
                    <label for="sidebar-active" className="close-sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </label>
            <input type="text" placeholder='Search...' />
           <div className="a">
            <CustomButton func={change_screen} data={1} name={"Sign-Up"}/>
            <CustomButton func={change_screen} data={2} name={"Login"}/>
            <CustomButton func={screen_switch} data={0} name={"Home"} />
            <CustomButton func={screen_switch} data={5} name={"New Question"} />
            <CustomButton func={screen_switch} data={4} name={"Account"}  />
            </div>
            </div>
            </nav>
        </div>
    );
}