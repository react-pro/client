import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {userActionsAuth} from "./store/actions";
import Button from "react-bootstrap/Button";

function LoginPage() {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const { email, password } = inputs;
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();


  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (email && password) {
      dispatch(userActionsAuth.login(email, password));
    }
  }

  return (
    <div style={{ width: "35%", margin: "3% auto" }}>
      <h2>Login</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="text" name="email" value={email} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
          {submitted && !email &&
          <div className="text-muted">email is required</div>
          }
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
          {submitted && !password &&
          <div className="text-muted">Password is required</div>
          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary" >
            {loggingIn && <span className="spinner border"> </span>}
            Login
          </button>

          <Link to={"/"}>
            <Button variant="btn">Back</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
