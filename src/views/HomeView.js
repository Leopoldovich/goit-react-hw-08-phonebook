import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/login/auth-selectors';

const styles = {
  container: {
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  p: {
    fontWeight: 500,
    fontSize: 20,
    textAlign: 'center',
  },
  link: {
    fontWeight: 500,
    fontSize: 20,
    textAlign: 'center',
    paddingRight: '5px',
  },
};

const HomeView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome </h1>
      </div>
      <p style={styles.p}>This is the phone book.</p>
      {isLoggedIn ? (
        <p style={styles.p}>
          <Link to="/contacts" style={styles.link}>
            Your contacts
          </Link>
        </p>
      ) : (
        <p style={styles.p}>
          To use please{' '}
          <Link to="/login" style={styles.link}>
            Sign in
          </Link>
          to your account or{' '}
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </p>
      )}
    </div>
  );
};

export default HomeView;
