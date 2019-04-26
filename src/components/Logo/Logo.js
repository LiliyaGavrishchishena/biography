import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

const Logo = () => (
  <Link to={routes.MAIN}>
    <div>Prof.Dr.Jochem Muller</div>
  </Link>
);

export default Logo;
