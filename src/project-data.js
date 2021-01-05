import Game2048 from './Projects/2048.js';
import KneeExo from './Projects/KneeExo.js';
import MachineDesign from './Projects/MachineDesign.js';
import HipExoHardware from './Projects/HipExoHardware.js';
import InstrumentedInsole from './Projects/InstrumentedInsole.js';

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
		desc: 'I worked on manufacturing, improving and testing shoe insoles with pressure sensors ',
		timeline: 'Aug-Dec 2019',
		skills: ['sensors', 'LabVIEW', 'MATLAB'],
		projectURL: 'insole',
		projectPage: <InstrumentedInsole />
	}
];