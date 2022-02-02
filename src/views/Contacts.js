import { useSelector } from 'react-redux';

import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import { getLoading } from '../redux/phonebook/phone-selectors';

export default function Contacts() {
  const isLoading = useSelector(getLoading);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <div>
        <h2 className="phonebook-title">Phonebook</h2>
        <ContactForm />
      </div>

      <h3 className="phonebook-title">Contacts</h3>
      <Filter />
      <ContactList />
    </div>
  );
}
