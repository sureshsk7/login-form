import React from "react";
import { Login } from "./Login";
import Register from "./Register";

const login = true;
const registered = true;
// function check(){
//     if(login === false){
//         return <div className="full-block">
//                     <h1>Login</h1>
//                     < Login />
//                 </div>
//     }else {
//         return <h1 className="full-block">Hello User</h1>
//     }
// }

//     function App(){
//         return check()
//     }

// Now we cannot pass statments in JSX we cannot pass check function inside App function hence we can use ternary operator

function App(){
    return (registered === true ? <Login />: <Register lastname = "Ram"/>)
               }

export {App , login};

            