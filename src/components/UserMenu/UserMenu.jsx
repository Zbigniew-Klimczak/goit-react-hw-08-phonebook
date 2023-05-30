import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/contacts">Contacts</Link>
      <p className={css.email}>mango@mail.com</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;