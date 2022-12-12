import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { useGetContactsQuery } from 'redux/api';

import { List } from '../Form/Form.styled';

const getContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
};

export const ContactsList = () => {
  const filterState = useSelector(state => state.filter);
  const { data, error, isLoading } = useGetContactsQuery();
  console.log(data);

  return (
    <>
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <h2>Loading......</h2>
      ) : data.length > 0 ? (
        <List>
          {getContacts(data, filterState).map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
              ></ContactItem>
            );
          })}
        </List>
      ) : (
        <h2>No contacts yet</h2>
      )}
    </>
  );
};
