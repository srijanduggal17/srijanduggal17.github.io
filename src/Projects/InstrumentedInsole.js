import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function InstrumentedInsole(props) {
	const firstPicStyle = {
		maxHeight: '70vh',
		maxWidth: '100%'
	};

	const secondPicStyle = {
		maxHeight: '80vh',
		maxWidth: '100%'
	};

	return (
		<div>
			<ProjectHeading>Instrumented Insole</ProjectHeading>
			<div className="w-100 container-fluid">
				<div className="row">
					<div className="col-sm-4" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Instrumented Insole/Final Insole.jpg'
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						During my undergrad research at the EPIC lab, one idea that Dr. Young (my PI)
						and another professor, Dr. Mazumdar, were working on was a shoe insole that
						was instrumented with pressure sensors. The idea behind this was to provide
						more detailed information about the pressure distribution at the ground
						contact points, as well as the change in center of pressure over time.
						These two pieces of information could be used for controlling various
						exoskeletons, as they give insight into the user’s state of balance
						in addition to kinematic information such as where the user is in the
						gait cycle. This project started before I joined, and when my partner
						and I picked it up, one prototype had been made. We were tasked with
						making prototypes of various shoe sizes, testing them, and improving
						the manufacturing procedure. 
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						The prior insoles had a small protoboard in them to act like a bus for 
						the ground and power connections of the sensors. This made parts of
						the insole stiff and prone to breaking. We started by removing the
						protoboards, and the initial molds came out as shown on the right, with some
						defects in the upper area of the foot. Additionally, the wiring was a
						bit messy. We had to make molds for various sizes, which my partner
						designed and we manufactured out of HDPE on a CNC Router.
						</p>
					</div>
					<div className="col-sm-3" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Instrumented Insole/Initial Molds.png'
							style={firstPicStyle}/>
					</div>
					<div className="col-sm-4" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Instrumented Insole/Insole Molds.png'
							style={firstPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-3" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Instrumented Insole/Rewiring Idea.png'
							style={firstPicStyle}/>
					</div>
					<div className="col-sm-3" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Instrumented Insole/Labview VI.png'
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						Our next step was improving the wiring, so we daisy chained the
						ground and power connections for each pair of sensors. This came
						out less messy which we liked. Finally, we worked on testing.
						I wrote a LabView VI to read and export the sensor data to a file
						so we could analyze it in MATLAB.
						</p>
					</div>
				</div>
				<FullRowImage src='project-assets/Instrumented Insole/Walking 2 Raw vs Time.png' />
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Instrumented Insole/Walking 2 COP vs Time.png'
							style={secondPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						After validating that the sensors themselves worked and computing the
						center of pressure, a next step was to estimate the ground reaction
						force from the sensors. We started brainstorming how to use some
						simple machine learning methods to do so and started planning out
						potential experimental protocols. This was never formalized and
						completed before the end of the semester, and the following semester
						I was working on a different project.
						</p>
					</div>
				</div>
				<FullRowText>
				This was a great experience for me – one skill that I picked up was reading
				electrical datasheets and understanding what was going on and what information
				I needed to look for. I also got exposure to modifying manufacturing
				techniques to reduce defects and make the process easier for whoever is
				manufacturing it. Finally, it was good to practice with LabView and MATLAB.
				Overall a really neat project!
				</FullRowText>
			</div>
		</div>
	)
}