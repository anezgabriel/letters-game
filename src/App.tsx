import React from 'react';
import { Toaster } from 'react-hot-toast';
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
        <Toaster
          toastOptions={{
            style: {
              color: '#fff',
              background: '#555555',
              boxShadow: 'none',
            },
          }}
        />
      </div>
    </div>
  );
};

export default App;
