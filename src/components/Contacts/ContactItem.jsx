import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';

import { Item, ButtonDelete } from '../Form/Form.styled';

const ContactItem = ({ id, name, number }) => {
  const { error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  return (
    <>
      {error && <h2>Can't delete task. Server error.</h2>}
      <Item>
        {`${name} : tel - ${number}`}

        <ButtonDelete
          onClick={() => dispatch(deleteContacts(id))}
          type="button"
        >
          {/* {isLoading ? 'Deleting...' : 'Delete'} */} Видалити
        </ButtonDelete>
      </Item>
    </>
  );
};

export default ContactItem;
