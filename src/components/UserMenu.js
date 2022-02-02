import { useDispatch, useSelector } from 'react-redux';
import operations from '../redux/login/auth-operations';
import { getUseremail } from '../redux/login/auth-selectors';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUseremail);

  return (
    <div style={styles.container}>
      <span style={styles.name}>{email}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Sign out
      </button>
    </div>
  );
}
