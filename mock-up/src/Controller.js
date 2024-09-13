import Home from './HomePage.js';

import NewThread from './NewThread.js';

import Thread from './Thread.js';

import Login from './LoginPage.js';

export default function Controller({screen, homeFunction, threadData, logFunction}) {
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
    } else if(screen === 3){
        return(
            <Login func={logFunction}/>
        );
    } else {
        return(
            <Home homeFunctions={questionName}/>
        );
    }
}