import React from 'react';
import { data } from '../app/data';
import Letter from './Letter';

const LettersGrid: React.FC = () => {
  return (
    <div className="letters-grid">
      {data.map((letter, index) => (
        <Letter key={letter + index} letter={letter} index={index} />
      ))}
    </div>
  );
};

export default LettersGrid;
