import React, { useState } from 'react';
import './preguntas.css'; 

function QuestionTable() {
    const [showTable, setShowTable] = useState(false);

    const questions = [
        {
            pregunta: '¿Cuál es la capital de España?',
            respuesta: 'Madrid',
        },
        {
            pregunta: '¿En qué año se descubrió América?',
            respuesta: '1492',
        },
        {
            pregunta: '¿Cuál es el océano más grande?',
            respuesta: 'Pacífico',
        },
        {
            pregunta: '¿Cuál es el resultado de la operación 5 x 7?',
            respuesta: '35',
        },
        {
            pregunta: '¿Cuál es el resultado de la operación 10 / 2?',
            respuesta: '5',
        },{
            pregunta: '¿Qué es Pi, un número racional o irracional?',
            respuesta: 'Pi es irracional',
        },{
            pregunta: '¿Quienes fundaron la marca Apple?',
            respuesta: 'S.Jobs y S.Wozniak',
        },
        {
            pregunta: '¿Qué animal puede correr sobre el agua?',
            respuesta: 'Lagarto basilisco',
        },
        {
            pregunta: '¿Cuántas vertebras forman la columna vertebral humana?',
            respuesta: '33',
        }
    ];

    const handleClick = () => {
        setShowTable(true);
    };

    return (
        <div className="question-table-container">
            <button onClick={handleClick}>Mostrar preguntas</button>
            {showTable && (
                <table className="question-table">
                    <thead>
                        <tr>
                            <th>Pregunta</th>
                            <th>Respuesta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((q, index) => (
                            <tr key={index}>
                                <td>{q.pregunta}</td>
                                <td>{q.respuesta}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default QuestionTable;
