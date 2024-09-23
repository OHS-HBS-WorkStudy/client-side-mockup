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
        <div>
            <h2>Signup Page</h2>

            <label for="user">Username: </label>
            <input id="user" name="user"></input>
            <br></br>
            <label for="password">Password: </label>
            <input id="password" type="password" name="password"></input>
            <br></br>
            <button onClick={createUser}>Submit</button>
        </div>
    );
}