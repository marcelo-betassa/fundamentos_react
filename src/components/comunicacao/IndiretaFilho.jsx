import React from "react";

let IndiretaFilho = (props) => {

    const gerarIdade = ( ) => parseInt(Math.random() * 20) + 40; 
    const gerarNerd = () => Math.random() > 0.5;

    return (
        <div>
            <div>
                Filho
            </div>    
                <button onClick={
                    (e) => {
                        console.log('Event', e);
                        props.clicou('Marcelo', gerarIdade(), gerarNerd());
                    }
                }>Fornecer informações</button>    
        </div>
    )
}

export default IndiretaFilho;