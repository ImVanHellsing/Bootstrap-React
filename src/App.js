import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Wrapper
import PageWrapper from './components/PageWrapper';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

// import Services from './components/Pages/Services';

class App extends Component {
	render() {
		return (
			<Router>
				<PageWrapper>
					<Route path='/' component={Home} exact={true} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
					{/* <Route path='/services' component={Services} /> */}
				</PageWrapper>
			</Router>
		);
	}
}

export default App;
