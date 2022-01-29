import "./App.css";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/Membro"
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"
import Mega from "./components/Mega/Mega"

let app = () => {
    return (
        <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#13 - Gerador Megasena" color="#cc9900">
                <Mega />
            </Card>
            <Card titulo="#12 - Contador Component" color="#808000">
                <Contador contadorInicial={10}></Contador>
            </Card>
            <Card titulo="#11 - Component controlado (input)" color="#40E0D0">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação indireta" color="#BDD799">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação direta" color="#EDBB99">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Renderização condicional" color="#85e085">
                <ParOuImpar numero={7}></ParOuImpar>
                {/* <UsuarioInfo usuario={{nome:'Eduardo'}}></UsuarioInfo> */}
                <UsuarioInfo></UsuarioInfo>
            </Card>
            <Card titulo="#07 - Tabela Produtos" color="#5c85d6">
                <ListaProdutos></ListaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#79d2a6">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com filhos" color="#764ba2">
                <Familia sobrenome="Santoro">
                <FamiliaMembro nome="Fernando" />
                <FamiliaMembro nome="Marcelo" />
                <FamiliaMembro nome="João" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio numero aleatório" color="#63ace5">
                <Aleatorio min={1} max={10} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#009688">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#f37736">
                <ComParametro titulo="Teste" aluno="João" nota={9.3} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#8874a3">
                <Primeiro></Primeiro>
            </Card>
        </div>
        </div>
    );
};

export default app;
