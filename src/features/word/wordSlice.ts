import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface WordState {
  value: string;
  indexes: number[];
}

const initialState: WordState = {
  value: '',
  indexes: [],
};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    addLetter: (state, action) => {
      state.value += action.payload.letter;
      state.indexes.push(action.payload.index);
    },
    resetWord: (state) => {
      state.value = '';
      state.indexes = [];
    },
  },
});

export const { addLetter, resetWord } = wordSlice.actions;

export const selectWord = (state: RootState) => state.word.value;
export const selectIndexes = (state: RootState) => state.word.indexes;

export default wordSlice.reducer;
