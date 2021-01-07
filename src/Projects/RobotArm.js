import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function RobotArm(props) {
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
			<ProjectHeading>Science Olympiad: Robot Arm</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				Throughout my last two years of high school, I participated in and co-led the Science Olympiad team. This is actually what sparked my interest in studying engineering in college! We had fun building projects for the competition and learning about various tools and technologies. The purpose of this event changed throughout the two years we participated in it.
				</FullRowText>
				<Subheading>2016 Build</Subheading>
				<div className="row">
					<div className="col-md-5" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Robot Arm Skin 2016.JPG' style={secondPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<iframe className="pt-4 d-block mx-auto"
								src='https://www.youtube.com/embed/nmXwpL8YJj4'
								style={fourthPicStyle}/>
					</div>
				</div>
				<FullRowText>
				The base of the robot was a 4x4 piece of wood, and the two arms were PVC. We went with a mixture of a pneumatic and electronic approach to control this. We used syringes with medical tubing for the pneumatics to move the arms. We attached one end of the syringe to a control unit and the other to the joint on the robot. The last joint was controlled by a stepper motor and the claw at the end was controlled by a servo. An Arduino Mega was used to control all the electronics. Our device did not end up doing well, but we thought it was a creative solution and it was a lot of fun to build.
				</FullRowText>
				<div className="row">
					<div className="col d-flex align-items-center" >
						<iframe className="pt-4 d-block mx-auto"
								src='https://www.youtube.com/embed/F90sRTuF-SY'
								style={fourthPicStyle}/>
					</div>
					<div className="col-md-5" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Robot Arm 2016.JPG' style={secondPicStyle}/>
					</div>
				</div>
				<Subheading>2017 Build</Subheading>
				<FullRowText>
				In 2017, the goal was to move various stacks of pennies into a central area to score points in a target-like fashion, where there were rings corresponding to different point values. This year, we build this project really nicely from our point of view. We went with a crane-like design, with one motor rotating the robot, another motor moving a carriage in the radial direction, and another motor moving the end effector vertically.
				</FullRowText>

				<div className="row">
					<div className="col-sm-4 d-flex align-items-center" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Electric Vehicle/EV 2016 breadboard.jpg' style={firstPicStyle}/>
					</div>
					<div className="col-sm-4 d-flex align-items-center" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Electric Vehicle/EV 2016 protoboard.jpg' style={firstPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Electric Vehicle/EV 2016.jpg' style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				This worked but it was not very fast. Our next plan was to create the car ourselves. We used Fusion 360 to design the chassis and laser cut it out of some thin plywood. Then we used Knex (a children’s construction toy) to make the frame, relying on a DC motor to turn a Knex gear. The circuit remained the same as before. This was my first time actually using a DC motor and setting up an Arduino to control it which was really cool!
				</FullRowText>
				<div className="row">
					<div className="col-sm-3 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Electric Vehicle/EV 2016 v2 Underside.JPG' style={secondPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Electric Vehicle/EV 2016 v2 Overall.JPG' style={secondPicStyle}/>
					</div>
					<div className="col-sm-6 d-flex align-items-center" >
						<iframe className="pt-4 d-block"
								src='https://www.youtube.com/embed/UHVh_QjFfiA'
								style={thirdPicStyle}/>
					</div>
				</div>
				<FullRowText>
				The following year, we went with a very similar approach, but we wanted to improve the alignment, so we 3D printed a chassis to keep the front and rear axles properly aligned. Another distinct change to improve the speed was to put a large gear on the motor shaft and attach a small gear onto the axle, such that the gear system would amplify the velocity. This ended up working really well!
				</FullRowText>
				<div className="row mb-4">
					<div className="col-md-6" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Electric Vehicle/EV Chassis.JPG' style={secondPicStyle}/>
					</div>
					<div className="col mx-auto d-flex align-items-center" >
						<iframe className="pt-4 d-block"
								src='https://www.youtube.com/embed/qkPnuEpzoS4'
								style={thirdPicStyle}/>
					</div>
				</div>
			</div>
		</div>
	)
}