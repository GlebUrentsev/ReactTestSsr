import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(): React.ReactElement {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" exact to="/">Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            activeClassName="active"
            to="/posts"
          >
            Posts
          </NavLink>
        </div>
      </div>
</nav>
  );
}
