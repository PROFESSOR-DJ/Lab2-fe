import React, { useState } from 'react';

const Learn = () => {
  const [selectedTable, setSelectedTable] = useState(1);

  return (
    <div className="page">
      <h1>Learn Multiplication Tables</h1>
      
      <div style={{ margin: '2rem 0' }}>
        <label>Select Table: </label>
        <select 
          value={selectedTable} 
          onChange={(e) => setSelectedTable(parseInt(e.target.value))}
          style={{ padding: '0.5rem', margin: '0 1rem' }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
        gap: '1rem',
        margin: '2rem 0'
      }}>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} style={{
            padding: '1rem',
            background: '#f0f0f0',
            borderRadius: '5px',
            textAlign: 'center',
            border: '2px solid #667eea'
          }}>
            <div>{selectedTable} × {i + 1}</div>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              {selectedTable * (i + 1)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: '#e7f3ff', padding: '1rem', borderRadius: '5px' }}>
        <h3>Tip</h3>
        <p>Practice saying the table out loud: "{selectedTable} times 1 is {selectedTable}, {selectedTable} times 2 is {selectedTable * 2}..."</p>
      </div>
    </div>
  );
};

export default Learn;