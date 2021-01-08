import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function LocAgGPEst(props) {
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
			<ProjectHeading>
				Locomotion Mode Agnostic Gait Phase Estimation with Hip Exoskeleton
			</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				During my undergraduate research, I worked on the Hip Exoskeleton team at the
				Exoskeleton and Prosthetics Intelligent Controls (EPIC) Lab with Dr. Aaron
				Young. Our team primarily focuses on improving hip exoskeleton technology for
				able-bodied users and stroke subjects. Much of the work involves attempting
				to make the technology usable in more realistic settings rather than
				laboratory/treadmill settings.
				</FullRowText>
				<Subheading>Project Context</Subheading>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Loc Agnostic GP Est/GaitCycle.jpg'
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						Hip exoskeletons assist a user’s motion by applying a torque about
						the hip joint. There are various control methods for determining the
						torque that the device should apply at any given time. One method
						is to apply a torque similar to the torque that the human
						body biologically generates with its muscles. This is called
						biological torque control, and the torque profile varies on different
						locomotion modes (ex: level ground walking, stair ascent/descent,
						ramp ascent/descent). As walking is a cyclic motion, it is common
						to see references to gait phase – a variable that represents where
						a user is in the walking cycle as a percentage. 
						</p>
					</div>
				</div>
				<FullRowText>
				The figure above [1] shows this in more detail – 0% can be seen as heel
				contact and 100% would be the next heel contact of the same leg. It allows
				us to answer questions like the following: Did the user’s heel just touch
				the ground? Are they pushing backward on the ground and propelling themselves
				forward? Are they swinging their leg in the air? Based on where a user is in
				the gait cycle, the direction and amplitude of the torque that their muscles
				generate is varied.  
				</FullRowText>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						The figure shows an example of some biological torque profiles for the
						hip joint in different locomotion modes. This method of controlling
						the torque that the device should be assisting with requires two values
						as inputs: the locomotion mode and the gait phase. In our lab, we try
						to estimate these two using various machine learning techniques in
						as realistic of a setting as possible.
						</p>
					</div>
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Loc Agnostic GP Est/Torque Profiles.png'
							style={firstPicStyle}/>
					</div>
				</div>
				<Subheading>Project Purpose</Subheading>
				<FullRowText>
					The purpose of this work is to estimate one of those parameters: gait phase.
					Prior work has shown that gait phase can be estimated from sensors on the device
					in a treadmill setting, and that this estimation is robust to changes in walking
					speed [2]. Our work here is an attempted to create a gait phase estimator using a
					deep learning approach that uses sensors on the device and is robust to
					changes in terrain type / locomotion mode. The idea is that prior estimators
					have worked on individual locomotion modes, but from a practical standpoint,
					if a single estimator can be developed that works in all scenarios, then the
					system becomes much simpler. The benefits of a deep learning based approach
					are that no feature engineering is necessary: the model will take in the
					time-series data of various sensors on the exoskeleton and it will generate
					a single output estimate of the gait phase for each leg. 
				</FullRowText>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Loc Agnostic GP Est/Exo and Terrain Park.png'
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						Here you can see the device we used and the various aspects of it.
						The IMU and encoder were inputs to the estimation model. On the
						right is the terrain park that our subjects walked around in
						clockwise and counterclockwise directions, so that we could
						capture data on various locomotion modes and their transitions.
						</p>
					</div>
				</div>
				<Subheading>Results</Subheading>
				<div className="row">
					<div className="col">
						<img className="pt-4 pb-4 mx-auto d-block"
							src='project-assets/Loc Agnostic GP Est/Time Series Results.png'
							style={thirdPicStyle}/>
					</div>
				</div>
				<FullRowText>
				We were very excited about the results from the figure – let’s dive into them
				a little bit. The model architecture we used was compared to a conventional
				time-based method for estimating gait phase (TBE). The TBE method works by using the
				average time between heel contacts and the current time since a heel contact
				to compute the gait phase. The results from the time-based method are shown
				in red, and the results from our method are shown in blue. Each of the four
				strips shows time series plots of the gait phase percentage and the resulting
				commanded torque profiles for various locomotion modes and mode transitions.
				The RMSE for the specific mode/mode transition is listed at the top of each cell.
				The ground truth gait phase percentage and corresponding profiles are shown
				in grey. What is really cool here is that our model created very smooth
				estimates of gait phase and smooth assistance profiles, in transition steps
				as well. This is in contrast with the time-based method, which produced jerky
				profiles that would not feel natural at all to a user and certainly are not
				what is desired. To see more about the work, please check out our publication!
				</FullRowText>
				<Subheading>References</Subheading>
				<FullRowText>
					1. Stöckel, Tino & Jacksteit, Robert & Behrens, Martin & Skripitz, Ralf &
					Bader, Rainer & Mau-Moeller, Anett. (2015). The mental representation of
					the human gait in young and older adults. Frontiers in Psychology. 6.
					943. 10.3389/fpsyg.2015.00943.
					<br></br>
					2. I. Kang, P. Kunapuli and A. J. Young, "Real-Time Neural Network-Based
					Gait Phase Estimation Using a Robotic Hip Exoskeleton," in IEEE Transactions
					on Medical Robotics and Bionics, vol. 2, no. 1, pp. 28-37, Feb. 2020,
					doi: 10.1109/TMRB.2019.2961749.
				</FullRowText>
				<FullRowText>
					All figures unless otherwise specified are taken from: <br></br>
					I. Kang, D. Molinaro, <span className="fw-bold">S. Duggal</span>, Y. Chen, P. Kunapuli, A. Young,
					Real-time gait phase estimation for robotic hip exoskeleton
					control during multimodal locomotion, IEEE Robotics and Automation
					Letters / International Conference on Robotics and Automation (ICRA),
					May 2021 (under review)
				</FullRowText>
			</div>
		</div>
	)
}