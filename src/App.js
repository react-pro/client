import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
