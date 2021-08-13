import React from 'react';
import ClearButton from './components/ClearButton';
import SelectedWord from './components/SelectedWord';
import LettersGrid from './components/LettersGrid';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="app-grid">
        <ClearButton />
        <LettersGrid />
        <SelectedWord />
      </div>
    </div>
  );
};

export default App;
