import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addLetter, selectIndexes } from '../features/word/wordSlice';

interface LetterProps {
  letter: string;
  index: number;
}

const Letter: React.FC<LetterProps> = ({ letter, index }) => {
  const dispatch = useAppDispatch();
  const indexes = useAppSelector(selectIndexes);
  const [isClicked, setIsClicked] = useState(false);
  const classes = `letter ${isClicked ? 'selected' : ''}`;

  const handleClick = () => {
    dispatch(addLetter({ letter, index }));
  };

  useEffect(() => {
    const found = indexes.findIndex((el) => el === index);
    if (found !== -1) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [indexes, setIsClicked, index]);

  return (
    <button onClick={handleClick} className={classes}>
      {letter}
    </button>
  );
};

export default Letter;
