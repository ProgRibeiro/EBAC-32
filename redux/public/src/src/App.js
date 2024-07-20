import React from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';

function App() {
  return (
    <div>
      <h1>Contact List</h1>
      <AddContactForm />
      <ContactList />
    </div>
  );
}

export default App;
