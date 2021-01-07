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
		width: '80%'
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
					<div className="col-sm-3 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Stepper Attachment.JPG' style={firstPicStyle}/>
					</div>
					<div className="col-sm-3 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Stepper Attachment 2.JPG' style={firstPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<iframe className="pt-4 d-block mx-auto"
								src='https://www.youtube.com/embed/_1AaNBvEM7Q'
								style={fourthPicStyle}/>
					</div>
				</div>
				<FullRowText>
				We started by screwing a hefty stepper motor with a threaded rod onto a wooden base. Then we used the corresponding nut for the linear actuator to mount a wooden stand. This stand was made by drilling a hole for the threaded rod into some pine, and scoring it to attach a piece of lauan wood with bolt holes for the nut. 
				</FullRowText>
				<div className="row">
					<div className="col-sm-4 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/End Effector T.JPG' style={firstPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/End Effector T with Motor.JPG' style={firstPicStyle}/>
					</div>
					<div className="col-sm-3 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/End Effector T Wiring.JPG' style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				Then we worked on the end effector a bit. We wanted to use a servo motor at the end, so we cut a slot for it into a PVC tee that we could pass the wires through.
				</FullRowText>
				<div className="row ml-auto">
					<div className="col-sm-4 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Vertical Axis Attachment v1.JPG' style={firstPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Vertical Axis.JPG' style={firstPicStyle}/>
					</div>
					<div className="col-sm-4 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Vertical Axis Spool Motor.JPG' style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				Next we worked on our vertical axis. We thought to have a pulley-type system bring this PVC tube up and down, as it could slide on another smaller PVC tube to maintain vertical alignment. Once we validated that our general idea worked, we started designing and building an actuation method. We had a stepper motor pull the belt and had a continuous rotation servo spool up the excess.
				</FullRowText>
				<div className="row">
					<div className="col-sm-3 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Vertical Axis Spool Attachment.JPG' style={firstPicStyle}/>
					</div>
					<div className="col-sm-3 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Vertical Axis Spool and Stepper.JPG' style={firstPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<iframe className="pt-4 d-block mx-auto"
								src='https://www.youtube.com/embed/nPHlaa02rLk'
								style={fourthPicStyle}/>
					</div>
				</div>
				<FullRowText>
				Once that was verified, we started working on the carriage and rails for motion along the radial axis. We decided to make the rails out of PVC tubing, as it was pretty light and seemed sturdy enough. We laser cut and built some mounts for the tubing out of wood. Then we attached a pulley at the other end of the PVC. The idea was to have a stepper motor drive a belt around the pulley, and have part of the belt connected to the vertical axis carriage.
				</FullRowText>
				<div className="row">
					<div className="col-sm-4 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Radial Axis PVC Holder.JPG' style={firstPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Radial Axis End Pulley.JPG' style={firstPicStyle}/>
					</div>
					<div className="col-sm-4 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Radial Axis Shu Working.JPG' style={firstPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-5 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Radial Axis Idea.JPG' style={firstPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<iframe className="pt-4 d-block mx-auto"
								src='https://www.youtube.com/embed/7FDt0CleR14'
								style={fourthPicStyle}/>
					</div>
				</div>
				<FullRowText>
				Next we added some supports to our vertical axis carriage to ensure it would slide in a straight line and not just flop around.
				</FullRowText>
				<div className="row">
					<div className="col-sm-3 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Vertical Axis Holder with Supports.JPG' style={firstPicStyle}/>
					</div>
					<div className="col-sm-3 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block" src='project-assets/Robot Arm/Radial Axis Overview.JPG' style={firstPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<iframe className="pt-4 d-block mx-auto"
								src='https://www.youtube.com/embed/a4SEc4N7se0'
								style={fourthPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Robot Arm/Electronics Breadboarding.JPG' style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						Finally we assembled everything together and tested it! We tried a variety of 3D printed “tools” at the end effector as shown in the videos.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<iframe className="pt-4 d-block mx-auto"
								src='https://www.youtube.com/embed/0olJFrZW1fQ'
								style={thirdPicStyle}/>
					</div>
				</div>
				<FullRowText>
				All in all, these were some of the shaping moments early on in my career as an engineer. I learned a lot and I loved working with wood and electronics to help make our ideas come true. Without Science Olympiad, I don’t know if I ever would have decided to pursue engineering.
				</FullRowText>
			</div>
		</div>
	)
}