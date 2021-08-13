import React from 'react';
import { useAppSelector } from '../app/hooks';
import { selectWord } from '../features/word/wordSlice';

const SelectedWord: React.FC = () => {
  const word = useAppSelector(selectWord);

  return (
    <input type="text" readOnly={true} value={word} className="selected-word" />
  );
};

export default SelectedWord;
