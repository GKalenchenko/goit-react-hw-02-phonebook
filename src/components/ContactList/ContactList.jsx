import PropTypes from 'prop-types';

export const ContactList = ({ contacts, children }) => {
  return (
    <>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.map(({ tel, name, id }) => (
          <li key={id}>
            {name}: {tel}
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      tel: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
