import { useState } from 'react';

export default function Voting() {
    const [val, alterVal] = useState(0);

    function increase() {
        alterVal(val+1);
    }

    function decrease() {
        alterVal(val-1);
    }
    

    return(
        <div>
            <button onClick={increase}>Upvote!</button>
            <p>{val}</p>
            <button onClick={decrease}>Downvote!</button>
        </div>
    );
}