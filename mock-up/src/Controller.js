import Home from './HomePage.js';

import NewThread from './NewThread.js';

import Thread from './Thread.js';

export default function Controller({screen, homeFunction}) {
    if(screen === 1) {
        return(
            <NewThread />
        );
    }else if(screen === 2){
        return(
            <Thread />
        );
    }else {
        return(
            <Home homeFunctions={homeFunction}/>
        );
    }
}