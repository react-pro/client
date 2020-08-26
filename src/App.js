import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Quiz from './components/quiz/Quiz';
import Resume from './components/resume/Resume';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/quiz" component={Quiz} />
				<Route exact path="/resume" component={Resume} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
