import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <Link className={css.link} to="/contacts">
        Contacts
      </Link>
      <p className={css.email}>{useAuth().user.email}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
