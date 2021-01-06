import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function ME2110(props) {
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

	return (
		<div>
			<ProjectHeading>Autonomous Robot for Creative Decisions & Design</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowImage src='project-assets/ME 2110/Final Bot.jpg' />
				<FullRowText>
				This was a team project-based course that involved making an autonomous robot to compete in a game against three other teams. The theme was based on the Apollo missions, so the tasks we had to complete were: remove the moon rocks without moving the lunar module, drop decoy balls into the target zones of other teams, and to place a flag on top of the lunar dome and retreat.
				</FullRowText>
				<div className="row">
					<div className="col-sm-6 d-flex align-items-center" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/ME 2110/Game Components.png' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/ME 2110/Game Layout.png' style={firstPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						I was in a team of three and we had a lot of fun. We were given an NI myRIO, a mechatronics kit, and $100 to build our robot. We started off with a car-based approach using a DC motor with the goal of bringing our robot’s base closer to the dome. We had the car move forward until a limit switch on the front of it hit the dome – then we had a reference position to go off of.
						</p>
					</div>
					<div className="col-md-6" >
						<iframe className="pt-4 mx-auto d-block"
									src='https://www.youtube.com/embed/JA2bR0V3Q0k'
									style={thirdPicStyle}/>
					</div>
				</div>
				<FullRowText>
				Next we used mousetraps held back by a pneumatic release system we designed in order to get rid of the moon rocks.
				</FullRowText>
				<div className="row">
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/ME 2110/Car Underside.JPG' style={firstPicStyle}/>
					</div>
					<div className="col-md-6 mx-auto" >
						<iframe className="pt-4 d-block"
								src='https://www.youtube.com/embed/2vyeWknmdU8'
								style={thirdPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6" >
						<iframe className="pt-4 d-block"
								src='https://www.youtube.com/embed/dpOEPTYuk9w'
								style={thirdPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						To plant the decoy balls into the other zones, we had an adjustable switch protruding out such that it would be triggered by tabs on the spinning dome, and then a solenoid released the balls out of a PVC tube.
						</p>
					</div>
				</div>

				<FullRowImage src='project-assets/Instrumented Insole/Walking 2 Raw vs Time.png' />

				<FullRowText>
				This was a great experience for me – one skill that I picked up from this was being able to read an electrical datasheet and understand what was going on and what information I needed to look for. I also got exposure to how to modify manufacturing techniques to reduce defects and make the process easier for whoever is manufacturing it. Finally, it was good practice for me in LabView and MATLAB. Overall a really neat project!
				</FullRowText>
			</div>
		</div>
	)
}