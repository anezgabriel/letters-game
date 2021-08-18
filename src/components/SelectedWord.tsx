import React, { useEffect } from 'react';
import { dictionary } from '../app/data';
import { useAppSelector } from '../app/hooks';
import { selectWord } from '../features/word/wordSlice';

const SelectedWord: React.FC = () => {
  const word = useAppSelector(selectWord);

  useEffect(() => {
    const match = dictionary.find((element) => element === word.toLowerCase());
    if (match) {
      console.log(match, 'found');
    } else {
      console.log('no words were found');
    }
  }, [word]);

  return (
    <input type="text" readOnly={true} value={word} className="selected-word" />
  );
};

export default SelectedWord;
