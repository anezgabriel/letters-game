import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { resetWord } from '../features/word/wordSlice';

const ClearButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetWord());
  };

  return (
    <div className="clear-button-wrapper">
      <button onClick={handleClick}>
        <span>Clear Word</span>
        <span className="close-icon">
          <span className="bar1"></span>
          <span className="bar2"></span>
        </span>
      </button>
    </div>
  );
};

export default ClearButton;
