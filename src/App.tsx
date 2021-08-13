import React, { useState } from 'react';
import ClearButton from './components/ClearButton';
import SelectedWord from './components/SelectedWord';
import LettersGrid from './components/LettersGrid';
import './App.css';

const App: React.FC = () => {
  const [word, setWord] = useState('hola');

  setTimeout(() => {
    setWord('');
  }, 1000);

  const handleLetterClick = (letter: string) => {
    setWord((previousWord) => previousWord + letter);
  };

  return (
    <div className="app-container">
      <div className="app-grid">
        <ClearButton />
        <LettersGrid handleClick={handleLetterClick} />
        <SelectedWord />
      </div>
    </div>
  );
};

export default App;
