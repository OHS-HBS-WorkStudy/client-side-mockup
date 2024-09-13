export default function Navigator({action, action2, action3}) {
    return(
        <div>
            <button onClick={action2}>Home</button>
            <button onClick={action}>New Question</button>
            <button onClick={action3}>Sign Up</button>
        </div>
    );
}