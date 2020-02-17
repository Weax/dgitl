import React from 'react';
import PropTypes from 'prop-types';

//File for styling global html tags, don't need module
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
