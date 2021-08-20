import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { findSibling, getSiblings, validateCell } from '../app/helpers';
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
  const [isClickeable, setIsClickeable] = useState(false);
  let classes = 'letter';

  if (isClicked) {
    classes += ' selected';
  }

  if (isClickeable) {
    classes += ' sibling';
  }

  const handleClick = () => {
    const isValid = validateCell(index, indexes[indexes.length - 1]);

    if (isValid) {
      dispatch(addLetter({ letter, index }));
    } else {
      toast('You can only click an adjacent cell');
    }
  };

  useEffect(() => {
    const found = indexes.findIndex((el) => el === index);
    if (found !== -1) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [indexes, index]);

  useEffect(() => {
    const lastIndex = indexes[indexes.length - 1];
    if (lastIndex || lastIndex === 0) {
      const siblings = getSiblings(lastIndex);
      const isSibling = findSibling(index, siblings);
      isSibling ? setIsClickeable(true) : setIsClickeable(false);
    } else {
      setIsClickeable(false);
    }
  }, [indexes, index]);

  return (
    <button onClick={handleClick} className={classes}>
      {letter}
    </button>
  );
};

export default Letter;
