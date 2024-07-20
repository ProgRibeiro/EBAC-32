import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, editContact } from '../redux/actions';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ddd;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  margin-left: 0.5rem;
`;

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeContact(id));
  };

  const handleEdit = (contact) => {
    const name = prompt('Edit name:', contact.name);
    const email = prompt('Edit email:', contact.email);
    const phone = prompt('Edit phone:', contact.phone);
    if (name && email && phone) {
      dispatch(editContact({ ...contact, name, email, phone }));
    }
  };

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <span>{contact.name} - {contact.email} - {contact.phone}</span>
          <div>
            <Button onClick={() => handleEdit(contact)}>Edit</Button>
            <Button onClick={() => handleRemove(contact.id)}>Remove</Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
