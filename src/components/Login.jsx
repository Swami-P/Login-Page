import React from "react";

function Login(){
    return(
    <div className="login-box-style">
        <form>
            <label>Username</label>
            <input name="username" type="text" placeholder="Enter the Username"></input>
            <br />
            <label>Password</label>
            <input name="password" type="password" placeholder="Enter the password"></input>
            <br />
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
            <br />
            <a href="none">Forgot Password</a>
        </form>
    </div>);
}

export default Login;