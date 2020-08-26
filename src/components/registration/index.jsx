import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActionRegister } from './store/actions';

function RegisterPage() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector(state => state.registration.registering);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.name && user.email && user.password) {
      dispatch(userActionRegister.register(user));
    }
  }

  return (
    <div style={{ width: "40%", margin: "3% auto" }}>
      <h2>Register</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} className={'form-control' + (submitted && !user.name ? ' is-invalid' : '')} />
          {submitted && !user.name &&
          <div className="text-muted">Name is required</div>
          }
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
          {submitted && !user.email &&
          <div className="text-muted">Email is required</div>
          }
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
          {submitted && !user.password &&
          <div className="text-muted">Password is required</div>
          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {registering && <span className="spinner"> </span>}
            Register
          </button>
          <Link to={"/"} className="btn">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export { RegisterPage };
