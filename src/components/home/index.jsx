import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className=" ">
      <p>Here you are to find your destiny!</p>
      <p>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export { HomePage };
