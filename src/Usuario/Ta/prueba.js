import { useState } from 'react';
import { questions } from './questions';
import './App.css';

function App() {
    const [players, setPlayers] = useState([0, 0]);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [isGameFinished, setIsGameFinished] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [showScores, setShowScores] = useState(false);
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["Opción 1", "Opción 2", "Opción 3"]);

    const handleGameFinished = () => {
        setIsGameFinished(true);
    };

    const handleShowScores = () => {
        setShowScores(true);
    };

    const handleRollDice = () => {
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;
        setDice1(d1);
        setDice2(d2);

        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        setQuestion(randomQuestion.question);
        setOptions(randomQuestion.options);
    };

    const handleAnswerQuestion = (answer) => {
        const currentQuestion = questions.find((q) => q.question === question);
        const correctAnswer = currentQuestion.answer;

        if (answer === correctAnswer) {
            movePlayer(currentPlayer, dice1 + dice2);
            const newPlayers = [...players];
            newPlayers[0] += 2;
            newPlayers[1] += 2;
            setPlayers(newPlayers);
        } else {
            movePlayer(currentPlayer, -2); // Se resta 2 casillas en caso de respuesta incorrecta
            setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
        }

        setQuestion("");
    };

    const movePlayer = (player, steps) => {
        const newPlayers = [...players];
        newPlayers[player] += steps;

        if (newPlayers[player] >= 63) {
            setPlayers(newPlayers);
            setCurrentPlayer(-1);
            setQuestion("");
            setGameFinished(true);
            return;
        }
        setPlayers(newPlayers);
        setCurrentPlayer(player === 0 ? 1 : 0);
    };

    const renderSquare = (number, position) => {
        const isPlayer1Here = players[0] === position;
        const isPlayer2Here = players[1] === position;

        return (
            <div
                className={`square ${isPlayer1Here ? 'player1' : ''} ${isPlayer2Here ? 'player2' : ''}`}
                key={number}
            >
                {number}
            </div>
        );
    };

    return (
        <div>
            <h1 className='titulito'>Juego de la Oca</h1>
            <div className="container">
                <div className="board">
                    {Array.from({ length: 63 }, (_, i) => i + 1).map((number) => {
                        return renderSquare(number, number);
                    })}
                </div>
                <div className="dice-container">
                    {!isGameFinished ? (
                        <>
                            <button className="dice" onClick={handleRollDice}>
                                Tirar Dados
                            </button>
                            <div className="dice-result">
                                <p>Dado 1: {dice1}</p>
                                <p>Dado 2: {dice2}</p>
                            </div>
                            {question && (
                                <div className="question-container">
                                    <h3>Pregunta:</h3>
                                    <p>{question}</p>
                                    <h3>Opciones:</h3>
                                    <ul>
                                        {options.map((option, index) => (
                                            <li key={index} onClick={() => handleAnswerQuestion(option)}>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {currentPlayer === -1 && (
                                <p className="winner">
                                    Felicidades! Jugador {players.indexOf(Math.max(...players)) + 1}, has ganado!
                                </p>
                            )}
                        </>
                    ) : (
                        <>
                            {!gameFinished ? (
                                <button className="finish-game" onClick={handleGameFinished}>
                                    Finalizar Juego
                                </button>
                            ) : (
                                <div className="scores-container">
                                    <h2>Fin del Juego</h2>
                                    <button className="show-scores" onClick={handleShowScores}>
                                        Mostrar Marcador
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                    {showScores && (
                        <div className="scores-container">
                            <h2>Marcador</h2>
                            <p>Jugador 1: {players[0]} puntos</p>
                            <p>Jugador 2: {players[1]} puntos</p>
                            <p>
                                Mejor Jugador: Jugador {players.indexOf(Math.max(...players)) + 1} con{' '}
                                {Math.max(...players)} puntos
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
