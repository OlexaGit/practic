import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
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
