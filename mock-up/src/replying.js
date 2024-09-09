import { useState } from 'react';

import Response from './replyingFun.js';

export default function Reply({questionName}) {
    const [replyCheck, changeCheck] = useState(false);

    function checkChange() {
        changeCheck(true);
    }

    function closeCheck() {
        changeCheck(false);
    }


    return(
        <div>
            <button onClick={checkChange}>Reply</button>
            <Response check={replyCheck} closeButton={closeCheck} name={questionName} />
        </div>
    );

}



