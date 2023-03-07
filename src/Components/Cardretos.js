import React, { Component } from 'react';
import './retos.css'

class Cardpreguntas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarTabla: false,
            preguntas: [
                { id: 1, pregunta: 'Volver al inicio'},
                { id: 2, pregunta: 'Devolverse 5 casillas'},
                { id: 3, pregunta: 'No jugar por 2 rondas'},
                { id: 4, pregunta: 'Te has salvado'},
            ]
        };
    }

    mostrarPreguntas = () => {
        this.setState({ mostrarTabla: true });
    }

    render() {
        const { mostrarTabla, preguntas} = this.state;

        return (
            <div className="Container">
                <div className="Card">
                    <button class="card-button" onClick={this.mostrarPreguntas}>Mostrar Retos</button>
                    {mostrarTabla && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Retos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {preguntas.map(pregunta => (
                                    <tr key={pregunta.id}>
                                        <td>{pregunta.pregunta}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        );
    }
}

export default Cardpreguntas;
