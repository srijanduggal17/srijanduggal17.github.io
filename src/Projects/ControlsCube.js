import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function ControlsCube(props) {
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

	return (
		<div>
			<ProjectHeading>Control Moment Gyroscope Balancing Cube</ProjectHeading>
			<div className="w-100 container-fluid">
				<div className="row" style={firstRowStyle}>
					<div className="col-sm-5">
						<img className="pt-4 pb-4 mx-auto d-block"
							alt='Control moment gyroscope cube'
							src="project-assets/Controls Cube/Control Cube.jpg"
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						This was a final project for a Modeling and Control of Motion Systems course.
						We had to model a system and design a controller, as well as either simulate
						it or build a prototype. One of my teammates was interested in self-balancing
						cubes, and we saw that Control Moment Gyroscopes were a relatively
						energy-efficient mechanism for them so we chose to make one! One application of
						these that I found interesting was to change direction in space - these are
						used on the International Space Station. This project gave me practice with 
						signal processing, electronic system design, and modeling/control.
						</p>
					</div>
				</div>
				<FullRowText>
					So how does it work? The idea is that there is a flywheel spinning in the center
					- this is a source of angular momentum. By changing the direction of this angular
					momentum (rotating the flywheel), a reactionary impulse is created. This will 
					rotate the cube to stabilize it. The speed at which the flywheel's axis of rotation
					is changing will determine the stabilizing moment.
				</FullRowText>
				<Subheading>Physical Components</Subheading>
				<div className="row" style={secRowStyle}>
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							alt='Key components'
							src='project-assets/Controls Cube/Key Components.png'
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
				The frame of the cube has an inner geared ring, which is how the axis of the flywheel
				changes. A stepper motor on the inner housing drives that change, and is commanded
				by an Arduino Nano with a motor driver. A brushless DC motor drives the flywheel and
				also has a motor driver that is commanded by the Arduino. The entire system is
				powered with a LiPo battery, and all of the electronics are housed within the 
				rotating assembly. An IMU is used to measure the current angle of the cube relative
				to the vertical.
						</p>
					</div>
				</div>
				<div className="row" style={secRowStyle}>
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
				This angle is then used to control the speed of the stepper motor that changes
				the direction of the flywheel axis. A tradeoff with having the electronics inside
				the center sphere is that the reference frame for the IMU measurements is constantly
				changing. This requires additional information about the position of the sphere
				relative to the frame. In order to capture this information, an encoder was placed
				on the axis of the inner sphere.
						</p>
					</div>
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							alt='Key components ctnd'
							src='project-assets/Controls Cube/Key Components 2.png'
							style={firstPicStyle}/>
					</div>
				</div>
				<Subheading>Electronic Layout</Subheading>
				<FullRowImage src="project-assets/Controls Cube/WiringDiagram.png"
								alt='Wiring diagram'/>
				<FullRowText>
					My role in the project was the electronics and signal processing. Above is
					the wiring diagram for the system. The main sensors are the encoder which
					uses SPI to communicate the angle of the inner sphere, and the IMU which
					uses I2C to communicate the accelerations and rotational velocities of the 
					center sphere. This information is used to control the speed of the stepper
					motor. The brushless DC motor that spins the flywheel is kept aat a constant
					velocity.
				</FullRowText>
				<Subheading>Angle Estimation</Subheading>
				<FullRowText>
					Angle Estimation was the most challenging aspect of this project for me, and
					was also where I learned the most. The first part of this involved taking the
					IMU data and transforming it into the appropriate reference frame, using the
					encoder and some relationships from rigid body dynamics. The next step was
					calculating two separate estimates of the cube angle - one from the accelerometer
					reading, and one from the gyroscope reading. For the accelerometer estimate,
					there are actually two equations we can use - one that involves a cosine term
					and another that involves a sine term. Depending on the angle of the inner sphere,
					these terms could diverge as they might divide by a very small number. This is
					shown in the figure below (blue and orange). One method of getting an angle from
					the accelerometer data is to choose one equation if the sphere angle is less than 45
					degrees and the other equation if the sphere angle is greater than 45 degrees.
					This is shown in yellow and you can see that it removes the numerical instability
					issues.
				</FullRowText>
				<FullRowImage src='project-assets/Controls Cube/IMU Combined Estimate.png'
								alt='IMU combined ACC estimate'/>
				<FullRowText>
					The other method of estimating the angle of the cube is using the gyroscope.
					By always starting the cube on its side, the initial angle of the cube will
					be consistent. After that, the angular velocity can be integrated over time
					to find the current angle. Since the IMU is on the rotating inner sphere, I
					had to do some rigid body dynamics and use the encoder to get the angular
					velocity of interest from the output of the IMU. By keeping a relatively
					consistent control loop rate (I say relatively because the timing fluctuates
					with Arduinos), we can numerically integrate the angular velocity using the
					period of the control loop. Now that we have our two angle estimates, we try
					to compensate for their weaknesses. The issue with the accelerometer estimate
					is that it is very noisy and sensitive to vibrations (this is important because
					the flywheel creates many vibrations). The issue with the gyroscope estimate is
					that it can drift over time. In order to create a robust estimate, we used a
					complementary filter with these two quantities. The idea here is that the
					accelerometer gives very good low-frequency data and is stable over long periods
					of time, while the gyroscope gives very good high-frequency data and is reliable
					in the short term but not over long periods. So we can lowpass filter the
					accelerometer estimate and highpass filter the gyroscope estimate, and 
					have a weighted sum of the two. This is shown below in orange and demonstrates
					the significant improvement over the accelerometer estimate shown in blue.
				</FullRowText>
				<FullRowImage src='project-assets/Controls Cube/Final Estimator Comparison.png'
								alt='Final angle estimator comparison'/>
				<Subheading>Controller Implementation</Subheading>
				<FullRowText>
					The other aspect I was responsible for was the digital implementation of the
					controller. The angle estimation was crucial here because it gave us a smooth
					error signal for our controller. The controller was designed to take in angular
					error and output the moment necessary to stabilize the system. The controller
					was implemented on the Arduino, and the image below shows the overall program flow.
				</FullRowText>
				<FullRowImage src='project-assets/Controls Cube/Code Flow.png'
								alt='Code flow'/>
				<FullRowText>
					Overall I learned a lot from this project, and I really enjoyed getting
					to dive into the signal processing and dynamics aspects and creating a
					usable control input from a complicated sensor.
				</FullRowText>	
				<p className="fs-5 text-center pt-4">
					Check out <a
				href='project-assets/Controls Cube/Final Report.pdf'>our report</a> for
				more details! The code can be found <a
				href='https://github.com/srijanduggal17/ME4012-Control-Moment-Gyroscope'>
					here</a> on GitHub.
				</p>			
			</div>
			<p></p>
		</div>
	);
}