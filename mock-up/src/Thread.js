export default function Thread({name}) {
    let data = localStorage.getItem(name);
    let question = JSON.parse(data);

    console.log(question);

    return (
        <div>
            <h1>{question.name}</h1>
            <p>{question.desc}</p>
        </div>
    );
}