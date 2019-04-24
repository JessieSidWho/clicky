import React from 'react';

const Navbar = (props) => (
    <nav className="navbar navbar-dark bg-dark text-white">
  <a className="navbar-brand" href="/" >Clicky-Game</a>
  <div className="ml-5" id="navbarNav">
    <ul className="navbar-nav mr-5 ml-5">
      <li className="nav-item">
        <a className="nav-link text-white mr-5" href="/" >Score: <span>{props.score}</span></a>
      </li>
      <li className="nav-item mr-5">
        <a className="nav-link text-white" href="/" >Highscore:   <span>{props.highscore}</span></a>
      </li>
      
    </ul>
  </div>
</nav>
)

export default Navbar;