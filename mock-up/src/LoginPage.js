import useLogin from './LoginFun.js';

export default function Login({func}) {

    const { trueLog } = useLogin();
    
    //let userLogedIn = 1 ? 'True' : 'False';

    //console.log(userLogedIn);

    return(
        <div>
            <h1>Login</h1>

            <input placeholder="Enter Your Username"></input>
            <input placeholder="Enter Your Password"></input>

            <button onClick={func}>Submit</button>
        </div>

    );
}