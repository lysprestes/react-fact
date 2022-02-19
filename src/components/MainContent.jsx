import React from 'react';
import './MainContent.css';
import logo from '../Group.png';

export default function MainContent() {
  return (
    <div>
        <h2>Fun facts about React</h2>
      <div className="middle">
        <ul className="main-itens">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      <div className="middle">
        <img className="side-logo" alt="react logo" src={logo} />
      </div>
    </div>
  )
}
