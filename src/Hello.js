import React from "react";

function Hello () {
    const sayHello = () => {
        alert("helo sushanth is a hard working person lol :)")
    }
    return (
        <div>
            <h3>This is Hello component</h3>
            <button onClick={sayHello}>Hello</button>
        </div>
    )
}

export default Hello