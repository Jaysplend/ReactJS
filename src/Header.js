import React from 'react';

function Header() {
  return (
    <header>
      <h1>Welcome to my website!</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        {/* <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Services</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}

export default Header;





