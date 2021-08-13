import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface WordState {
  value: string;
}

const initialState: WordState = {
  value: '',
};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addLetter: (state, action) => {
      state.value += action.payload;
    },
    resetWord: (state) => {
      state.value = '';
    },
  },
});

export const { addLetter, resetWord } = wordSlice.actions;

export const selectWord = (state: RootState) => state.word.value;

export default wordSlice.reducer;
