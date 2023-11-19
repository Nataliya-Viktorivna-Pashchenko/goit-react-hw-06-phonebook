import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from "./Styles.module.css"

const ContactForm = ({onSubmit}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 

  const onInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'number': {
        setNumber(value);
        return;
      } 
        default:
        return;
    }
    }
   
  

  const onFormSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

      onSubmit(contact);
      resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

    return (
        
        <form className={css.form} onSubmit={onFormSubmit}>
        <label>
          Name
        </label>

            <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={onInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />

        <label>
          Number
        </label>

            <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={onInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </form>
    );
  };
export default ContactForm;

