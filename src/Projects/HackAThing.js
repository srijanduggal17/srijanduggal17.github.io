import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function HackAThing(props) {
	const firstPicStyle = {
		maxHeight: '70vh',
		maxWidth: '100%'
	};

	const secondPicStyle = {
		maxHeight: '80vh',
		maxWidth: '100%'
	};

	const thirdPicStyle = {
		height: '80vh',
		width: '100%'
	};

	const fourthPicStyle = {
		height: '70vh',
		width: '90%'
	};

	return (
		<div>
			<ProjectHeading>BMW Hack-A-Thing Competition</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				During my freshman year of college, my friends and I participated in a competition hosted by BMW. The goal was to design and prototype an end-effector for a robot to pick up automotive parts. We were a team of five and we started by brainstorming various ideas.
				</FullRowText>
				<div className="row">
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hackathing/V1 Assembled.JPG' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hackathing/V2.JPG' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hackathing/V3.JPG' style={firstPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						In the actual competition, we made it past the design phase into the finalist round but then our device kind of stopped working. It was a spectacular failure, and we learned a lot of things about testing. One big mistake we made was not really checking the electrical requirements for all the chips and motors we purchased – this caused us to fry some motor drivers along the way. Overall even though we made many mistakes, I learned a lot and thought it was a fun experience.
						</p>
					</div>
					<div className="col-sm-7 mx-auto d-flex align-items-center" >
						<iframe className="pt-4 d-block"
								src='https://www.youtube.com/embed/SSj3Y5P7SvA'
								style={thirdPicStyle}/>
					</div>
				</div>
			</div>
		</div>
	)
}