import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function HomePage() {
  return (
    <div className="home">
      <h1>Here you are to find your destiny!</h1>
      <div>
        <Link to="/login">
          <Button variant="outline-info">Login</Button>
        </Link>

        <Link to="/register">
          <Button variant="outline-info">Register</Button>
        </Link>
      </div>
    </div>
  );
}

export { HomePage };
