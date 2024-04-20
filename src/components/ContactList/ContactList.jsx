import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";


const ContactList =   ({ contacts, filter, deleteFunction }) => {
    return(
<div className={css.primary}>
    <ul className={css.list}>
        {contacts
        .filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map((contact) => {
            return(
            <Contact key = {contact.id}>
                {contact.name} : {contact.number} {""}
                <button 
                id = {contact.id} 
                onClick={deleteFunction} 
                className={css.button}>
                Delete
                </button>
            </Contact>
        )
        }
        )}
    </ul>
</div>
);
};


ContactList.propTypes = {
    contact: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    deleteFunction: PropTypes.func.isRequired,
};

export default ContactList;