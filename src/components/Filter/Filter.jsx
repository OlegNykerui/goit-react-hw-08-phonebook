import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contacts/contactsSlice';
import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <Input
        onChange={e => dispatch(updateFilter(e.target.value))}
        type="text"
        value={filter}
        name="filter"
        id="filter"
      />
    </div>
  );
};
