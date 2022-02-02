import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContacts,
  deleteContact,
} from '../../redux/phonebook/phone-operations';
import { getVisibleContacts } from '../../redux/phonebook/phone-selectors';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contacts-item">
          <span className="contacts-item-name">{name}:</span>
          <span className="contacts-item-name">{number}</span>
          <button
            type="button"
            className="TodoList__btn"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
