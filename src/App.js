import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import './App.css';
import Header from './Header.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';

function App() {
	return (
		<Router>
			<div>
				<Header />

				{/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/contact">
						<ContactMe />
					</Route>
					<Route path="/">
						<AboutMe />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
