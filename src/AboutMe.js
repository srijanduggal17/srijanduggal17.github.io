export default function AboutMe(props) {
	const pageStyle1 = {
		backgroundColor: '#99B9CC'
	};
	
	return (
		<div className="w-100" style={pageStyle1}>
			<h3 className="pt-5 pb-5 text-center">welcome</h3>
			<p className="m-auto text-center w-75 pb-5">
				My name is Srijan Duggal. I'm an avid learner and my mission is to help people
				through my creations (hardware and software). I'm a Mechanical Engineer by
				training, but my passion for learning has led me to proficiency in a variety
				of skillsets. Check out some of my cool projects!
			</p>
		</div>
	);
}