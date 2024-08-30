import Home from './HomePage.js';

import NewThread from './NewThread.js';

export default function Controller({screen}) {
    if(screen === 1) {
        return(
            <NewThread />
        );
    }else {
        return(
            <Home />
        );
    }
}