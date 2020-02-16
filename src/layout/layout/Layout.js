import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

const Layout = ({ children }) => (
  <>
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;