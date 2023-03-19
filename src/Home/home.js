import React from 'react';
import './home.css';
import oca from '../Img/juego.jpg';

function home() {
    return (
        <div class="home">
            <h1>Juego de la Oca</h1>
            <div className="container">
                <br></br>
                <div className="buttons">
                    <a className='boton' href='/usuarios'>Usuarios</a>
                    <a className='boton' href='/preguntas'>Preguntas</a>
                    <a className='boton' href='/retos'>Retos</a>
                </div>
                <img src={oca} alt="Imagen" className="image" />
            </div>
        </div>
    );
}

export default home;
