import { useState } from 'react';

export default function Voting({questionName}) {
    const [val, alterVal] = useState(0);
    const [hasAnswered, willAnswer] = useState(false);

    function toLS(useVal){
        let data = JSON.parse(localStorage.getItem(questionName));
        data.voteStat = useVal;
        console.log(data, useVal);
        localStorage.setItem(questionName, JSON.stringify(data));
    }

    function increase() {
        alterVal(val+1);
        let newVal = val+1;
        willAnswer(true);
        toLS(newVal);
    }

    function decrease() {
        alterVal(val-1);
        let newVal = val-1;
        willAnswer(true);
        toLS(newVal);
    }
    

    return(
        <div>
            <button onClick={increase} disabled={hasAnswered}>Upvote!</button>
            <p>{val}</p>
            <button onClick={decrease} disabled={hasAnswered}>Downvote!</button>
        </div>
    );
}