import "./App.css";
import { Component } from "react";
import ContactForm from "./components/ContactForm";
// import Filter from "./components/Filter";
// import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {/* <Filter />
        <ContactList /> */}
      </div>
    );
  }
}

export default App;
