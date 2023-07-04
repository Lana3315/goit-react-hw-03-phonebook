import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
   
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addContact } = this.props;

    addContact({ ...this.state });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}

          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" disabled={!name || !number}>
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;