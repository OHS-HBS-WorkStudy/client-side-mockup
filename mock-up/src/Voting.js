import { useState } from 'react';

export default function Voting() {
    const [val, alterVal] = useState(0);
    const [hasAnswered, willAnswer] = useState(false);

    function increase() {
        alterVal(val+1);
        willAnswer(true);
    }

    function decrease() {
        alterVal(val-1);
        willAnswer(true);
    }
    

    return(
        <div>
            <button onClick={increase} disabled={hasAnswered}>Upvote!</button>
            <p>{val}</p>
            <button onClick={decrease} disabled={hasAnswered}>Downvote!</button>
        </div>
    );
}