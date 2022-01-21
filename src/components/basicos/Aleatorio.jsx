import React from "react";

let aleatorio =  (props) =>  {

    let numeroAleatorio = parseInt(Math.floor(Math.random() * (props.max - props.min) + props.min));
    console.log(numeroAleatorio);
    return (
        <div>
            <h2>Numero Aleatório</h2>
            <p>
                <strong>Valor Mínimo:</strong> { props.min }
            </p>
            <p>
                <strong>Valor Máximo:</strong> { props.max }
            </p>
            <p>
                <strong>Valor aleatório:</strong> { numeroAleatorio }
            </p>
        </div>
    ) 
}

export default aleatorio;

