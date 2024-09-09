import Reply from './replying.js';

export default function Thread({name}) {
    console.log(name);
    let data = localStorage.getItem(name);
    console.log(data);
    let question = JSON.parse(data);
    console.log(question);

    return (
        <div>
            <h1>{question.name}</h1>
            <p>{question.desc}</p>
            <Reply questionName={name} />
        </div>
    );
}