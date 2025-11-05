import React, { useState, useEffect } from 'react';

const Game = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [playerName, setPlayerName] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
    return () => clearTimeout(timer);
  }, [gameActive, timeLeft]);

  const startGame = () => {
    setTimeLeft(60);
    setScore(0);
    setGameActive(true);
    generateQuestion();
  };

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 12) + 1;
    const num2 = Math.floor(Math.random() * 12) + 1;
    setCurrentQuestion({
      question: `${num1} × ${num2}`,
      answer: num1 * num2
    });
  };

  const checkAnswer = (userAnswer) => {
    if (userAnswer === currentQuestion.answer) {
      setScore(score + 10);
    }
    generateQuestion();
  };

  const saveScore = async () => {
    const name = playerName || 'Anonymous';
    try {
      await fetch('http://localhost:5000/api/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, score, time: 60 - timeLeft })
      });
      alert('Score saved!');
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };

  if (!gameActive && timeLeft === 60) {
    return (
      <div className="page">
        <h1>Timed Multiplication Game ⏱️</h1>
        <p>Answer as many questions as you can in 60 seconds!</p>
        <button className="btn" onClick={startGame}>Start Game</button>
      </div>
    );
  }

  if (!gameActive && timeLeft === 0) {
    return (
      <div className="page">
        <h1>Game Over! 🏆</h1>
        <p>Your score: {score}</p>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            style={{ padding: '0.5rem', margin: '1rem' }}
          />
          <button className="btn" onClick={saveScore}>Save Score</button>
          <button className="btn" onClick={startGame}>Play Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Timed Game ⏱️</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2rem 0' }}>
        <div>Time: {timeLeft}s</div>
        <div>Score: {score}</div>
      </div>

      {currentQuestion && (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '4rem', margin: '2rem 0' }}>{currentQuestion.question}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[currentQuestion.answer, currentQuestion.answer + 1, currentQuestion.answer - 1, currentQuestion.answer + 2]
              .sort(() => Math.random() - 0.5)
              .map((option, i) => (
                <button key={i} className="btn" onClick={() => checkAnswer(option)}>
                  {option}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;