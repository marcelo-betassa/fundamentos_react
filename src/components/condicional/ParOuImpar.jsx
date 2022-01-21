import React from "react";

let condicional = (props) => {

    let isPar = props.numero % 2 === 0

    console.log('isPar ? ', isPar);

    return (
        <div>
            {isPar ? <span>Par</span> : <span>Impar</span> }           
        </div>
    )
}

export default condicional;