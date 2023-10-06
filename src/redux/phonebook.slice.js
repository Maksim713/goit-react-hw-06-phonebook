import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    removeContactById: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        it => it.id !== action.payload
      );
    },
    setFilterValue: (state, action) => {
      state.contacts.filter = action.payload;
    },
  },
});

export const { addContact, removeContactById, setFilterValue } =
  phonebookSlice.actions;

export const getFilter = state => state.phonebook.contacts.filter;
export const getContacts = state => state.phonebook.contacts.items;
