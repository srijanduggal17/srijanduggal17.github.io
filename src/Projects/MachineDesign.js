import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';

export default function MachineDesign(props) {
	const firstPicStyle = {
		maxHeight: '70vh',
		maxWidth: '100%'
	};

	return (
		<div>
			<ProjectHeading>Machine Design - Projects</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				During my Machine Design course, we were assigned three design problems to solve. Prior to this class, I had no experience designing mechanical objects with a structured design approach or with actual engineering backing my design decisions. This was one of my favorite classes in college, as it brought me from someone who did not know how to properly design something to someone who feels comfortable with their foundational skills and excited to apply them.
				</FullRowText>
				<div className="row">
					<div className="col-sm-5" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Machine Design/DP1 Fig1.png' style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						The design problems were practical – there was some context, we had to solve for various stresses, stress concentrations, iteratively choose components from McMaster that satisfied the design criteria as cheaply as possible, and create manufacturing drawings. Each of these projects has a significant amount of analysis to them, so I will give a brief overview of what was required and my full work for each problem is attached (note – there are mistakes on all three design problems but I wanted to include my work so you can see my though process). All three projects had the similar general context: you are an engineer working at a company that sells Pumps/Pump equipment. A pump system needs to be designed to remove water from low-elevation areas after flooding events.
						</p>
					</div>
				</div>
				<Subheading>Design Problem 1: Pump Support</Subheading>
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