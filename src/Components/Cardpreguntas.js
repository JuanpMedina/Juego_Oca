import React, { Component } from 'react';
import './Preguntas.css';

class Cardpreguntas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarTabla: false,
            preguntas: [
                { id: 1, pregunta: '¿Cuál es el resultado de la operación 2 + 2?', respuesta: '4' },
                { id: 2, pregunta: '¿Cuál es el resultado de la operación 5 x 7?', respuesta: '35' },
                { id: 3, pregunta: '¿Cuál es el resultado de la operación 10 / 2?', respuesta: '5' },
                { id: 4, pregunta: '¿Qué es Pi, un número racional o irracional?', respuesta: '5' },
            ]
        };
    }

    mostrarPreguntas = () => {
        this.setState({ mostrarTabla: true });
    }

    render() {
        const { mostrarTabla, preguntas } = this.state;

        return (
            <div className="Container">
                <div className="Card">
                    <button class="card-button" onClick={this.mostrarPreguntas}>Mostrar preguntas</button>
                    {mostrarTabla && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Pregunta</th>
                                    <th>Respuesta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {preguntas.map(pregunta => (
                                    <tr key={pregunta.id}>
                                        <td>{pregunta.pregunta}</td>
                                        <td>{pregunta.respuesta}</td>
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
