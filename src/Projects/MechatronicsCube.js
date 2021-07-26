import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function MechatronicsCube(props) {
	const firstRowStyle = {
		backgroundColor: 'white'
	};

	const secRowStyle = {
		backgroundColor: 'white'
	};

	const firstPicStyle = {
		maxHeight: '80vh',
		maxWidth: '100%'
	};

	const secondPicStyle = {
		maxHeight: '70vh',
		maxWidth: '100%'
	};

	const thirdPicStyle = {
		maxHeight: '80vh',
		maxWidth: '100%'
	};

	const secRowTextStyle = {
		color: 'black'
	};

	const thirdRowTextStyle = {
		color: 'white'
	};

	const fourthRowTextStyle = {
		color: 'black'
	};

	const fourthPicStyle = {
		height: '80vh',
		width: '100%'
	};

	return (
		<div>
			<ProjectHeading>Reaction Wheel Self-Balancing Cube</ProjectHeading>
			<div className="w-100 container-fluid">
				<div className="row" style={firstRowStyle}>
					<div className="col-sm-5">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Mechatronics Cube/Final Prototype.jpg"
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						This was a final project for a course in Mechatronics. We had
						to use an MSP432 microcontroller for closed loop control of a system.
						My teammate and I were inspired by <a href='https://www.youtube.com/watch?v=hLZ6U71y700'>
						this video</a> to make a self-balancing device. We saw examples of cubes
						online and thought a self-balancing cube would be an achievable project.
						This project gave me practice with modeling of system dynamics, CAD,
						motor/sensor selection based on system dynamics and performance specifications,
						and C++ programming on a microcontroller.
						</p>
					</div>
				</div>
				<FullRowText>
					The operating principle of the cube is that a motor changes the speed of 
					a flywheel. This rotational acceleration results in a reaction moment on the
					frame of the cube. This reaction moment is used to stabilize the cube when
					it is off-balance.
				</FullRowText>
				<Subheading>System Dynamics</Subheading>
				<div className="row" style={secRowStyle}>
					<div className="col text-start fs-5 d-flex align-items-center pt-4"
						style={secRowTextStyle}>
						<p>
						We started by finding the equations of motion describing the system using
						free body diagrams of the frame and the reaction wheel. The system is
						inherently unstable, and is very similar to an inverted pendulum. The equation
						of motion we found is shown below. 
						</p>
					</div>
					<div className="col-sm-8" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Mechatronics Cube/FreeBodyDiagrams.png'
							style={firstPicStyle}/>
					</div>
				</div>
				<FullRowImage src="project-assets/Mechatronics Cube/EquationOfMotion.png"/>
				<Subheading>Physical Design</Subheading>
				<div className="row" style={firstRowStyle}>
					<div className="col-sm-4">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Mechatronics Cube/Initial Cube Render.JPG"
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						We then began the physical design of the system. Our general components
						and material selection were primarily driven by resources we had easy access
						to through on-campus makerspaces. We chose to use acrylic for the frame and
						the flywheel, as we could laser cut accurate components. We had access to
						threaded rods and nuts for the depth of the frame, and we had access to a
						variety of nuts and bolts, which we used to increase the inertia of the flywheel.
						I created a CAD model of our design, so that we could put in rough mass values for
						materials and hardware and get the relevant masses and moments of inertia in our
						system.
						</p>
					</div>
				</div>
				<Subheading>Component Selection</Subheading>
				<FullRowText>
					Our next step was to spec a motor, based on our rough initial design. We 
					constrained ourselves to brushed DC motors due to cost. The major specifications
					for the motor were torque, RPM, and voltage/current requirements.
					We chose to make the inertia of the flywheel a free variable because it affected
					the motor torque and RPM required, and it was relatively easy to change using
					different nuts and bolts. We selected the value of the flywheel inertia based
					on the tradeoffs it created for our motor. A higher flywheel inertia requires
					more torque from a motor but a lower maximum RPM. A lower flywheel inertia can
					be moved by a lower torque motor but requires a higher maximum RPM to
					continually produce a reaction moment. Graphs of these tradeoffs are shown below.
					As seen, torque and inertia are linear with respect to an increase in flywheel
					inertia by a factor of K, but RPM and inertia are not. We tried to
					pick a value near the inflection point of the RPM and inertia curve. 
				</FullRowText>
				<FullRowImage src='project-assets/Mechatronics Cube/Flywheel Inertia Motor Selection.png'/>
				<div className="row" style={secRowStyle}>
					<div className="col text-start fs-5 d-flex align-items-center pt-4"
						style={secRowTextStyle}>
						<p>
						Using these graphs and our mass properties from CAD, we chose a motor.
						After choosing a motor, we found a motor driver for it and then made a
						schematic of how the motor and driver would be wired. Then we moved on to
						sensor selection. We needed one sensor: a gyroscope. The relevant performance
						requirements were range, resolution, and bandwidth. We used our system dynamicsm
						model to get these values. We already had an IMU breakout board for the BNO055
						sensor, so we knew we were likely going to use that, but we needed to confirm
						that its capabilities were up to par. We then made a similar wiring diagram for
						the sensor.
						</p>
					</div>
					<div className="col-sm-7" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Mechatronics Cube/Motor Wiring Diagram.png'
							style={firstPicStyle}/>
					</div>
				</div>
				<Subheading>Electronics and Microcontroller Code</Subheading>
				<FullRowText>
					Our overall electronics wiring diagram is shown below. We had issues
					reading all of the sensor registers from the MSP432, so we used an
					existing library for Arduino to read the sensor values. The Arduino
					was connected to the MSP432 over UART to communicate the sensor readings
					to the MSP432.
				</FullRowText>
				<FullRowImage src='project-assets/Mechatronics Cube/Circuit Layout.png'/>
				<FullRowText>
					At a high level, the code structure is shown in the block diagram below.
					The device has to sense the current angle of the cube frame, calculate
					the moment required to balance the cube, and then command a speed to the
					motor in order to create that moment.
				</FullRowText>
				<FullRowImage src='project-assets/Mechatronics Cube/Operating Principle.png'/>
				<Subheading>Controller Design and Implementation</Subheading>
				<FullRowText>
					Once we had the physical device and the electronic hardware chosen and built,
					we started working on the controller design. First we found the transfer function
					of the system, shown below.
				</FullRowText>
				<FullRowImage src='project-assets/Mechatronics Cube/Transfer Function.png'/>
				<div className="row" style={firstRowStyle}>
					<div className="col-sm-7">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Mechatronics Cube/System Block Diagram.png"
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						Next we drew out the system block diagram, where a PD controller
						was designed to output a desired moment to command the system
						to create. However, in the digital implementation, the command
						to our actuator was a PWM signal with variable duty cycle and
						another digital signal for the direction of the motor. The system
						was modeled in Simulink with nonlinearities in order to observe
						the response of the approximated physical system with a controller
						designed from linear assumptions.
						</p>
					</div>
				</div>
				<FullRowImage src='project-assets/Mechatronics Cube/Simulink Model.png'/>
				<div className="row" style={firstRowStyle}>
					<div className="col text-start d-flex fs-5 align-items-center pt-4"
						style={fourthRowTextStyle}>
						<p>
						To implement the controller we designed, we used the desired moment
						to calculate a target angular acceleration of the flywheel. We used
						the target angular acceleration, the previous speed command of the
						flywheel, and the clock cycle time to calculate a new desired speed
						for the flywheel. If this speed was reached over the next clock cycle,
						then the appropriate moment would be generated. The general structure
						of the code for this is shown in the figure on the right.
						</p>
					</div>
					<div className="col-sm-7">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Mechatronics Cube/Code Structure.jpg"
							style={firstPicStyle}/>
					</div>
				</div>
				<div className="row" style={firstRowStyle}>
					<div className="col-sm-6 mx-auto">
						<iframe className="pt-4 d-block"
								src='https://www.youtube.com/embed/EDXmnW8xCU8'
								style={fourthPicStyle}/>
					</div>
					<div className="col text-start d-flex fs-5 align-items-center pt-4"
						style={fourthRowTextStyle}>
						<p>
						Here is an example video of our PD controller - you can see there
						is overshoot and oscillations. We tuned the controller's parameters
						for a bit, but we ran out of time to complete the tuning to our
						actual performance requirements. We used the plots shown below in order
						to understand what our system was measuring the angle to be and what its
						commands were in order to troubleshoot the controller. Overall this was
						a fantastic project to work on, and even though we did not meet our
						performance goals, I learned a lot about mechatronic system design
						and controller implementation.
						</p>
					</div>
				</div>
				<FullRowImage src='project-assets/Mechatronics Cube/Oscillation Trial Example.png'/>
			</div>
			<p></p>
		</div>
	);
}