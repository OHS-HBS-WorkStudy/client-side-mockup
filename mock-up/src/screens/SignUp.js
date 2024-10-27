export default function SignUp() {
    function createUser() {
        let user_val = document.getElementById("user").value;
        let pass_val = document.getElementById("password").value;

        let data = {
            username: user_val,
            password: pass_val
        };

        let userCount;

        try{
            userCount = Number(localStorage.getItem("userCount"));
            userCount += 1;
        }catch(err) {
            userCount = 1;
        }

        console.log(data);

        localStorage.setItem("userCount", userCount);
        localStorage.setItem("user"+userCount, JSON.stringify(data));
    }

    return(
        <body>
        <div className="SignUp">
          <div id="left">
            <h3>Create Account</h3>
            <b>First Name:</b>
            <div className="inputStyle">
            <input id="fname" type="text"/>
            <b>Last Name:</b>
            <input id="lname"  type="text"/>
            <b>Password:</b>
            <input id="password"  type="text"/>  
            <b>Email:</b>
            <input id="email"  type="text"/>
            </div>
            <button className="btn-send" onClick={createUser}>Submit</button>
          </div>
        </div>
        </body>
    );
}