import React from 'react';
import { data } from '../app/data';
import Letter from './Letter';

const LettersGrid: React.FC = () => {
  return (
    <div className="letters-grid">
      {data.map((letter) => (
        <Letter key={letter} letter={letter} />
      ))}
    </div>
  );
};

export default LettersGrid;
