import { ContactListItem } from './ContactListItem';

export function ContactList({ filteredContacts, handleDelete }) {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
