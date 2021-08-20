import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { dictionary } from '../app/data';
import { useAppSelector } from '../app/hooks';
import { selectWord } from '../features/word/wordSlice';

const SelectedWord: React.FC = () => {
  const word = useAppSelector(selectWord);
  const [wordFound, setWordFound] = useState(false);
  const classes = `selected-word ${wordFound ? 'found' : ''}`;

  useEffect(() => {
    const match = dictionary.find((element) => element === word.toLowerCase());
    if (match) {
      setWordFound(true);
      toast('This word was found in the dictionary');
    } else {
      setWordFound(false);
    }
  }, [word]);

  return <input type="text" readOnly={true} value={word} className={classes} />;
};

export default SelectedWord;
