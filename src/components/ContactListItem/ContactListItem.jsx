import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css'
export const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.contactitem} >
      <p>
        {name}:<span>{number}</span>
      </p>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;