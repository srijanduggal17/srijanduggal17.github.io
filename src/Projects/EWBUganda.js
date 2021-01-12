import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function EWBUganda(props) {
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

	const fourthPicStyle = {
		height: '70vh',
		width: '90%'
	};

	return (
		<div>
			<ProjectHeading>Engineers without Borders: Uganda Project</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				The goal of this project was to deliver clean water to the village of Oloo and surrounding villages.
				</FullRowText>
				<FullRowText>
				I joined the team during Spring of my freshman year. At the time, the project had been in
				progress for a few years and had set up a pump from an aquifer, a water tank, and a tapstand
				for using the water. The problem we were facing when I joined was where to place more tapstands 
				such that the gravity-fed system would be able to deliver a steady flow. Part of what we were
				using was surveyed elevation data that the team had collected on a prior trip. The issue was
				that the spatial resolution was not that great, because the main purpose of the trip was not
				surveying. I had recently started using web APIs, and had an idea to use Google Maps’ elevation
				API to get elevations for the geographical region we were interested in. Following this unexpected
				course of action, I set up a simple desktop interface to enter a region and then save a file of
				the elevation data. We were then able to plot and explore this data in MATLAB to figure out
				how we were going to set up the distribution system!
				My code can be found <a href='https://github.com/srijanduggal17/EWB-Elevation-Analysis-Toolkit'>here</a> on GitHub.
				</FullRowText>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/EWB Uganda/LargeRegionSurfInterp.png'
							style={secondPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/EWB Uganda/OlooRegionBoreholeZeroTop.png'
							style={secondPicStyle}/>
					</div>
				</div>
				<FullRowText>
				This was a really exciting time for me as I
				felt useful to a team that had a mission that I really respected. During Fall 2018, I studied abroad
				and when I returned, unfortunately, the project started closing due to lack of funding – there’s a
				stipulation that the community we are serving must contribute some amount of money and have people
				trained to maintain the system. Due to recent droughts at the time, they were unable to do so
				and the project could no longer continue as hoped. This was a sad end to the project for now, but I
				was glad to help in some way even though our overall goal was not reached.
				</FullRowText>
			</div>
		</div>
	)
}