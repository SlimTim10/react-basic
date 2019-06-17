import React from 'react';
import Navbar from './Navbar';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <p>My first React app</p>
        </header>
        <Navbar />
      </div>
    );
  }
}

export default Header;
