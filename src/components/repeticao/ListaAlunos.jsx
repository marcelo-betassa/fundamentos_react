import React from "react";
import alunos from "../../data/alunos"

let listaAlunos = (props) => {

    console.log(alunos);

    const alunosLi = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                { aluno.id } <strong>-</strong> { aluno.nome } {'->'} {aluno.nota}
            </li>
        );
    });

    return (
        <div>
            <ul style={{listStyle:'none'}}>
                { alunosLi }
            </ul>
        </div>
    );

};

export default listaAlunos;