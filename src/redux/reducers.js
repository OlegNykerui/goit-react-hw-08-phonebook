import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './actions';

const filterReducer = createReducer('', {
  [filterContact]: (state, { payload }) => payload,
});

export { filterReducer };
