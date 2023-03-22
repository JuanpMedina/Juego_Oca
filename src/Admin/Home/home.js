import React from 'react';
import './home.css';

function home() {
    return (
        <div className='home'>
            <h1>Juego de la Oca</h1>
            <div className="Card">
                <div>
                    <a className='boton' href='/preguntas'>Preguntas</a>
                    <a className='boton2' href='/retos'>Retos</a>
                </div>
            </div>
        </div>
    );
}

export default home;
