import React from "react";

let diretaFilho = (props) => {

    return (
        <div>
            <span>{props.nome}</span> <span>{props.idade}</span> <span>{props.nerd ? <strong>Verdadeiro</strong> : <strong>Falso</strong>}</span>
        </div>
    )
}

export default diretaFilho;