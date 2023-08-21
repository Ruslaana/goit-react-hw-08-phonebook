import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../components/Loader/Loader';

import {
  selectAuthentificated,
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { addContact, deleteContact, fetchAllContacts } from 'redux/operations';
import { Button, Container, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

const Contacts = () => {
  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    if (!authentificated) return;
    dispatch(fetchAllContacts());
  }, [authentificated, dispatch]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact with name ${name} already exists!`);

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <TextField 
            fullWidth 
            label="Name" 
            id="fullWidth"
            onChange={handleChange}
            value={name}
            name="name"
            type="text"
            required
          />
        </label>
        <br />
        <label>
          <p>Number:</p>
          <TextField 
            fullWidth 
            label="Number" 
            id="fullWidth"            
            onChange={handleChange}
            value={number}
            name="number"
            type="text"
            required
          />
        </label>
        <br />
        <Button
          style={{ marginTop: '20px', padding: '10px, 20px' }}
          size="large"
          variant="contained"
          type="submit"
        >
          Add contact
        </Button>
      </form>

      {isLoading && <Loader />}
      {error && <p>Oops, some error occured... {error}</p>}
      <ul style={{ padding: "0", marginTop: "40px"}}>
        {showContacts &&
          contacts.map(contact => {
            return (
              <li 
              style={{ listStyleType: "none", padding: '0'}}
              key={contact.id}>
                <h3>Name: {contact.name}</h3>
                <p>Number: {contact.number}</p>
                <Button
                  onClick={() => handleDeleteContact(contact.id)}
                  type="button"
                  variant="outlined"
                >
                  Delete
                </Button>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default Contacts;
