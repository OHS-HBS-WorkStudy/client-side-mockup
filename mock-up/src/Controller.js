import Home from './HomePage.js';

import NewThread from './NewThread.js';

import Thread from './Thread.js';

export default function Controller({screen, homeFunction, threadData}) {
    function questionName(name) {
        //console.log(name);
        homeFunction(name);
    }

    if(screen === 1) {
        return(
            <NewThread />
        );
    }else if(screen === 2){
        return(
            <Thread name={threadData}/>
        );
    }else {
        return(
            <Home homeFunctions={questionName}/>
        );
    }
}