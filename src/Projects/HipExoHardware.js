import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';

export default function HipExoHardware(props) {
	const firstPicStyle = {
		maxHeight: '70vh',
		maxWidth: '100%'
	};

	return (
		<div>
			<ProjectHeading>Hip Exoskeleton Hardware</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				One semester for my undergraduate research, a big part of my role was working on the mechanical side of our device. This mainly involved designing and manufacturing 3D printed housings for electrical components as well as some static analysis.
				</FullRowText>
				<Subheading>Electronics Backpack Unit</Subheading>
				<div className="row">
					<div className="col-sm-5" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hip Exo Hardware/Backpack Printed.png' style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						The hip exoskeleton has various electronic components that need to be housed. Every semester, the research team is making improvements to the device, so new PCBs or components are added/removed. My goal was to improve the unit that housed all of the electronics. This unit is positioned on the user’s back. Prior versions were sufficient at the time, but had various areas for improvement: it was difficult to remove individual components (if you wanted to remove something, you had to remove the whole housing and then disassemble the housing), it protruded away from the user’s back too much, causing a larger than desired moment about the user’s center of mass, and the wire management was not ideal. 
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hip Exo Hardware/Backpack CAD SldWrks.png' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hip Exo Hardware/Backpack CAD.jpg' style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				To tackle this, I went through many sketches and iterations with the graduate students who worked on the electronics and on the frame of the device. Eventually, I was able to make a unit that was much improved (though not without its flaws) and which allowed for some additional components. An image from the CAD is shown as well as a 3D printed prototype. This was the most complex thing I had designed and it was great experience to puzzle out how everything would fit together in modular way and be manufactured easily.
				</FullRowText>
				<Subheading>IMU Housings</Subheading>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						The focus of this problem was the pump support system. There will be a motor that drives the pump with a belt: the pump and pump support could be in contact with water. Our goal is to design the pump platform, support arms, and the clevis pins to connect those to the fixed support structure. We were given information about the speed and torque of the pump impeller shaft, the minimum tension in the belt, and the pump weight among other specifications.
						</p>
					</div>
					<div className="col-sm-5" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Machine Design/DP1 Fig2.png' style={firstPicStyle}/>
					</div>
				</div>
				<Subheading>Design Problem 2: Pump Shaft</Subheading>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Machine Design/DP2 Fig1.png' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Machine Design/DP2 Fig2.png' style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				The focus of this problem is the impeller shaft and the shaft components. The goal here was to select a shaft, key, set screw, bearings, retaining rings, and a tapered pin based on our analysis. We were given information about the RPM and power transmission through the shaft, loads on the pulley, and loads from the impeller among other specifications.
				</FullRowText>
				<Subheading>Design Problem 3: Gearing System</Subheading>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Machine Design/DP3 Fig1.png' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Machine Design/DP3 Fig2.png' style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				The focus of this problem was on gear systems. We were given target RPM / power requirements for the shafts, a range of shaft diameters for each shaft, and some spacing requirements among other specifications. We had to select the gears based on the shaft size, kinematics, stresses and cost.
				</FullRowText>
			</div>
		</div>
	)
}