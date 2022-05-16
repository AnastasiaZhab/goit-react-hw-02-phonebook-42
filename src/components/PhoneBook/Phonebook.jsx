import { Component } from "react";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";

class Phonebook extends Component {
    state = {
        contacts: [],
        filter: ''
    }

    handleCreateContact = (contact) => {
        this.setState((prevState) => ({
            contacts: [...prevState.contacts, contact]
        })
        )
    };

    handleChangeFilter = (e) => this.setState({ filter: e.target.value });

    handleFilterContacts = () => {
        const { contacts, filter } = this.state;
        return (
            contacts.filter(contact => contact.name.includes(filter))
        )
    }

    render() {
        return (
            <>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.handleCreateContact} />

                <h2>Contacts</h2>
                <Filter onChange={this.handleChangeFilter} value={this.state.filter}/>
                <ContactList list={this.handleFilterContacts()}/>
            </>
            
        )
    }
};

export default Phonebook;