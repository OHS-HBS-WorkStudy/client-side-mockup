import { useContext, useState } from 'react';

import {SwitchContext} from './App.js';
import CustomButton from './CustomButton.js';

import './App.css';

export default function Navigator() {
    const screen_switch = useContext(SwitchContext);
    const change_screen = useContext(SwitchContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggleSearch = () => {
        setIsOpen(prevState => !prevState);
    };

    return(
        <div>
            <nav>
        
                <h1 className="title">

                    <CustomButton func={screen_switch} data={0} name={"Anonymous Academy"}/>
                </h1>
                
                

                <input type="checkbox" id="sidebar-active" />
                    <label for="sidebar-active" className="open-sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </label> 

                <label id="overlay" for="sidebar-active"> </label>
                <div class="link-container">
                    <label for="sidebar-active" className="close-sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </label>

                    

           <div className="a">
           <div className="searchbar">
                    <div className="box">
                        <div className={`search-box ${isOpen ? "open" : ""}`}>
                            {isOpen && (
                                <input type="text" placeholder="Type here..." />
                            )}
                            <label onClick={toggleSearch} className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
            <CustomButton func={change_screen} data={1} name={"Sign-Up"} />
            <CustomButton func={change_screen} data={2} name={"Login"}/>
            <CustomButton func={screen_switch} data={5} name={"New Question"} />
            <CustomButton func={screen_switch} data={4} name={"Account"} />
            </div>
            </div>
            </nav>
        </div>
    );
}