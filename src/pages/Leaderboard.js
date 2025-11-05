import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      const response = await fetch('https://lab2-be.vercel.app/api/leaderboard');
      const data = await response.json();
      setScores(data);
    } catch (error) {
      console.error('Error fetching scores:', error);
    }
  };

  return (
    <div className="page">
      <h1>Leaderboard 🏆</h1>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '2rem 0' }}>
        <thead>
          <tr style={{ background: '#667eea', color: 'white' }}>
            <th style={{ padding: '1rem', textAlign: 'left' }}>Rank</th>
            <th style={{ padding: '1rem', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '1rem', textAlign: 'left' }}>Score</th>
            <th style={{ padding: '1rem', textAlign: 'left' }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>{index + 1}</td>
              <td style={{ padding: '1rem' }}>{score.name}</td>
              <td style={{ padding: '1rem' }}>{score.score}</td>
              <td style={{ padding: '1rem' }}>{score.time}s</td>
            </tr>
          ))}
        </tbody>
      </table>

      {scores.length === 0 && <p>No scores yet. Be the first to play!</p>}
    </div>
  );
};

export default Leaderboard;