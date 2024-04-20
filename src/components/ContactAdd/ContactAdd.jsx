import React, { Component } from 'react';
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import css from "./ContactAdd.module.css";

const INITIAL_USER = {
    name: "",
    number: "",
};


class ContactAdd extends Component {
user = { ...INITIAL_USER };

handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();

    this.props.onSubmit({ id, name, number });
    form.reset();
};


render() {
    return (
    <div className={css.primary}>
        <form onSubmit={this.handleSubmit} className={css.form}>
        <div className={css.container}>
        <label htmlFor="user-name" className={css.label}>Name</label>
            <div>
            <input
            className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required/>    
            </div>
        </div>

    <div className={css.container}>
    <label  htmlFor="number" className={css.label}>Number</label>
        <div>
        <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
    />
    </div>
    </div>
    <button  type="submit" className={css.button}>Add contact</button>
    </form>
    </div>
);
}
};

ContactAdd.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default ContactAdd;