import React, { useState } from 'react';

const AdminCard = ({ onStartGame }) => {
    const [numJugadores, setNumJugadores] = useState(2);
    const [numDados, setNumDados] = useState(1);
    const [duracionPartida, setDuracionPartida] = useState(30);

    const handleIncrement = (field) => {
        if (field === 'jugadores') {
            setNumJugadores(numJugadores + 1);
        } else if (field === 'dados') {
            setNumDados(numDados + 1);
        }
    };

    const handleDecrement = (field) => {
        if (field === 'jugadores' && numJugadores > 2) {
            setNumJugadores(numJugadores - 1);
        } else if (field === 'dados' && numDados > 1) {
            setNumDados(numDados - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar los valores seleccionados al componente principal
        onStartGame(numJugadores, numDados, duracionPartida);
    };

    return (
        <div className="admin-card">
            <h2 className="admin-card__title">Configuración de partida</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-group__label">Número de jugadores:</label>
                    <div className="input-group">
                        <button
                            type="button"
                            className="input-group__btn"
                            onClick={() => handleDecrement('jugadores')}
                        >
                            -
                        </button>
                        <input type="number" value={numJugadores} className="input-group__input" readOnly />
                        <button
                            type="button"
                            className="input-group__btn"
                            onClick={() => handleIncrement('jugadores')}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-group__label">Número de dados:</label>
                    <div className="input-group">
                        <button
                            type="button"
                            className="input-group__btn"
                            onClick={() => handleDecrement('dados')}
                        >
                            -
                        </button>
                        <input type="number" value={numDados} className="input-group__input" readOnly />
                        <button
                            type="button"
                            className="input-group__btn"
                            onClick={() => handleIncrement('dados')}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-group__label">Duración de la partida (minutos):</label>
                    <input
                        type="number"
                        value={duracionPartida}
                        onChange={(e) => setDuracionPartida(parseInt(e.target.value))}
                        min="10"
                        max="60"
                        className="form-group__input"
                    />
                </div>
                <button type="submit" className="admin-card__submit-btn">Iniciar partida</button>
            </form>
        </div>
    );
};

export default AdminCard;
