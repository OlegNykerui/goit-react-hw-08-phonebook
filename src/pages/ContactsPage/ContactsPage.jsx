import React from 'react';
import { ContactForm } from '../../components/Form/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactsList } from '../../components/Contacts/ContactsList';

const ContactsPage = () => {
  return (
    <div
      style={{
        width: '500px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
        border: '1px dashed orange',
        backgroundColor: '#fffcf9',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>PhoneBook</h1>

      <ContactForm />

      <h2 style={{ textAlign: 'center' }}>Contacts</h2>

      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
