import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleDelete = userId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(user => user.id !== userId),
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    const isNameAlreadyExists = name => {
      return this.state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    };

    if (isNameAlreadyExists(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    console.log(`Signed up as: ${this.state.name}`);

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      };
    });
  };

  render() {
    const { contacts, name, number, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="container">
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={name}
              onChange={this.handleInputChange}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              placeholder="Enter a name"
              required
            />
          </label>
          <label>Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter a number"
            required
          />
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleInputChange}
            placeholder="Search..."
          />
        </label>
        <ul>
          {filteredContacts.map(contact => (
            <div
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'baseline',
              }}
              key={contact.id}
            >
              <li>
                {contact.name}: {contact.number}
              </li>
              <button
                className="buttonDelete"
                onClick={() => this.handleDelete(contact.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
