import React from "react";

let familiaMembro = (props) => {
    return (
        <div>{props.nome} <strong>{props.sobrenome}</strong></div>
    );
};

export default familiaMembro;