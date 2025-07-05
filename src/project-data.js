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
import PowerCourses from './Projects/PowerCourses.js';
import HomeValueForecasting from './Projects/HomeValueForecasting.js';
import MG20 from './Projects/MG20.js';
import BoardGames from './Projects/BoardGames.js';
import BasketballProject from './Projects/BasketballProject.js';
import MechatronicsCube from './Projects/MechatronicsCube.js';
import ControlsCube from './Projects/ControlsCube.js';
import FirstIoT from './Projects/FirstIoT.js';
import ShippingProject from './Projects/ShippingProject.js';

//Props for ProjectThumbnail
export const projectInfo = [
	{
		imgPath: 'First IoT.jpg',
		title: 'First IoT Project',
		desc: 'Proof-of-Concept of interfacing with hardware through the internet',
		timeline: 'Jan 2022',
		skills: ['IoT', 'networking'],
		projectURL: 'firstiot',
		projectPage: <FirstIoT />
	},
	{
		imgPath: 'ShippingProject.jpg',
		title: 'Live Shipping Rates Backend',
		desc: 'Live Shipping Rates provider for small business',
		timeline: 'Feb 2021',
		skills: ['AWS', 'backend'],
		projectURL: 'shippingproject',
		projectPage: <ShippingProject />
	},
	{
		imgPath: 'Control Cube.jpg',
		title: 'Control Moment Gyroscope Balancing Cube',
		desc: 'Electronic design, signal processing, and programming a self-balancing cube',
		timeline: 'Jan 2021-May 2021',
		skills: ['signal processing', 'microcontrollers', 'electronics, controls'],
		projectURL: 'controlscube',
		projectPage: <ControlsCube />
	},
	{
		imgPath: 'MechatronicsCube.jpg',
		title: 'Reaction Wheel Self-Balancing Cube',
		desc: 'Designed, manufactured, and programmed a self-balancing cube',
		timeline: 'Jan 2021-May 2021',
		skills: ['mechatronics', 'design', 'controls', 'CAD', 'microcontrollers'],
		projectURL: 'mechatronicscube',
		projectPage: <MechatronicsCube />
	},
	{
		imgPath: 'Board Games.jpg',
		title: 'Automated Board Game Deal Finder',
		desc: 'Created a bot that scrapes a forum to find deals on board games',
		timeline: 'Oct 2020-Dec 2020',
		skills: ['web scraping', 'cloud services', 'database'],
		projectURL: 'boardgames',
		projectPage: <BoardGames />
	},
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
		imgPath: 'MG20.png',
		title: 'Maccabi Games 2020',
		desc: 'We develop tournament management software for the MAR JCC Maccabi Games',
		timeline: 'May-Nov 2020',
		skills: ['web development', 'JavaScript', 'SQL'],
		projectURL: 'mg20',
		projectPage: <MG20 />
	},
	{
		imgPath: '2048 Game.png',
		title: '2048 Playing Agent',
		desc: 'Bot that plays 2048 using human-based logic & reinforcement learning',
		timeline: 'Jun-Jul 2020',
		skills: ['web scraping', 'reinforcement learning'],
		projectURL: '2048Agent',
		projectPage: <Game2048 />
	},
	{
		imgPath: 'Home Value Forecasting.png',
		title: 'Home Value Forecasting',
		desc: 'Using deep learning and time series socioeconomic data to forecast county-level home values',
		timeline: 'Mar-May 2020',
		skills: ['deep learning', 'web APIs', 'PyTorch'],
		projectURL: 'homevalueforecasting',
		projectPage: <HomeValueForecasting />
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
		imgPath: 'PowerCourses.png',
		title: 'Website for The Power Courses',
		desc: 'I improved and developed a website for one of my employers - a test prep company',
		timeline: 'May-Aug 2018',
		skills: ['web development', 'Google Cloud Platform'],
		projectURL: 'pwrcourses',
		projectPage: <PowerCourses />
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
		imgPath: 'BasketballProject.jpg',
		title: 'Basketball Analytics Science Fair Project',
		desc: 'We made A Statistical Method for Analyzing Basketball Teams, and made it to ISEF!',
		timeline: 'Sep 2016-Aug 2017',
		skills: ['probability & statistics', 'data analytics', 'JavaScript'],
		projectURL: 'basketball-project',
		projectPage: <BasketballProject />
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