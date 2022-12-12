import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/actions';
import { Input } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <Input
        onChange={e => dispatch(filterContact(e.target.value))}
        type="text"
        value={filter}
        name="filter"
        id="filter"
      />
    </div>
  );
};
