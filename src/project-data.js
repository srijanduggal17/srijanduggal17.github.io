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
import Woodworking from './Projects/Woodworking.js';
import EWBUganda from './Projects/EWBUganda.js';
import SpotifyProjects from './Projects/SpotifyProjects.js';

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
		imgPath: 'Loc Agnostic GP Estimator.png',
		title: 'Research: Gait Phase Estimation',
		desc: 'We made a gait phase estimator for hip exoskeletons that is robust to variations in terrain. My first publication!',
		timeline: 'Aug-Dec 2020',
		skills: ['deep learning', 'Keras'],
		projectURL: 'locagnostic-gpestimation',
		projectPage: <LocAgGPEst />
	},
	{
		imgPath: 'Machine Design.png',
		title: 'Machine Design Course Projects',
		desc: 'Practical design problems from my Machine Design course',
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
		imgPath: 'Spotify.png',
		title: 'Spotify Projects',
		desc: 'I love music - a few projects using the Spotify API',
		timeline: '2018-2020',
		skills: ['web APIs', 'machine learning', 'Google Cloud Platform'],
		projectURL: 'SpotifyProjects',
		projectPage: <SpotifyProjects />
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
		imgPath: 'ewbgt.png',
		title: 'EWB-GT: Project Uganda',
		desc: 'We worked on clean water supply and distribution in the village of Oloo, Uganda',
		timeline: 'Jan-May 2018',
		skills: ['MATLAB', 'JavaScript'],
		projectURL: 'ewbuganda',
		projectPage: <EWBUganda />
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
		desc: 'We made a robotic arm from scratch for a science olympiad event',
		timeline: '2016-2017',
		skills: ['fabrication', 'CAD', 'Arduino', 'mechatronics'],
		projectURL: 'robot-arm',
		projectPage: <RobotArm />
	},
	{
		imgPath: 'Hackathing.JPG',
		title: 'BMW Hack-A-Thing Competition',
		desc: 'We tried to make an end effector for automobile parts',
		timeline: 'Aug-Dec 2017',
		skills: ['Arduino', '3D printing', 'CAD'],
		projectURL: 'hackathing',
		projectPage: <HackAThing />
	},
	{
		imgPath: 'Woodworking.JPG',
		title: 'High School Woodworking Projects',
		desc: 'Various things I built in high school',
		timeline: '2016-2017',
		skills: ['woodworking'],
		projectURL: 'woodworking',
		projectPage: <Woodworking />
	}
];