import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/Loader';

import { selectAuthentificated, selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { addContact, deleteContact, refreshUserThunk } from 'redux/operations';

const Contacts = () => {
  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(refreshUserThunk());
  }, [authentificated, dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact with name ${name} already exists!`);

    dispatch(addContact({ name, number }));
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input name="contactName" type="text" required />
        </label>
        <br />
        <label>
          <p>Number:</p>
          <input name="contactNumber" type="text" required />
        </label>
        <br />
        <button htmlType="submit">Add contact</button>
      </form>

      {isLoading && <Loader />}
      {error && <p>Oops, some error occured... {error}</p>}
      <ul>
        {showContacts &&
          contacts.map(contact => {
            return (
              <li key={contact.id}>
                <h3>Name: {contact.name}</h3>
                <p>Number: {contact.number}</p>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  type="button"
                  aria-label="Delete contact"
                >
                  &times;
                </button>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Contacts;