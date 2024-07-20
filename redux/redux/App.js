import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Contact List</h1>
        <AddContactForm />
        <ContactList />
      </div>
    </Provider>
  );
}

export default App;
