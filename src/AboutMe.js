import { Link } from 'react-router-dom';

export default function AboutMe(props) {
	const pageStyle1 = {
		backgroundColor: '#99B9CC'
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

	const whiteStyle = {
		color: 'white'
	};
	
	return (
		<div className="w-100 container-fluid" style={pageStyle1}>
			<h3 className="pt-3 text-center display-3" style={whiteStyle}>welcome</h3>
			<div className="row">
				<div className="col-sm-5">
					<img className="pt-4 mx-auto d-block" src='Headshot.JPG' style={firstPicStyle}/>
				</div>
				<div className="col text-start fs-5 d-flex mx-auto align-items-center pt-4">
					<p>
						My name is Srijan Duggal. I'm an avid learner and love creating things
						(hardware and software). I want to use my skills and drive to help others
						with my career. I'm a Mechanical Engineer by profession, but my passion
						for learning has led me to explore a variety of additional skillsets.
						<br></br>
						<br></br>
						<p>
						I'm currently finishing the last semester of my Mechanical Engineering
						degree with minor in Robotics at Georgia Tech and looking for internships for Summer 2021. I plan
						to return in Fall 2021 to pursue a Masters in Mechanical Engineering.
						</p>
						<Link to="/projects" style={linkStyle}>Click here to check out some of my cool projects!</Link>
						<br></br>
						<br></br>
						Contact me at <span className="fw-bold">srijanduggal17@gmail.com</span>.
						You can view my resume <a href='Resume.pdf'>here</a>
					</p>
				</div>
			</div>
		</div>
	);
}