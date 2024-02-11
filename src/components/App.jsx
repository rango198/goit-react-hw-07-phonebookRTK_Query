import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './filter/filter';

import { ContactsForm } from './Form/ContactsForm';
import {
  BackgroundColor,
  ContactsWrap,
  Container,
  PhoneWrap,
} from './App.styled';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const [contact, setContact] = useState('');

  const addContact = data => {
    setContact(data);
  };

  return (
    <BackgroundColor>
      <Container>
        <PhoneWrap>
          <h1>Phonebook</h1>
          <ContactsForm addContact={addContact} />
        </PhoneWrap>
        <ContactsWrap>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList contact={contact} />
        </ContactsWrap>
        <Toaster />
      </Container>
    </BackgroundColor>
  );
};
