import { ContactList } from './ContactList/ContactList';
import ContactForm  from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from "./Styles.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addContact, changeFilter, deleteContact } from 'redux/contacts/contacts.reducer';


export const App = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
 const filter = useSelector(state => state.contactsStore.filter);
 
  const onFormSubmitHandler = contact => { 
    const hasDuplicates = contacts.some(item => item.name === contact.name);

    if (hasDuplicates) {
      alert(`${contact.name} is already in the contacts list`);
      return;
    }
    dispatch(addContact(contact));
  };

  
    const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };
  

 const filterList = () => {
    const normilizedFilter = filter.toLowerCase();
    const filterList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
    return filterList;

  };

  const onDelete = id => {
    dispatch(deleteContact(id));
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