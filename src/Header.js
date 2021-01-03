import { Link, NavLink } from 'react-router-dom';
import MyLink from './MyLink.js';

export default function Header(props) {
	// const projectsActive = !!matchPath(props.location.name, "/projects");
	// const aboutActive = !!matchPath(props.location.name, "/");
	// const contactActive = !!matchPath(props.location.name, "/contact");

	// console.log(projectsActive);
	
	const menuStyle = {
		'marginLeft': 'auto'
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand fs-3" href="/">Srijan Duggal</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={ { fontWeight: 'bold' }}>
					<ul className="nav navbar-nav" style={menuStyle}>
						<MyLink to="/projects">Projects</MyLink>
						<MyLink to="/">About Me</MyLink>
						<MyLink to="/contact">Contact Me</MyLink>
					</ul>
				</div>
			</div>
		</nav>
	);
}