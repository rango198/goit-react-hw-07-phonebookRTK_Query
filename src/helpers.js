export const filteredContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().trim().includes(normalizedFilter) ||
      phone.trim().includes(normalizedFilter)
  );
  return filteredContacts;
};
