import React from 'react';
import './homepage.css';

function home() {
    return (
        <div className='home'>
            <h1>Juego de la Oca</h1>
            <div className="Card">
                <div>
                    <a className='boton' href='/pin'>Usuario</a>
                    <a className='boton2' href='/home'>Gestor de partida</a>
                </div>
            </div>
        </div>
    );
}

export default home;
