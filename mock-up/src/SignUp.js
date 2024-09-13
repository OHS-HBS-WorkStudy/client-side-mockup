import { useState } from 'react'

export default function SignUp() {
    const [accountType, alterType] = useState(0);

    function studentType() {
        alterType(0);
    }

    function parentType() {
        alterType(1);
    }

    function teacherType() {
        alterType(2);
    }

    function determineType() {
        if(accountType === 0){
            return "Student";
        }else if(accountType === 1){
            return "Parent";
        }else if(accountType === 2){
            return "Teacher";
        }   
     }

    let typeName = determineType();

    function createUser() {
        let user = document.getElementById("user").value;
        let password = document.getElementById("password").value;

        let data = {
            user: user,
            password: password,
            accountType: accountType
        }

        localStorage.setItem(user, JSON.stringify(data));
        console.log("is anyone out there?")
    }

    return(
        <div>
            <div id="account_type">
                <p>Select your Account Type</p>
                <button onClick={studentType}>Student</button>
                <button onClick={parentType}>Parent</button>
                <button onClick={teacherType}>Teacher</button>
                <p>Current type: {typeName}</p>
            </div>

            <div id="user&password">
                <p>Name:</p>
                <input id="user"></input>

                <p>Password</p>
                <input id="password"></input>
            </div>

            <div>
                <button onClick={createUser}>Create Account</button>
            </div>
        </div>
    );
}