import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  background: #007BFF;
  color: white;
  cursor: pointer;
`;

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, email, phone };
    dispatch(addContact(newContact));
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default AddContactForm;
