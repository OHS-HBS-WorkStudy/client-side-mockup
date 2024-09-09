export default function Navigator({action, action2}) {
    return(
        <div>
            <button onClick={action2}>Home</button>
            <button onClick={action}>New Question</button>
        </div>
    );
}