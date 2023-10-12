import css from './ContactListItem.module.css';

export function ContactListItem({ contact, handleDelete }) {
  return (
    <div className={css.contactList}>
      <li>
        {contact.name}: {contact.number}
      </li>
      <button
        className={css.buttonDelete}
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}
