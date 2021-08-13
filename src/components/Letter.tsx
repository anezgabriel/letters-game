import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addLetter, selectWord } from '../features/word/wordSlice';

interface LetterProps {
  letter: string;
}

const Letter: React.FC<LetterProps> = ({ letter }) => {
  const dispatch = useAppDispatch();
  const word = useAppSelector(selectWord);
  const [isClicked, setIsClicked] = useState(false);
  const classes = `letter ${isClicked ? 'selected' : ''}`;

  const handleClick = (val: string) => {
    dispatch(addLetter(val));
  };

  useEffect(() => {
    if (word.includes(letter) && !isClicked) {
      setIsClicked(true);
    } else if (!word.includes(letter) && isClicked) {
      setIsClicked(false);
    }
  }, [word]);

  return (
    <button onClick={() => handleClick(letter)} className={classes}>
      {letter}
    </button>
  );
};

export default Letter;
