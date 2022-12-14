import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /contact
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get(
    'https://connections-api.herokuapp.com/contacts'
  );
  return data;
});

// POST @ /contact
export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post(
      'https://connections-api.herokuapp.com/contacts',
      contact
    );
    return data;
  }
);

// DELETE @ /contact/
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`https://connections-api.herokuapp.com/contacts/${id}`);
    return id;
  }
);
