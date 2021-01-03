import {
	HashRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import './App.css';
import Header from './Header.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';
import { projectInfo } from './project-data.js';

function App() {
	const pageStyle = {
		minHeight: '100vh'
	};

	return (
		<Router>
			<div style = {pageStyle}>
				<Header />
				<Switch>
					{projectInfo.map(x => {
						return (
							<Route path={`/projects/${x.projectURL}`}>
								{x.projectPage}
							</Route>
						)
					})}

					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/contact">
						<ContactMe />
					</Route>
					<Route exact path="/">
						<AboutMe />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
