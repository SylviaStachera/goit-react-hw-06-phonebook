import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

import css from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span>{contact.name}</span>
      <span>: {contact.number}</span>{' '}
      <button
        className={css['btn-delete']}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </>
  );
};

export default ContactItem;
