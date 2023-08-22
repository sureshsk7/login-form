import React from "react";
import { useState } from "react";

// React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function

function Counter(){
    //useState returns a value and a function
    const [count , x] = useState(0); // whatever we pass in useState thats the initial value

    function increase(){
        x(count+1);
    }

    function decrease(){
        x(count-1);
    }
    // while calling functions in jsx file dont use () just specify the name of function
    return <div>
        <h1>{count}</h1>
        <button onClick={increase}>+</button> 
        <button onClick={decrease}>-</button>
    </div>
}

export {Counter};