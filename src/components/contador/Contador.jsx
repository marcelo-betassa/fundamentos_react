import "./Contador.css"
import React from "react";
import Display from "./Display"
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";
export default class Contador extends React.Component {

    state = {
        numero: this.props.contadorInicial || 0,
        passo: this.props.passoInicial || 5
    }

    // constructor(props) {
    //     super(props);
    //     this.incrementa = this.incrementa.bind(this);
    // }

    incrementa = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementa = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }


    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes inc={this.incrementa} dec={this.decrementa} />
            </div>
        );
    }

}