import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Menu from '../Menu/Menu';

const Header = () => (
  <div className={styles.Header}>
    <header className="p-3 bg-zinc-800">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
      </a>

          <Menu />



      <div className="text-end">
        <button type="button" className="p-2 border border-xl border-solid rounded-md border-fuchsia-900 text-white mr-2">Login</button>
        <button type="button" className="p-2 border-none bg-green-600  rounded-md text-white">Sign-up</button>
      </div>
    </div>
  </div>
</header>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
