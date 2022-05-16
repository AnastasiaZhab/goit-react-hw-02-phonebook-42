import { Component } from "react";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";

class Phonebook extends Component {
    state = {
        contacts: [],
        name: ''
    }

    handleCreateContact = (contact) => {
        this.setState((prevState) => ({
            contacts: [...prevState.contacts, contact]
        })
        )
    };

    render() {
        return (
            <>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.handleCreateContact} />

                <h2>Contacts</h2>
                <ContactList list={this.state.contacts}/>
            </>
            
        )
    }
};

export default Phonebook;