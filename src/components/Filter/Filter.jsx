import { useDispatch, useSelector } from 'react-redux';
// import { filterContact } from 'redux/actions';
import { updateFilter } from 'redux/contacts/contactsSlice';
import { Input } from 'components/Filter/Filter.styled';

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
