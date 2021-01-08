import { Link } from 'react-router-dom';

export default function AboutMe(props) {
	const pageStyle1 = {
		backgroundColor: '#99B9CC',
		minHeight: '88vh'
	};
	const firstPicStyle = {
		maxHeight: '70vh',
		maxWidth: '100%'
	};

	const linkStyle = {
		textDecoration: 'none',
		fontWeight: 'bold',
		color: 'black'
	};
	
	return (
		<div className="w-100 container-fluid" style={pageStyle1}>
			<h3 className="pt-3 text-center display-3">welcome</h3>
			<div className="row">
				<div className="col-sm-5">
					<img className="pt-4 mx-auto d-block" src='Headshot.JPG' style={firstPicStyle}/>
				</div>
				<div className="col text-start fs-4 d-flex mx-auto align-items-center pt-4">
					<p>
						My name is Srijan Duggal. I'm an avid learner and my mission is to help people
						through my creations (hardware and software). I'm a Mechanical Engineer by
						profession, but my passion for learning has led me to explore a variety
						of additional skillsets. <Link to="/projects" style={linkStyle}>Check out some of my cool projects!</Link>
						<br></br>
						<br></br>
						Contact me at <span className="fw-bold">srijanduggal17@gmail.com</span>
					</p>
				</div>
			</div>

		</div>
	);
}