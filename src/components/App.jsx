import { ContactsList } from './Contacts/ContactsList';
import { ContactForm } from './Form/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
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
export default App;
