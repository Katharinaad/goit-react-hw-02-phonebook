import { ContactListItem } from './ContactListItem';
import css from './ContactList.module.css';

export function ContactList({ filteredContacts, handleDelete }) {
  return (
    <ul className={css.contactList}>
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
