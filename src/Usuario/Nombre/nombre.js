import React from 'react';
import './nombre.css';

function nombre() {
    return (
        <div>
            <h1>Juego de la Oca</h1>
            <div className="card">
                <div className="card-body">
                    <input type="text" className="form-control" placeholder="Ingrese su Nombre" />
                    <a className="btn" href='/participantes'>Ingresar</a>
                </div>
            </div>
        </div>
    );
}

export default nombre;
