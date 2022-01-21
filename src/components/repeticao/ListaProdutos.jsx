import './ListaProdutos.css'
import React from "react";
import produtos from "../../data/produtos"

let listaProdutos = (props) => {

    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'par': 'impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.valor.toFixed(2).replace('.',',')}</td>
                </tr>
            );
        });
    };


    return (
        <div className="tabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    { getLinhas() }
                </tbody>
            </table>
        </div>
    );

};

export default listaProdutos;