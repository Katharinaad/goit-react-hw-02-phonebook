import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  // adding data to the state and getting data from the ContactForm component
  handleSubmit = data => {
    const { contacts } = this.state;
    console.log(data);
    console.log(`Signed up as: ${data.name}`);
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    this.setState({
      contacts: [
        ...contacts,
        { id: nanoid(), name: data.name, number: data.number },
      ],
    });
  };

  // addContact = data => {
  //   const newContact = {
  //     ...data,
  //     id: nanoid(),
  //   };

  //   this.setState(prevState => {
  //     return {
  //       contacts: [...prevState.contacts, newContact],
  //     };
  //   });
  // };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="container">
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.handleSubmit} />

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
