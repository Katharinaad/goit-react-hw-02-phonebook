import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    console.log(`Signed up as: ${this.state.name}`);

    const newContact = {
      id: nanoid(),
      name,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
        name: '',
      };
    });
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div
        style={{
          maxWidth: '400px',
        }}
      >
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label
            style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '10px',
            }}
          >
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={name}
              onChange={this.handleChange}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              placeholder="Enter a name"
              required
            />
          </label>
          <label style={{}}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter a number"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
