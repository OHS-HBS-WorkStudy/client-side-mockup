export default function Navigator({action, action2, action3, action4}) {
    return(
        <div>
            <button onClick={action2}>Home</button>
            <button onClick={action}>New Question</button>
            <button onClick={action3}>Login</button>
            <button onClick={action4}>Sign Up</button>
        </div>
    );
}