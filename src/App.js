import React from 'react';
import './App.css';
import Stars from './Stars.jsx';

function App() {
  const counts = [0, 1, 2, 3, 4, 5, 6, 'text', NaN];
  return (
    <>
      {
        counts.map((count, index) => typeof count === 'number' ? <Stars key={index} count={count}/> : null)
      }
    </>
  )
}

export default App;