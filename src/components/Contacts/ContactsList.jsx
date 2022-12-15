import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import {
  selectFilter,
  selectAllContacts,
} from '../../redux/contacts/selectors';

import { List } from '../Form/Form.styled';

export const ContactsList = () => {
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
