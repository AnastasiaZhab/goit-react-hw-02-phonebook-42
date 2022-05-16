import { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";


class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        name: "",
        number: ""
    }

    handleSubmit = e => {
        e.preventDefault();

        const { name, number } = this.state;

        this.props.onSubmit({ id: nanoid(), name, number });
        this.setState({ name: "", number: "" })
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }
    
     
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Name
                <input
                    type="text"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="">Number
                <input
                        type="tel"
                        value={this.state.number}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}

                    />
                    <button type="submit">Add contact</button>
                    </label>
            </form>
        )
    }
};

export default ContactForm;


