import "./Contador.css"
import React from "react";

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


    setPasso = (event) => {
        this.setState({
            passo: + event.target.value
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <p>Valor inicial: { this.state.numero }</p>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <button onClick={this.incrementa}>+</button>
                <button onClick={this.decrementa}>-</button>
            </div>
        );
    }

}