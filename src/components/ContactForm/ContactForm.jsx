import { Component } from "react";


class Form extends Component {
    state = {
        name: "",
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }
    
     
    render() {
        return(
            <form>
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
                <button type="submit">Add contact</button>
            </form>
        )
    }
};

export default Form;