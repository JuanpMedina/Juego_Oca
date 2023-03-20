import React, { useState } from 'react';
import './retos.css';

function RetosTable() {
    const [showTable, setShowTable] = useState(false);

    const retos = [
        {
            reto: 'Volver al inicio',
        },
        {
            reto: 'Devolverse 5 casillas',
        },
        {
            reto: 'No jugar por 2 rondas',
        },
        {
            reto: 'Te has salvado',
        }
    ];

    const handleClick = () => {
        setShowTable(true);
    };

    return (
        <div className="question-table-container">
            <button onClick={handleClick}>Mostrar Retos</button>
            {showTable && (
                <table className="question-table">
                    <thead>
                        <tr>
                            <th>Retos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {retos.map((q, index) => (
                            <tr key={index}>
                                <td>{q.reto}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default RetosTable;
