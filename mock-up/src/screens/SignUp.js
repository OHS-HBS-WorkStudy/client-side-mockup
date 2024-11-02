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
                <div className="container">
                    <div class="split right">
                            <div className="center">
                                    <h3>Create Account</h3>
                                <div className="input-container">
                                <label for="fname">First Name:</label>
                                <input id="fname" type="text" placeholder="Enter your first name" />
                                <label for="lname">Last Name:</label>
                                <input id="lname" type="text" placeholder="Enter your last name"/>
                                <label for="password">Password:</label>
                                <input id="password" type="text" placeholder="Enter your password"/>  
                                <label for="email">Email:</label>
                                <input id="email"  type="text" placeholder="Enter your email"/>
                                <button className="btn-send">Submit</button>
                            </div>
                        </div>
                    </div>

                    <div className="split left">
                            <div className="center">
                                <div className="btn-container">
                                    <label for="btn"><b>Current Account Type:</b></label>
                                        <button className="btn" >
                                            <span>Student</span>
                                        </button>
                                        <button className="btn" >
                                            <span>Parent</span>
                                        </button>
                                        <button className="btn">
                                            <span>Teacher</span>
                                        </button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </body>
    );
}