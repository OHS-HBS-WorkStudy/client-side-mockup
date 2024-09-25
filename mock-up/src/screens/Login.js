import { useContext } from 'react';

import { SwitchContext, AccountActivateContext, AccountChangeContext } from '../App';

export default function Login() {
    const screenChange = useContext(SwitchContext);
    const setAccount = useContext(AccountChangeContext);
    const activateAccount = useContext(AccountActivateContext);
    function confirmUser() {
        try{
            let userCount = Number(localStorage.getItem("userCount"));

            console.log(userCount);

            let userVal = document.getElementById("user").value;
            let passVal = document.getElementById("password").value;

            let successful = 0;

            for(let i = 1; i <= userCount; i++) {
                let compareUser = JSON.parse(localStorage.getItem("user"+i));

                if(userVal !== compareUser.username) {
                    continue;
                }else {
                    if(passVal !== compareUser.password){
                        continue;
                    }else {
                        console.log("login successful");
                        successful = 1;
                        break;
                    }
                }
            }

            if(successful === 0) {
                console.log("no user exists");
            }else {
                activateAccount();
                setAccount(userVal);
                screenChange(0);
            }
        }catch(err) {
            console.log("login attempt failed")
        }
    }

    return(
        <div>
            <h2>Login Page</h2>

            <label for="user">Username: </label>
            <input id="user" name="user"></input>
            <br></br>
            <label for="password">Password: </label>
            <input id="password" type="password" name="password"></input>
            <br></br>
            <button onClick={confirmUser}>LogIn</button>
        </div>
    );
}