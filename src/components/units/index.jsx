import React from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import '../home/home.scss'

function UnitsPage() {

  return (
    <div className={"home"} style={{ width: "60%", margin: "3% auto" }}>
      <h1>What direction you would to explore ? </h1>
      <div>
        <Link to={"/quiz"}>
          <Button variant="outline-primary">Frontend</Button>
        </Link>
        <Link to={"/"}>
          <Button variant="outline-secondary" disabled={"disabled"}>Backend</Button>
        </Link>
      </div>
    </div>
  );
}

export default UnitsPage;
