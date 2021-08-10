import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';

export default function ElectricVehicle(props) {
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
			<ProjectHeading>Science Olympiad: Electric Vehicle</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				Throughout my last two years of high school, I participated in and co-led
				the Science Olympiad team. This is actually what sparked my interest in
				studying engineering in college! We had fun building projects for the
				competition and learning about various tools and technologies.
				</FullRowText>
				<FullRowText>
				The purpose of this competition was to make a battery powered car that
				moved in a straight line as fast as possible, and stopped as close to the
				destination as possible. Our initial prototype involved using an existing
				RC car for the motor and axles, and then creating a circuit with an Arduino
				to control it with a pushbutton and a potentiometer to vary the distance
				before stopping. We started on a breadboard and then soldered our controls
				onto a protoboard.
				</FullRowText>
				<div className="row">
					<div className="col-sm-4 d-flex align-items-center" >
						<img className="pt-4 mx-auto pb-4 d-block"
							alt='EV 2016 breadboard'
							src='project-assets/Electric Vehicle/EV 2016 breadboard.jpg'
							style={firstPicStyle}/>
					</div>
					<div className="col-sm-4 d-flex align-items-center" >
						<img className="pt-4 mx-auto pb-4 d-block"
							alt='EV 2016 protoboard'
							src='project-assets/Electric Vehicle/EV 2016 protoboard.jpg'
							style={firstPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<img className="pt-4 mx-auto pb-4 d-block"
							alt='EV 2016'
							src='project-assets/Electric Vehicle/EV 2016.jpg'
							style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				This worked but it was not very fast. Our next plan was to create the
				car ourselves. We used Fusion 360 to design the chassis and laser cut
				it out of some thin plywood. Then we used Knex (a children’s construction
				toy) to make the frame, relying on a DC motor to turn a Knex gear. The
				circuit remained the same as before. This was my first time actually using
				a DC motor and setting up an Arduino to control it which was really cool!
				</FullRowText>
				<div className="row">
					<div className="col mx-auto d-flex align-items-center" >
						<iframe className="pt-4 d-block"
								title='Motor testing'
								src='https://www.youtube.com/embed/OJ_fl8-jEPU'
								style={thirdPicStyle}/>
					</div>
					<div className="col-md-4" >
						<img className="pt-4 mx-auto d-block"
							alt='EV 2016 v2 Frame'
							src='project-assets/Electric Vehicle/EV 2016 v2 Frame.JPG'
							style={secondPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-3 d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block"
							alt='EV 2016 v2 underside'
							src='project-assets/Electric Vehicle/EV 2016 v2 Underside.JPG'
							style={secondPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<img className="pt-4 mx-auto d-block"
							alt='EV 2016 v2 overall'
							src='project-assets/Electric Vehicle/EV 2016 v2 Overall.JPG'
							style={secondPicStyle}/>
					</div>
					<div className="col-sm-6 d-flex align-items-center" >
						<iframe className="pt-4 d-block"
								title='EV 2016 test'
								src='https://www.youtube.com/embed/UHVh_QjFfiA'
								style={thirdPicStyle}/>
					</div>
				</div>
				<FullRowText>
				The following year, we went with a very similar approach, but we wanted to
				improve the alignment, so we 3D printed a frame to keep the front and rear
				axles properly aligned. Another distinct change to improve the speed was
				to put a large gear on the motor shaft and attach a small gear onto the
				axle, such that the gear system would amplify the velocity. This ended up
				working really well!
				</FullRowText>
				<div className="row mb-4">
					<div className="col-md-6" >
						<img className="pt-4 mx-auto d-block"
							alt='EV chassis'
							src='project-assets/Electric Vehicle/EV Chassis.JPG'
							style={secondPicStyle}/>
					</div>
					<div className="col mx-auto d-flex align-items-center" >
						<iframe className="pt-4 d-block"
								title='EV 2017 test'
								src='https://www.youtube.com/embed/qkPnuEpzoS4'
								style={thirdPicStyle}/>
					</div>
				</div>
			</div>
		</div>
	)
}