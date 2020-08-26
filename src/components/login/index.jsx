import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {userActionsAuth} from "./store/actions";

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
    <div className=" ">
      <h2>Login</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>email</label>
          <input type="text" name="email" value={email} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
          {submitted && !email &&
          <div className=" ">email is required</div>
          }
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
          {submitted && !password &&
          <div className="">Password is required</div>
          }
        </div>
        <div className="form-group">
          <button className=" " >
            {loggingIn && <span className="spinner"></span>}
            Login
          </button>
          <Link to={"/register"}>Register</Link>
          <Link to={"/"}>Back</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
