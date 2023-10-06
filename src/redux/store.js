import { configureStore } from '@reduxjs/toolkit';
import { phonebookSlice } from './phonebook.slice';

const phonebookReducer = phonebookSlice.reducer;

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});

export default store;
