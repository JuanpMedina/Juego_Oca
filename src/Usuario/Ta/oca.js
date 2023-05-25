import { useState, useCallback } from 'react';
import { questions } from './questions';
import './App.css';

function App() {
	const [players, setPlayers] = useState([0, 0]);
	const [currentPlayer, setCurrentPlayer] = useState(0);
	const [dice1, setDice1] = useState(0);
	const [dice2, setDice2] = useState(0);
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
	const [rodando, setRodando] = useState(false);
	const [buttonsDisabled, setButtonsDisabled] = useState(false);

	const dices = [
		'dice1.png',
		'dice2.png',
		'dice3.png',
		'dice4.png',
		'dice5.png',
		'dice6.png'
	]

	let jugador = currentPlayer === 0 ? "Jugador 1" : "Jugador 2"

	const handleGameFinished = () => {
		setIsGameFinished(true);
		setUsedQuestions([]);
	};

	const handleRollDice = useCallback(() => {
		setRodando(true);
		// Generar un nuevo par de dados
		const d1 = Math.floor(Math.random() * 5) + 1;
		const d2 = Math.floor(Math.random() * 5) + 1;
		setDice1(d1);
		setDice2(d2);
		setTimeout(() => {
			setRodando(false);
		}, 500);

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

		setButtonsDisabled(false);
	});

	const handleAnswerQuestion = (answer) => {
		const currentQuestion = questions.find((q) => q.question === question);
		const correctAnswer = currentQuestion.answer;
		setButtonsDisabled(true);

		if (answer === correctAnswer) {
			if (currentPlayer === 0) {
				setScorePlayer1(scorePlayer1 + 2);
				setAciertosPlayer1(aciertosPlayer1 + 1);
			} else {
				setScorePlayer2(scorePlayer2 + 2);
				setAciertosPlayer2(aciertosPlayer2 + 1);
			}
			movePlayer(currentPlayer, (dice1 + dice2) + 2);
		} else {
			movePlayer(currentPlayer, -2); // Se resta 2 casillas en caso de respuesta incorrecta
			setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
		}
		jugador = currentPlayer === 0 ? "Jugador 1" : "Jugador 2"


		//setUsedQuestions([]);
		//setQuestion("");
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
			<div>
				<h1 className='titulito'>Juego de la Oca</h1>
				<div className="score-table">
					<table>
						<thead>
							<tr>
								<th>Jugador</th>
								<th>Puntaje</th>
								<th>Aciertos</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Jugador 1</td>
								<td>{scorePlayer1}</td>
								<td>{aciertosPlayer1}</td>
							</tr>
							<tr>
								<td>Jugador 2</td>
								<td>{scorePlayer2}</td>
								<td>{aciertosPlayer2}</td>
							</tr>
						</tbody>
					</table>
					<div className="boton-girar">
						<button onClick={handleGameFinished}>Terminar Juego</button>
					</div>
				</div>
				<div className="player-info">
					<img src={'logo512.png'} alt="Avatar del jugador" />
					<p>{jugador}</p>
				</div>

				<div className="container">
					<div className="lista-dados">
						<img src={dices[dice1]} className={rodando ? 'rotate' : ''} />
						<img src={dices[dice2]} className={rodando ? 'rotate' : ''} />
						<div className="boton-girar">
							<button className="button-roll" onClick={handleRollDice}>LANZAR</button>
						</div>
					</div>
				</div>
				<div className="board">
					{Array.from({ length: 63 }, (_, i) => i + 1).map((number) => {
						return renderSquare(number, number);
					})}
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
			</div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<div className="page-container">
				<div className="clquestions">
					<div className="question-container">
						<h3>{question}</h3>
					</div>
					{question && (
						<div className="options-container">
							<button className='boton-girar' key={0} onClick={() => handleAnswerQuestion(options[0])} disabled={buttonsDisabled}>
								{options[0]}
							</button>
							<button className='boton-girar' key={1} onClick={() => handleAnswerQuestion(options[1])} disabled={buttonsDisabled}>
								{options[1]}
							</button>
							<button className='boton-girar' key={2} onClick={() => handleAnswerQuestion(options[2])} disabled={buttonsDisabled}>
								{options[2]}
							</button>
						</div>
					)}
				</div>
			</div>

		</div>

	);
}

export default App;