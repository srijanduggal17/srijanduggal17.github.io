import Game2048 from './Projects/2048.js';
import KneeExo from './Projects/KneeExo.js';
import MachineDesign from './Projects/MachineDesign.js';

//Props for ProjectThumbnail
export const projectInfo = [
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
		projectURL: 'machinedesign',
		projectPage: <MachineDesign />
	},
	{
		imgPath: '2048 Game.png',
		title: '2048 Playing Agent',
		desc: 'Bot that plays 2048: human-based logic and reinforcement learning',
		timeline: 'May-June 2019',
		skills: ['web scraping', 'reinforcement learning'],
		projectURL: '2048Agent',
		projectPage: <Game2048 />
	}
];