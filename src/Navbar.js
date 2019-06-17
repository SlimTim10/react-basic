import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="top-nav">
        <button>Create</button>
        <button>Dashboard</button>
        <button>Logout</button>
      </nav>
    );
  }
}

export default Navbar;
