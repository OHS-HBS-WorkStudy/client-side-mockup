import Home from './HomePage.js';

import NewThread from './NewThread.js';

import Thread from './Thread.js';

import SignUp from './SignUp.js'

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
    }else if(screen === 0){
        return(
            <Home homeFunctions={questionName}/>
        );
    }else if(screen === 4) {
        return(
            <SignUp />
        );
    }
}