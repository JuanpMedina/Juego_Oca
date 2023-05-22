import React, { useState } from 'react';
import './styles.css';

function App() {
    const [player1Position, setPlayer1Position] = useState(0);
    const [player2Position, setPlayer2Position] = useState(0);
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [showQuestion, setShowQuestion] = useState(false);
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");

    const questions = [{
        question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest country in the world?",
        options: ["Russia", "Canada", "China", "United States"],
        answer: "Russia"
    },
    {
        question: "What is the name of the currency used in Japan?",
        options: ["Yuan", "Euro", "Pound", "Yen"],
        answer: "Yen"
    },
        // Add more questions here
    ];

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState(1);


    const handleRollDice = () => {
        if (currentPlayer === 1) {
            const newDice1 = Math.floor(Math.random() * 6) + 1;
            const newDice2 = Math.floor(Math.random() * 6) + 1;
            setDice1(newDice1);
            setDice2(newDice2);

            const newPosition = player1Position + newDice1 + newDice2;
            setPlayer1Position(newPosition);

            // Check if player 1 has reached the end
            if (newPosition >= 63) {
                alert('Player 1 wins!');
                setPlayer1Position(0);
            } else {
                const randomIndex = Math.floor(Math.random() * questions.length);
                const randomQuestion = questions[randomIndex];
                setCurrentQuestion(randomQuestion);
                setShowQuestion(true);
                setQuestion(randomQuestion.question);
                setOptions(randomQuestion.options);
                setSelectedOption("");
                setCurrentPlayer(2); // cambiar turno al jugador 2
            }
        }
    };

    const handleRollDice2 = () => {
        if (currentPlayer === 2) {
            const newDice1 = Math.floor(Math.random() * 6) + 1;
            const newDice2 = Math.floor(Math.random() * 6) + 1;
            setDice1(newDice1);
            setDice2(newDice2);

            const newPosition = player2Position + newDice1 + newDice2;
            setPlayer2Position(newPosition);

            // Check if player 2 has reached the end
            if (newPosition >= 63) {
                alert('Player 2 wins!');
                setPlayer2Position(0);
            } else {
                const randomIndex = Math.floor(Math.random() * questions.length);
                const randomQuestion = questions[randomIndex];
                setCurrentQuestion(randomQuestion);
                setShowQuestion(true);
                setQuestion(randomQuestion.question);
                setOptions(randomQuestion.options);
                setSelectedOption("");
                setCurrentPlayer(1); // cambiar turno al jugador 1
            }
        }
    };


    const handleAnswerQuestion = () => {
        if (selectedOption === currentQuestion.answer) {
            alert("Correct!");
            setShowQuestion(false);
        } else {
            alert("Incorrect. Please try again.");
            setSelectedOption("");
            if (currentPlayer === 1) {
                setPlayer1Position(player1Position - dice1 - dice2);
                setCurrentPlayer(2); // cambiar turno al jugador 2
            } else {
                setPlayer2Position(player2Position - dice1 - dice2);
                setCurrentPlayer(1); // cambiar turno al jugador 1
            }
        }
    };


    return (
        <div className="App">
            <h1>Juego de la Oca</h1>
            <div className="board">
                {Array.from({ length: 63 }, (_, i) => (
                    <div key={i + 1} className={`cell ${i + 1 === player1Position ? 'player1' : ''} ${i + 1 === player2Position ? 'player2' : ''}`}>
                        {i + 1}
                    </div>
                ))}
            </div>
            <div className="dice">
                <button onClick={handleRollDice}>Tirar dados (Jugador 1)</button>
                <button onClick={handleRollDice2}>Tirar dados (Jugador 2)</button>
                <div className="dice-values">
                    <div className={`dice-value dice${dice1}`}>{dice1}</div>
                    <div className={`dice-value dice${dice2}`}>{dice2}</div>
                </div>
            </div>
            {showQuestion && (
                <div className="question">
                    <h2>{question}</h2>
                    <div className="options">
                        {options.map(option => (
                            <label key={option}>
                                <input
                                    type="radio"
                                    name="answer"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={e => setSelectedOption(e.target.value)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    <button onClick={handleAnswerQuestion}>Submit</button>
                </div>
            )}

        </div>
    );
}

export default App;
