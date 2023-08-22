import React from "react";
import { Name } from "./Name";
import { Password } from "./Password";
import { login } from "./App";
import Welcome from "./Welcome";

  function Login(){
        return (login === true ? <Welcome /> :(<div className="full-block">
        <h1>Login Please!!</h1>
        <form>
        <Name />
        <Password />
        <input type="submit" id = "b1" />   
        </form>
        </div>) )
  }
export {Login};
