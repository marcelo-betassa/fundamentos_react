import React, { useState } from "react";
import IndiretaFilho from './IndiretaFilho'

let IndiretaPai = (props) => {

    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [isNerd, setNerd] = useState(false);


    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        console.log(nomeParam, idadeParam, nerdParam);
        setNome(nomeParam);
        setIdade(idadeParam);
        setNerd(nerdParam);
    }

    return (
        <div>
            Pai
            <p><span>{nome}</span> <span>{idade}</span> <span>{isNerd ? 'Verdadeiro': 'Falso'}</span></p>
            <IndiretaFilho clicou={fornecerInformacoes} />
        </div>
    )
}

export default IndiretaPai;