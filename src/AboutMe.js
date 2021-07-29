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
					<img alt='headshot' 
						className="pt-4 mx-auto d-block"
						src='Headshot.JPG'
						style={firstPicStyle}/>
				</div>
				<div className="col text-start fs-5 d-flex mx-auto align-items-center pt-4">
					<p>
						My name is Srijan Duggal. I'm an avid learner and love creating things
						(hardware and software). I want to use my skills and my drive to help
						others. I'm a Mechanical Engineer by profession, but my passion for
						learning has led me to explore a variety of additional skillsets.
						<br></br>
						<br></br>
						<Link to="/projects" style={linkStyle}>
							Click here to check out some of my cool projects! </Link>
						You're currently looking one - I designed and developed this
						website from scratch and with the help of Bootstrap. Hope you enjoy it!
						<br></br>
						<br></br>
						Let's get in touch! Contact me at <span className="fw-bold">srijanduggal17@gmail.com</span>.
						See my resume <a href='Resume.pdf'>here</a>.
						<a className="px-2" href='https://github.com/srijanduggal17'>
							<img alt='github logo' width='7%' src='Github Logo.png'/></a>
						<a className="px-2" href='https://www.linkedin.com/in/srijan-duggal-667b1b14b/'>
							<img alt='linkedin logo' width='7%' src='Linkedin Logo.png'/></a>
					</p>
				</div>
			</div>
		</div>
	);
}