import "./App.css";
import { Component } from "react";
// import ContactForm from "./components/ContactForm";
import Phonebook from "./components/Phonebook";
// import Filter from "./components/Filter";
// import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  render() {
    return (
      <div>
        <Phonebook />
      </div>
    );
  }
}

export default App;
