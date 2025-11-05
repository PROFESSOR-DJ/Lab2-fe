import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to Multiplication Master!</h1>
      <p>Learn and practice multiplication tables in a fun way!</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
        <div style={{ padding: '1rem', border: '2px solid #667eea', borderRadius: '10px' }}>
          <h3>Learn Tables</h3>
          <p>Interactive multiplication table</p>
          <Link to="/learn" className="btn">Start Learning</Link>
        </div>
        
        <div style={{ padding: '1rem', border: '2px solid #667eea', borderRadius: '10px' }}>
          <h3>Practice</h3>
          <p>Practice with feedback</p>
          <Link to="/practice" className="btn">Practice Now</Link>
        </div>
        
        <div style={{ padding: '1rem', border: '2px solid #667eea', borderRadius: '10px' }}>
          <h3>Timed Game</h3>
          <p>Challenge yourself</p>
          <Link to="/game" className="btn">Play Game</Link>
        </div>
        
        <div style={{ padding: '1rem', border: '2px solid #667eea', borderRadius: '10px' }}>
          <h3>Leaderboard</h3>
          <p>See top scores</p>
          <Link to="/leaderboard" className="btn">View Leaderboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;