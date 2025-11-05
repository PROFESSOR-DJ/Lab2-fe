import React, { useState, useEffect } from 'react';

const Practice = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = () => {
    const newQuestions = [];
    for (let i = 0; i < 10; i++) {
      const num1 = Math.floor(Math.random() * 12) + 1;
      const num2 = Math.floor(Math.random() * 12) + 1;
      newQuestions.push({
        question: `${num1} × ${num2}`,
        answer: num1 * num2,
        options: [num1 * num2, (num1 * num2) + 1, (num1 * num2) - 1, (num1 * num2) + 2].sort(() => Math.random() - 0.5)
      });
    }
    setQuestions(newQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
  };

  const handleAnswer = (selectedAnswer) => {
    if (answered) return;
    
    setAnswered(true);
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
    } else {
      generateQuestions(); // Restart
    }
  };

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div className="page">
      <h1>Practice Multiplication</h1>
      
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <p>Question {currentQuestion + 1} of {questions.length}</p>
        <p>Score: {score} / {questions.length}</p>
      </div>

      <div style={{ 
        background: '#f9f9f9', 
        padding: '2rem', 
        borderRadius: '10px',
        textAlign: 'center',
        margin: '2rem 0'
      }}>
        <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>
          {questions[currentQuestion].question}
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', margin: '2rem 0' }}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="btn"
              onClick={() => handleAnswer(option)}
              style={{
                background: answered 
                  ? option === questions[currentQuestion].answer 
                    ? '#4CAF50' 
                    : '#f44336'
                  : '#667eea'
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {answered && (
          <div>
            <p>{questions[currentQuestion].answer} is correct!</p>
            <button className="btn" onClick={nextQuestion}>
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Try Again'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practice;