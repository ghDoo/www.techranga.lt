import React from 'react';

import Logo from './Logo';
import Nav from './Nav';
import Languages from './Languages';

const Header = () => {

  return (
    <div className="header">
      <Logo />
      <Nav />
      <Languages />
    </div>
  );
};

export default Header;