import React from 'react';
import './Header.css';
import logo from '../logo.svg';
// import '';

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="hero">
          <img className="nav-logo" alt="react logo" src={logo} />
          <h1>ReactFacts</h1>
        </div>
        <h3>React Course - Project 1</h3>
      </nav>
    </header>
  )
}
