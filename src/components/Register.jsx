import React from "react";
import { Name } from "./Name";
import { Password } from "./Password";

function Register(props){
    return  <div className="full-block">
                <h1>Register Now!</h1>
                <Name />
                <input value = {props.lastname}></input>
                <Password />
                <input type="password" placeholder="confirm password" required></input>
                <br></br>
                <input type="submit" value="Register" id="b1"></input>
            </div>
}

export default Register;