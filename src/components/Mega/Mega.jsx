import React, {useState} from "react";
import './Mega.css'


let Mega = (props) => {
    function gerarNumeros(qtd) {
        let  numeros = Array(qtd)
        .fill(0)
        .reduce((nums) => {
            const novoNum = gerarNumeroNaoContidos(1,60,nums)
         //    console.log([...nums, novoNum]);
            return [...nums, novoNum]
        },[])
        .sort((n1, n2) => n1 - n2);
        
        

        return numeros;
        }

        function gerarNumeroNaoContidos(min, max, array) {
         let numAleatorio = parseInt(Math.random() * (max + 1 - min) + min);
            return array.includes(numAleatorio) ? gerarNumeroNaoContidos(min, max, array) : numAleatorio
        }

        const [qtd, setQtd] = useState(props.qtdNumero || 6);
        const numIniciais = Array(qtd).fill(0);
        const [numeros, setNumeros] = useState(numIniciais);

    return (
        <div className="mega">
            <h2 className="mt-10">Mega</h2>
            <div>
                <label htmlFor="qtde">Qtd de números: </label>
                <input type="number" max={10} name="qtde" id="qtde" value={qtd} onChange={e => setQtd(+ e.target.value)} />
            </div>

            <h3 className="mt-10">{numeros.join(' ')}</h3>
            <button className="mt-20" type="button" onClick={e => setNumeros(gerarNumeros(qtd))}>Gerar Numeros</button>
        </div>
    );

};

export default Mega;