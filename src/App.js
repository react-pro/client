import React, {useEffect} from 'react';
import './App.css';
import { RegisterPage } from "./components/registration";
import {Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { history } from './components/_helpers/history'
import { HomePage } from "./components/home";
import {useDispatch, useSelector} from "react-redux";
import {alertActions} from "./components/alerts/actions";
import LoginPage from "./components/login";
import Header from './shared/header/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Alert from "react-bootstrap/Alert";

const App = () => {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, );

  return (
    <div className="App">
      <Router history={history} forceRefresh={true}>
        <Header />
        {alert.message &&
          <Alert variant='info' style={{ textAlign: "center"}}>
            {alert.message}
          </Alert>
        }
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/quiz' component={Quiz} />
          <Route exact path='/resume' component={Resume} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
