import React from 'react';
import './pin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faDice } from '@fortawesome/free-solid-svg-icons';

function Pin() {
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
                    <input type="text" className="form-control" placeholder="Pin de juego" />
                    <a className="btn" href='/nombre'>
                        INGRESAR
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Pin;
