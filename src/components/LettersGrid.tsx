import React from 'react';
import { data } from '../app/data';
import Letter from './Letter';

interface LettersGridProps {
  handleClick: (letter: string) => void;
}

const LettersGrid: React.FC<LettersGridProps> = () => {
  return (
    <div className="letters-grid">
      {data.map((letter) => (
        <Letter key={letter} letter={letter} />
      ))}
    </div>
  );
};

export default LettersGrid;
