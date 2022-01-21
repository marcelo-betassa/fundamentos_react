import React from "react"

export default function comParametro( props ) {
    console.log(props);

    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>{ props.aluno } tem nota { props.nota }</p>
            <strong>{status}</strong>
        </div>
    );
}