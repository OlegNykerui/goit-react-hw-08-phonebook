import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { selectFilter, selectAllContacts } from 'redux/contacts/selectors';

import { List } from '../Form/Form.styled';

// const getContacts = () => {
//   const filter = useSelector(selectFilter);
//   const contacts = useSelector(selectAllContacts);
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );

// return contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter.toLowerCase().trim())
// );
// };

export const ContactsList = () => {
  // const filterState = useSelector(state => state.filter);
  // const { data, error, isLoading } = useGetContactsQuery();
  // console.log(data);
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectAllContacts);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <List>
        {visibleContacts.map(({ id, name, number }) => {
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

      {/* <h2>No contacts yet</h2> */}
    </>
  );
};
