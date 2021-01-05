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
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hip Exo Hardware/Backpack CAD.JPG' style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				To tackle this, I went through many sketches and iterations with the graduate students who worked on the electronics and on the frame of the device. Eventually, I was able to make a unit that was much improved (though not without its flaws) and which allowed for some additional components. An image from the CAD is shown as well as a 3D printed prototype. This was the most complex thing I had designed and it was great experience to puzzle out how everything would fit together in modular way and be manufactured easily.
				</FullRowText>
				<Subheading>IMU Housings</Subheading>
				<FullRowText>
				The hip exoskeleton uses inertial measurement units (IMU) to obtain information about the user’s kinematics. We were using an IMU from Yost Labs and wanted a more secure way of attaching it to the thigh cuffs on the device. It was previously attached using Velcro. Shown are my CAD and the 3D printed result.
				</FullRowText>
				<div className="row">
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hip Exo Hardware/Old IMU on Exo.png' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hip Exo Hardware/Yost IMU.png' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hip Exo Hardware/IMU Holder CAD.png' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hip Exo Hardware/IMU Holder v2 Printed.JPG' style={firstPicStyle}/>
					</div>
				</div>
				<Subheading>C Frame Static Analysis</Subheading>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Hip Exo Hardware/C Frame Image.JPG' style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						The hip exoskeleton has various major components that need to be connected together: two actuators, the electronics unit, and an orthotic back plate. The way they connect is using this frame that we call the C Frame. One of the graduate students was trying to improve this and make it lighter using tubes, so I performed some static analysis for him. This was the first time I had used any of my knowledge from Deformable Bodies class to an actual design, and it was pretty fun although I missed some things. I modeled each side as a cantilevered beam with the actuator’s weight on it, and then I wrote a Python script for easy calculation with different tube parameters. The actual analysis is pretty brief and can be seen here.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}