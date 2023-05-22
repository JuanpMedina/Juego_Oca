import { useState } from 'react';
import { questions } from './questions';
import './App.css';

function App() {
	const [players, setPlayers] = useState([0, 0]);
	const [currentPlayer, setCurrentPlayer] = useState(0);
	const [dice1, setDice1] = useState(1);
	const [dice2, setDice2] = useState(1);
	const [isGameFinished, setIsGameFinished] = useState(false);
	const [usedQuestions, setUsedQuestions] = useState([]);
	const [gameFinished, setGameFinished] = useState(false);
	const [question, setQuestion] = useState("");
	const [options, setOptions] = useState(["Opción 1", "Opción 2", "Opción 3"]);
	const [scorePlayer1, setScorePlayer1] = useState(0);
	const [scorePlayer2, setScorePlayer2] = useState(0);
	const [aciertosPlayer1, setAciertosPlayer1] = useState(0);
	const [aciertosPlayer2, setAciertosPlayer2] = useState(0);
	const [mostrarJuegoFinalizado, setMostrarJuegoFinalizado] = useState(false);

	const handleGameFinished = () => {
		setIsGameFinished(true);
		setUsedQuestions([]);
	};

	const handleRollDice = () => {
		// Generar un nuevo par de dados
		const d1 = Math.floor(Math.random() * 6) + 1;
		const d2 = Math.floor(Math.random() * 6) + 1;
		setDice1(d1);
		setDice2(d2);

		// Seleccionar una pregunta aleatoria que no haya sido utilizada previamente
		let randomQuestion;
		do {
			randomQuestion = questions[Math.floor(Math.random() * questions.length)];
		} while (usedQuestions.includes(randomQuestion));

		// Actualizar la pregunta y opciones en el estado
		setQuestion(randomQuestion.question);
		setOptions(randomQuestion.options);

		// Agregar la pregunta utilizada al arreglo de preguntas utilizadas
		setUsedQuestions([...usedQuestions, randomQuestion]);
	};

	const handleAnswerQuestion = (answer) => {
		const currentQuestion = questions.find((q) => q.question === question);
		const correctAnswer = currentQuestion.answer;

		if (answer === correctAnswer) {
			if (currentPlayer === 0) {
				setScorePlayer1(scorePlayer1 + 2);
				setAciertosPlayer1(aciertosPlayer1 + 1);
			} else {
				setScorePlayer2(scorePlayer2 + 2);
				setAciertosPlayer2(aciertosPlayer2 + 1);
			}
			movePlayer(currentPlayer, dice1 + dice2);
		} else {
			movePlayer(currentPlayer, -2); // Se resta 2 casillas en caso de respuesta incorrecta
			setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
		}
		setUsedQuestions([]);
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

			// Mostrar el ganador y su puntaje
			if (player === 0) {
				alert(`¡Jugador 1 ganó! Puntaje: ${scorePlayer1}`);
			} else {
				alert(`¡Jugador 2 ganó! Puntaje: ${scorePlayer2}`);
			}
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

	const handleClick = () => {
		setMostrarJuegoFinalizado(true);
	};

	return (
		<div>
			<h1 className='titulito'>Juego de la Oca</h1>
			<div className="container">
				<div className="dice-container">
					<button className="dice" onClick={handleRollDice}>
						{dice1}
					</button>
					<button className="dice" onClick={handleRollDice}>
						{dice2}
					</button>
				</div>
				<div className="board">
					{Array.from({ length: 63 }, (_, i) => i + 1).map((number) => {
						return renderSquare(number, number);
					})}
				</div>
				<div className="dice-container">
					<button className="dice" onClick={handleClick}> Aciertos </button>
					<button className="dice" onClick={handleGameFinished}>Terminar Juego</button>
				</div>
			</div>
			<div>
				{isGameFinished && (
					<div className="game-finished">
						<div className="game-finished-alert">
							<h1>Juego Terminado!</h1>
							<h1 className='textscore'>El puntaje del participante 1: {scorePlayer1}</h1>
							<h1 className='textscore'>El puntaje del participante 2: {scorePlayer2}</h1>
						</div>
					</div>
				)}
			</div>
			<div>
				{mostrarJuegoFinalizado && (
					<div className="game-finished">
						<div className="game-finished-alert">
							<h1>Aciertos por persona</h1>
							<h1 className='textscore'>Los aciertos del participante 1: {aciertosPlayer1}</h1>
							<h1 className='textscore'>Los aciertos del participante 2: {aciertosPlayer2}</h1>
						</div>
					</div>
				)}
			</div>
			<div>
				{gameFinished && (
					<div className="game-finished">
						<div className="game-finished-alert">
							<h1>Juego Terminado!</h1>
							<button className='btnmarcador' onClick={() => setIsGameFinished(false)}>Mostrar Marcador</button>
						</div>
					</div>
				)}
			</div>
			<div className="clquestions">
				{question && (
					<div className="question-container">
						<h3 className="question">{question}</h3>
						{options.map((option, index) => (
							<button className='btnpregunta' key={index} onClick={() => handleAnswerQuestion(option)}>
								{option}
							</button>
						))}
					</div>
				)}
				<br></br>
				<br></br>
			</div>
		</div>

	);
}

export default App;