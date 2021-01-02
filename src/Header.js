import { Link } from 'react-router-dom';

export default function Header(props) {
	const menuStyle = {
		'marginLeft': 'auto'
	};

	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">Srijan Duggal</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav" style={menuStyle}>
						<Link class="nav-link" to="/projects">Projects</Link>
						<Link class="nav-link" to="/">About Me</Link>
						<Link class="nav-link" to="/contact">Contact Me</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}