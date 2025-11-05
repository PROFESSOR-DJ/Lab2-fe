import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Multiplication Master</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/learn">Learn Tables</Link></li>
          <li><Link to="/practice">Practice</Link></li>
          <li><Link to="/game">Timed Game</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;