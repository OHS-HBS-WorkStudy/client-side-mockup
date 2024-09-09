import Voting from './Voting.js';

export default function Thread({name}) {
    console.log(name);
    let data = localStorage.getItem(name);
    console.log(data);
    let question = JSON.parse(data);
    console.log(question);

    return (
        <div>
            <Voting questionName={name}/>
            <h1>{question.name}</h1>
            <p>{question.desc}</p>
        </div>
    );
}