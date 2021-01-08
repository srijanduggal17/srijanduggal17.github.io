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
				During my freshman year of college, my friends and I participated in a
				competition hosted by BMW. The goal was to design and prototype an end-effector
				for a robot to pick up automotive parts. We were a team of five and we started
				by brainstorming various ideas.
				</FullRowText>
				<div className="row">
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Hackathing/V1 Assembled.JPG'
							style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Hackathing/V2.JPG'
							style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Hackathing/V3.JPG'
							style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				The idea we ended up with involved an adhesive mechanism to grip the part
				and a rack-and-pinion to lower the adhesive onto the part. To rotate the
				rack-and-pinion, we used a stepper motor and driver. It rotated until the
				adhesive contacted something, and this resistance triggered a pushbutton
				which stopped the stepper motor from lowering the effector. Then the device
				raised the effector so that the automobile part would hit some prongs and
				be released. Our device was controlled by an Arduino. My contribution was
				mainly in testing the device and I helped design some 3D printed components.
				</FullRowText>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						In the actual competition, our device kind of stopped working. It was a
						spectacular failure, and we learned a lot of things.
						One big mistake we made was not really checking the electrical
						requirements for all the chips and motors we purchased – this caused us
						to fry some motor drivers along the way. Another big thing was that
						we didn't test enough and weren't prepared: we were up all night working the
						day before the competition. Overall even though we made many mistakes,
						I learned a lot and thought it was a fun experience.
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