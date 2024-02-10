import { List } from './ContactsList.styled';
import { useGetContactsQuery } from 'store/redux/contact/contact';
import { useSelector } from 'react-redux';
import { selectFilter } from 'store/redux/filter/filter-slice';
import { filteredContacts } from 'helpers';
import { ListItemContact } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const { data: contacts, isLoading, isError } = useGetContactsQuery();
  const filter = useSelector(selectFilter);

  const phoneContacts = filteredContacts(contacts, filter);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }
  return (
    <div>
      <h1>Список контактів</h1>
      <List>
        {phoneContacts.map(contacts => (
          <ListItemContact key={contacts.id} {...contacts} />
        ))}
      </List>
    </div>
  );
};
