import React from 'react';
import './pin.css';

function pin() {
    return (
        <div>
            <h1>Juego de la Oca</h1>
            <div className="card">
                <div className="card-body">
                    <input type="text" className="form-control" placeholder="PIN de juego" />
                    <a className="btn" href='/nombre'>Ingresar</a>
                </div>
            </div>
        </div>
    );
}

export default pin;
