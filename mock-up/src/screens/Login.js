import { useContext } from 'react';

import { SwitchContext } from '../App';

export default function Login() {
    let screenChange = useContext(SwitchContext);
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
                screenChange(0);
            }
        }catch(err) {
            console.log("login attempt failed")
        }
    }

    return(
        <body>
            <div>
                <div className="container">
                    <div className="split left">
                        <div className="center">
                            <h1>Welcome Back to the Website</h1>
                        </div>
                    </div>

                    <div className="split right">
                        <div className="center">
                                <h3>Log In</h3>
                            <div className="input-container">
                                <label for="email">Email:</label>
                                <input id="email" type="text" placeholder="Enter your email" />

                                <label for="password">Password:</label>
                                <input id="password" type="text" placeholder="Enter your password" />

                                <button className="btn-send" onClick={confirmUser()}>Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>


    );
}