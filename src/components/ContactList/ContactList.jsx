import Contact from '../Contact/Contact';
import { selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts } from 'redux/selectors';
import { filteredContacts } from 'utils/ContactListFunc';
import { InfinitySpin } from 'react-loader-spinner';
import { selectIsLoading } from 'redux/selectors';
const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading === true ? (
        <div className={css.spinner}>
          <InfinitySpin color="#3f89ca" />
        </div>
      ) : (
        <ul className={css.list}>
          {filteredContacts(contacts, filter).map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              contact={contact}
            ></Contact>
          ))}
        </ul>
      )}
    </>
  );
};
export default ContactList;
