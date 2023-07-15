import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <header>
        <h1>Phonebook</h1>
      </header>
      <section>
        <Form />
      </section>
      <section>
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </section>
    </div>
  );
};
