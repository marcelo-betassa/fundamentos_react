import React from "react";

let Botoes = (props) => {

    return (
        <div>
            <button onClick={props.inc}>+</button>
            <button onClick={props.dec}>-</button>
        </div>
    )

}

export default Botoes;