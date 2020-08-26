import React, {useEffect} from 'react';
import './App.css';
import { RegisterPage } from "./components/registration";
import { Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { history } from './components/_helpers/history'
import { HomePage } from "./components/home";
import {useDispatch, useSelector} from "react-redux";
import {alertActions} from "./components/alerts/actions";
import LoginPage from "./components/login";
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import About from './components/about/About';
import Test from './components/test/Test';
import Resume from './components/resume/Resume';

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
      <Header />
      {alert.message &&
      <div>{alert.message}</div>
      }
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/test' component={Test} />
          <Route exact path='/resume' component={Resume} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
