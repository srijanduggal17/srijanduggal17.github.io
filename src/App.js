import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import './App.css';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';

function App() {
	return (
		<Router>
			<div>
				<nav><ul>
					<li><Link to="/projects">Projects</Link></li>
					<li><Link to="/">About Me</Link></li>
					<li><Link to="/contact">Contact Me</Link></li>
				</ul></nav>

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
