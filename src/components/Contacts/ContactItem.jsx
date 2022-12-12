import { useDeleteContactsMutation } from 'redux/api';

import { Item, ButtonDelete } from '../Form/Form.styled';

const ContactItem = ({ id, name, number }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactsMutation();

  return (
    <>
      <Item>
        {`${name} : tel - ${number}`}

        <ButtonDelete onClick={() => deleteContacts(id)} type="button">
          {isLoading ? 'Deleting...' : 'Delete'}
        </ButtonDelete>
      </Item>
    </>
  );
};

export default ContactItem;
