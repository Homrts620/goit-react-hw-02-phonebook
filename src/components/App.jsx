import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactAdd from "./ContactAdd/ContactAdd";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from "./App.module.css";


class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
      { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
      { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
      { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

checkContact = (newContact) => {
    const { contacts } = this.state;
    const isInBase = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    return isInBase;
  };

addNewContact = (newContact) => {
  const check = this.checkContact(newContact);
  if (!check) {
    const { contacts } = this.state;
    contacts.push(newContact);
this.setState({ contacts: contacts}); 
  } else {
    alert  (`${newContact.name} is already in contacts`);
  }
};

changeFilterValue = (evt) => {
  this.setState({ filter: evt.target.value });
};

deleteUser = (evt) => {
  const { contacts } = this.state;
  const filtered = contacts.filter((contact) => contact.id !== evt.target.id);
  this.setState({ contacts: filtered });
};

render() {
  return (
    <div className={css.primary}>
<h1 className={css.header}>Phonebook</h1>
<ContactAdd onSubmit = {this.addNewContact} />

<h2 className={css.header}>Contacts</h2>
< Filter changeHandler = {this.changeFilterValue} />
<ContactList 
filter={this.state.filter}
contacts={this.state.contacts}
deleteFunction={this.deleteUser} />

    </div>
  );
}
}

export default App;