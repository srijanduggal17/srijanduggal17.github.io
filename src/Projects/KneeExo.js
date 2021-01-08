import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function KneeExo(props) {
	const firstRowStyle = {
		backgroundColor: 'white'
	};

	const secRowStyle = {
		backgroundColor: 'white'
	};

	const firstPicStyle = {
		maxHeight: '60vh',
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

	const firstRowTextStyle = {
		color: 'grey'
	};

	const secRowTextStyle = {
		color: 'black'
	};

	// const thirdPicStyle = {
	// 	height: '80vh',
	// 	width: '100%'
	// };

	const thirdRowTextStyle = {
		color: 'white'
	};

	const fourthRowTextStyle = {
		color: 'black'
	};

	return (
		<div>
			<ProjectHeading>Knee Exoskeleton Controller</ProjectHeading>
			<div className="w-100 container-fluid">
				<div className="row" style={firstRowStyle}>
					<div className="col-sm-3">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/Knee Exo.jpg"
							style={firstPicStyle}/>
					</div>
					<div className="col text-center fs-4 fw-bold d-flex align-items-center"
						style={firstRowTextStyle}>
						<p>
						This project was part of my undergraduate research at the Exoskeleton
						and Prosthetics Intelligent Controls (EPIC) Lab with Dr. Aaron Young.
						I worked on it for two semesters with another undergrad student and
						learned a lot about working with electronics and sensors for control.
						</p>
					</div>
				</div>
				<div className="row" style={secRowStyle}>
					<div className="col text-start fs-5 d-flex align-items-center pt-4"
						style={secRowTextStyle}>
						<p>
						Some context: the EPIC lab has a focus on devices that humans wear to
						assist their motion. This project was based on assisting soldiers in
						walking long distances while carrying their heavy gear. The device was
						developed by Dr. Frank Hammond’s lab, and our two goals were to control
						how the device assists the user and to make it user-friendly. I was
						excited for the opportunity to gain hands-on technical experience with
						a project of this scope.
						</p>
					</div>
					<div className="col-sm-4" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Knee Exo/Epic Logo.jpg'
							style={firstPicStyle}/>
					</div>
				</div>
				<div className="row" style={secRowStyle}>
					<div className="col-sm-5">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/NextFlex Device.png"
							style={firstPicStyle}/>
					</div>
					<div className="col text-start d-flex fs-5 align-items-center pt-4"
						style={secRowTextStyle}>
						<p>
						At a high level, the device can produce a torque about the knee joint by
						expanding or contracting two pairs of pneumatic “muscles” (this is how it
						helps you walk). At all times, the device needs to know how much torque to
						assist you with. This is determined by measuring the electrical activity of
						the user’s muscles (this is related to how much the muscle is about to
						contract) and commanding a torque proportional to this. To make the control
						system, we designed the sensor circuits, developed a custom PCB, and
						programmed a Raspberry Pi using ROS. To make the device more user-friendly,
						we developed a control handle with buttons, switches, and LEDs to allow
						the user to change the mode that the device was operating in and receive
						visual feedback. <span className="fw-bold">More details below</span>
						</p>
					</div>
				</div>
				<Subheading>User Interface</Subheading>
				<div className="row" style={firstRowStyle}>
					<div className="col text-start d-flex fs-5 align-items-center pt-4"
						style={fourthRowTextStyle}>
						<p>
						The user can control the device – turning the controller on, calibrating
						the controller, and setting the device to provide assistance – all using
						the simple handle with LED feedback. We designed a PCB for easy mounting
						of the electronics and a handle to house it.
						</p>
					</div>
					<div className="col-sm-6 d-flex align-items-center">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/NextFlex Handle.png"
							style={firstPicStyle}/>
					</div>
				</div>
				<Subheading>Hardware</Subheading>
				<div className="row">
					<div className="col-sm-6 d-flex align-items-center">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/NextFlex Hardware.png"
							style={thirdPicStyle}/>
					</div>
					<div className="col text-start d-flex fs-5 align-items-center pt-4"
						style={fourthRowTextStyle}>
						<p>
						The brain of the device is a Raspberry Pi microprocessor, which reads
						from two sensors: EMG and encoder. The encoder provides information on
						the angular position of the knee joint, and the EMG captures the muscle
						activity. The Raspberry Pi only takes digital inputs, so an Analog to
						Digital Converter (ADC) was necessary to read the EMG signals.
						The ADC had an SPI communication protocol output, so I learned about how
						to read this at a low-level and convert the digital pulses to the signal
						we desired. The digital encoder had a logic level of 5V, but the Raspberry
						Pi operates on a 3.3V logic level, so a level converter was necessary.
						The TI Launchpad was provided to us on the device itself, and it performed
						the low level pressure control in the muscles. We had to use the UART
						protocol to communicate the desired torque to the device. 
						</p>
					</div>
				</div>
				<div className="row">
					<div className='col-sm-5 d-flex align-items-center'>
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/RPi Shield Schematic.png"
							style={secondPicStyle}/>
					</div>
					<div className='col-sm-4 d-flex align-items-center'>
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/RPi Shield Layout.png"
							style={secondPicStyle}/>
					</div>
					<div className='col-sm-3 d-flex align-items-center'>
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/RPi Shield Prototype.jpg"
							style={secondPicStyle}/>
					</div>
				</div>
				<FullRowText>
				Once an initial circuit was functional on a breadboard, we designed a PCB
				shield to sit on top of the Raspberry Pi for a compact profile. The PCB was
				designed in Autodesk Eagle and then fabricated in The Hive makerspace at Georgia
				Tech. After we tested the PCB shield using a function generator/oscilloscope and
				then on the actual Raspberry Pi, we ordered a more professional board from
				OshPark. Finally, I designed a case for the Raspberry Pi and shield in SolidWorks
				and 3D printed it.
				</FullRowText>
				<div className="row">
					<div className='col-sm-6 d-flex align-items-center'>
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/RPi Shield.png"
							style={secondPicStyle}/>
					</div>
					<div className='col d-flex align-items-center'>
						<img className="pt-4 pb-4 mx-auto d-block" 
							src="project-assets/Knee Exo/RPi Shield and Case.jpg"
							style={secondPicStyle}/>
					</div>
				</div>
				<Subheading>Device Logic and Framework</Subheading>
				<FullRowText>
				The logic for the different operating modes of the device (powered on,
				calibrating, calibrated, and assisting) and the controller was implemented
				on the Raspberry Pi using Python and ROS. This was my first exposure to ROS,
				and while I did not lead that aspect of the project, I learned about its
				advantages and how to use it. A diagram for the ROS nodes we used, as well
				as a state transition diagram for the device are shown below.
				</FullRowText>
				<FullRowImage src="project-assets/Knee Exo/State Machine.png"/>
				<FullRowImage src="project-assets/Knee Exo/ROS Nodes.png"/>
				<Subheading>Proportional Myoelectric Controller Implementation</Subheading>
				<FullRowText>
				The actual controller that determined the commanded assistance torque was a
				Proportional Myoelectric Controller, adapted from Koller et al[1]. The raw
				EMG signal is noisy and we wanted the torque profile to be proportional to
				the overall EMG profile. To create the EMG profile, at any clock cycle of
				the controller, the RMS of a backward-looking window of the EMG signal was
				calculated. This created a smooth time series with which we could command
				the device. The RMS EMG at each clock cycle was compared to the maximum RMS
				EMG value during the calibration phase to produce the desired torque output
				(See Equation 1). Essentially, the torque command is a fraction of the
				device’s maximum torque, and this fraction is determined by the current
				EMG signal.
				</FullRowText>
				<div className="row">
					<div className="mx-auto col-sm-6">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/Controller Eqn.png"
							style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				A time series example of what this looks like is shown. This was from an
				offline computation of the output torque, but the real-time result is the same.
				</FullRowText>
				<div className="row">
					<div className="col">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/Controller Offline.png"
							style={secondPicStyle}/>
					</div>
					<div className="col mx-auto text-start d-flex fs-5 align-items-center pt-4">
						<p>
						When the EMG signal is flat, the user’s muscles are in a resting state,
						however there are still slight torque output values. It is undesirable
						for the device to be attempting to assist at an almost negligible torque,
						so during the calibration phase, a threshold RMS EMG level is also
						calculated. The blue FSR signal on the graph can be ignored.
						</p>
					</div>
				</div>
				<Subheading>Calibration</Subheading>
				<FullRowText>
					The purpose of the calibration phase is to calculate two quantities:
					the threshold RMS EMG level, and the maximum RMS EMG level. After the
					user presses the calibration button, they must walk for a short period
					of time during which the device is recording the EMG and encoder data.
					We used the fact that walking is a periodic motion to detect a fixed number
					of gait cycles before computing the two quantities. The encoder signal
					has some drift, but we found that a peak detection function from the
					scipy library was sufficient to detect local minima in the series (left figure).
					Once 7 gait cycles had passed, we computed the average RMS EMG profile and
					calculated the maximum (for use in the torque command equation) and the
					20th percentile (for use as a threshold to eliminate noise when the
					muscle is resting). An example profile, averaged across gait cycles is shown
					in the right figure below.
				</FullRowText>
				<div className="row">
					<div className="col">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/Encoder vs Time.png"
							style={secondPicStyle}/>
					</div>
					<div className="col">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Knee Exo/Threshold Ex.png"
							style={secondPicStyle}/>
					</div>
				</div>
				<Subheading>References</Subheading>
				<FullRowText>
					1. Koller, J.R., Jacobs, D.A., Ferris, D.P. et al. Learning to walk
					with an adaptive gain proportional myoelectric controller for a
					robotic ankle exoskeleton. J NeuroEngineering Rehabil 12, 97 (2015).
					https://doi.org/10.1186/s12984-015-0086-5
				</FullRowText>
			</div>
			<p></p>
		</div>
	);
}