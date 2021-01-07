import Game2048 from './Projects/2048.js';
import KneeExo from './Projects/KneeExo.js';
import MachineDesign from './Projects/MachineDesign.js';
import HipExoHardware from './Projects/HipExoHardware.js';
import InstrumentedInsole from './Projects/InstrumentedInsole.js';
import ME2110 from './Projects/ME2110.js';
import ElectricVehicle from './Projects/ElectricVehicle.js';
import RobotArm from './Projects/RobotArm.js';
import LocAgGPEst from './Projects/LocAgGPEst.js';
import HackAThing from './Projects/HackAThing.js';

//Props for ProjectThumbnail
export const projectInfo = [
	{
		imgPath: 'Knee Exo.jpg',
		title: 'Knee Exoskeleton Controller',
		desc: 'Implemented hardware/software for pneumatic knee exoskeleton control',
		timeline: 'Jan-Dec 2020',
		skills: ['microcontrollers', 'PCB design', 'ROS'],
		projectURL: 'knee-exo',
		projectPage: <KneeExo />
	},
	{
		imgPath: 'Machine Design.png',
		title: 'Machine Design Course Projects',
		desc: 'practical design problems from my Machine Design course',
		timeline: 'Aug-Dec 2020',
		skills: ['machine design'],
		projectURL: 'machine-design',
		projectPage: <MachineDesign />
	},
	{
		imgPath: '2048 Game.png',
		title: '2048 Playing Agent',
		desc: 'Bot that plays 2048 using human-based logic & reinforcement learning',
		timeline: 'June-July 2020',
		skills: ['web scraping', 'reinforcement learning'],
		projectURL: '2048Agent',
		projectPage: <Game2048 />
	},
	{
		imgPath: 'Hip Exo Hardware.png',
		title: 'Hip Exoskeleton Hardware',
		desc: 'Various hardware projects I worked on for a robotic hip exoskeleton',
		timeline: 'Aug-Dec 2019',
		skills: ['CAD', '3D printing', 'design'],
		projectURL: 'hipexo-hardware',
		projectPage: <HipExoHardware />
	},
	{
		imgPath: 'Insole.jpg',
		title: 'Instrumented Insole',
		desc: 'Worked on manufacturing, improving and testing shoe insoles with pressure sensors',
		timeline: 'Aug-Dec 2019',
		skills: ['sensors', 'LabVIEW', 'MATLAB'],
		projectURL: 'insole',
		projectPage: <InstrumentedInsole />
	},
	{
		imgPath: 'ME2110.jpg',
		title: 'Autonomous Robot for Creative Decisions & Design Course',
		desc: 'We designed, built, and tested a robot for our course competition',
		timeline: 'Jan-May 2019',
		skills: ['3D printing', 'mechatronics', 'LabVIEW'],
		projectURL: 'me2110',
		projectPage: <ME2110 />
	},
	{
		imgPath: 'Electric Vehicle.JPG',
		title: 'Science Olympiad: Electric Vehicle',
		desc: 'We made a battery-powered car for a science olympiad event',
		timeline: '2016-2017',
		skills: ['laser cutting', 'CAD', '3D printing', 'Arduino'],
		projectURL: 'electric-vehicle',
		projectPage: <ElectricVehicle />
	},
	{
		imgPath: 'Robot Arm.JPG',
		title: 'Science Olympiad: Robot Arm',
		desc: 'We made a robot arm from scratch for a science olympiad event',
		timeline: '2016-2017',
		skills: ['fabrication', 'CAD', 'Arduino', 'mechatronics'],
		projectURL: 'robot-arm',
		projectPage: <RobotArm />
	},
	{
		imgPath: 'Loc Agnostic GP Estimator.png',
		title: 'Research: Gait Phase Estimation',
		desc: 'We made a locomotion-mode agnostic gait phase estimator for hip exoskeletons',
		timeline: 'Aug-Dec 2020',
		skills: ['deep learning', 'Keras'],
		projectURL: 'locagnostic-gpestimation',
		projectPage: <LocAgGPEst />
	},
	{
		imgPath: 'Hackathing.jpg',
		title: 'BMW Hack-A-Thing Competition',
		desc: 'We tried to make an end effector for automobile parts',
		timeline: 'Aug-Dec 2017',
		skills: ['Arduino', '3D printing', 'CAD'],
		projectURL: 'hackathing',
		projectPage: <HackAThing />
	}
];