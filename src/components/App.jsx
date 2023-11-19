import { ContactList } from './ContactList';
import ContactForm  from './ContactForm';
import { Filter } from './Filter';
import css from "./Styles.module.css";
import React, { useState, useEffect } from 'react';



export const App = () => {

  const [contacts, setContacts] = useState(() => {
    const parsedContacts =
      JSON.parse(localStorage.getItem('contact')) ?? [];
    return parsedContacts;
  });

  const [filter, setFilter] = useState('');
  

  
  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contact', stringifiedContacts);
  }, [contacts])
    
 
  const onFormSubmitHandler = contact => { 
    const hasDuplicates = contacts.some(item => item.name === contact.name);

    if (hasDuplicates) {
      alert(`${contact.name} is already in the contacts list`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const onChangeFilter = event => {
    setFilter(event.target.value);
  };

 const filterList = () => {
    const normilizedFilter = filter.toLowerCase();
    const filterList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
    return filterList;

  };

  const onDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
 

  
    return (
      <div className={css.main}>
        <>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={onFormSubmitHandler}></ContactForm>
          <h2>Contacts:</h2>
<Filter value={filter} onChange={onChangeFilter} />
          <ContactList contacts={filterList()} onDelete={onDelete} />
        
        </>
      </div>
    );
  
}