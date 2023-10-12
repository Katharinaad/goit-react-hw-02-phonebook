export function ContactListItem({ contact, handleDelete }) {
  return (
    <>
      <li>
        {contact.name}: {contact.number}
      </li>
      <button className="buttonDelete" onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </>
  );
}
