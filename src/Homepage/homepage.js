import React from 'react';
import './homepage.css';

function home() {
    return (
        <div className='home'>
            <main>
                <div className="Container">
                    <div className="Card">
                        <div>
                            <a className='boton' href=''>Usuario</a>
                            <a className='boton' href='/home'>Administrador</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default home;
