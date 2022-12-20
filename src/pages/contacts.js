import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactOperations';
import { getFilteredContacts } from 'redux/contacts/contactsSelector';
import { getFilter } from 'redux/filterSelector';
import { getState } from 'redux/contacts/contactsSelector';
import Phonebook from '../components/phonebook/phonebook';
import PhonebookList from '../components/phonebook/phonebookList';
import PhonebookFilter from '../components/phonebook/phonebookFilter';
import Loader from 'components/loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const { isLoading, error } = useSelector(getState);
  const filter = useSelector(getFilter);
  // toggleBGD();
  const bgd = document.querySelector('.login-screen-bgd');
  bgd.style.background =
    'linear-gradient( rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)), url(https://raw.githubusercontent.com/AleksandrVyshnyvetskyi/goit-react-hw-08-phonebook/main/src/components/phonebook/img/background.jpg)';
  bgd.style.backgroundSize = 'cover';
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className="phonebook-title">Phonebook</h1>
      <Phonebook />
      <>
        <h2>Contacts :</h2>
        <PhonebookFilter filter={filter} />
        {isLoading && <Loader />}
        {!isLoading && contacts.length > 0 && (
          <PhonebookList contactsList={contacts} />
        )}
        {error && <p>Oops... Something went wrong...</p>}
      </>
      {isLoading && <Loader />}
    </>
  );
}
