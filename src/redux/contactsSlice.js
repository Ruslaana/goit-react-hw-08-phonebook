import { createSlice } from '@reduxjs/toolkit';
import { 
  getAllContacts, 
  addContact, 
  delContact 
} from './thunk';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(delContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        action => [getAllContacts.pending, addContact.pending, delContact.pending].includes(action.type),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => [getAllContacts.rejected, addContact.rejected, delContact.rejected].includes(action.type),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
