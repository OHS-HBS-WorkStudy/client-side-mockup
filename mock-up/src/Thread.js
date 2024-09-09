import Reply from './replying.js';

import GetReplies from './GetReplies.js';

export default function Thread({name}) {
    console.log(name);
    let data = localStorage.getItem(name);
    console.log(data);
    let question = JSON.parse(data);
    console.log(question);

    return (
        <div>
            <h1>{question.name}</h1>
            <h2>{question.desc}</h2>
            <GetReplies questionName={name} />
            <Reply questionName={name} />
        </div>
    );
}