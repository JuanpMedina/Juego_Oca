import React from 'react';
import './nombre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faDice } from '@fortawesome/free-solid-svg-icons';

function pin() {
    return (
        <div>
            <div className="icon-container">
                <FontAwesomeIcon icon={faGamepad} className='iconos' />
                <FontAwesomeIcon icon={faDice} className='iconos' />
            </div>
            <br />
            <br />
            <h1 className='tit'>Juego de la Oca</h1>
            <div className="card">
                <div className="card-body">
                    <input type="text" className="form-control" placeholder="Ingrese su nombre" />
                    <a className="btn" href='/participantes'>
                        INGRESAR
                    </a>
                </div>
            </div>
        </div>
    );
}

export default pin;
