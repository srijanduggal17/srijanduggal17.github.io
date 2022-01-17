import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';

export default function FirstIoT(props) {
	const firstPicStyle = {
		maxHeight: '60vh',
		maxWidth: '100%'
	};

	const secondPicStyle = {
		maxHeight: '70vh',
		maxWidth: '100%'
	};

	const thirdPicStyle = {
		height: '85vh',
		width: '100%'
	};

	const fourthPicStyle = {
		height: '80vh',
		maxWidth: '100%'
	};

	return (
		<div>
			<ProjectHeading>First IoT Project</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				Given my background in messing with Arduinos/hardware as well as web development,
				the world of IoT devices had been intrigueing to me. I wanted to try a most basic
				proof-of-concept to set up something. So I set up a Raspberry Pi to turn on/off
				an LED. 
				</FullRowText>
				<Subheading>Approach 1</Subheading>
				<div className="row">
					<div className="col-sm-4 text-start fs-5 d-flex align-items-center">
						<p>
						My first idea was something simple - polling. All I needed to do was
						make GET requests from my Raspberry Pi to a server, and based on the
						data in a database, turn on/off the LED. On the right is the code I had
						on the Raspberry Pi to execute this every 2 seconds
						</p>
					</div>
					<div className="col-sm-4 d-flex align-items-center">
						<img className="pt-4 pb-4 mx-auto d-block"
							alt='Series with county name'
							src="project-assets/First IoT/Approach1Code.png"
							style={firstPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<iframe className="d-block mx-auto"
								title='Approach 1'
								src='https://www.youtube.com/embed/qjYyEOiCg4Q'
								style={thirdPicStyle}/>
					</div>
				</div>
				<Subheading>Approach 2</Subheading>
				<div className="row">
					<div className="col-sm-4 d-flex align-items-center">
						<img className="pt-4 pb-4 mx-auto d-block"
							alt='Series with county name'
							src="project-assets/First IoT/Approach2Code.png"
							style={firstPicStyle}/>
					</div>
					<div className="col-sm-4 text-start fs-5 d-flex align-items-center">
						<p>
						My next idea was something computationally better - I set up an
						HTTP server on the Raspberry Pi using Flask. I exposed a POST
						endpoint to my local network and then set up port forwarding on my
						router so that people could use my router's public IP to interact with
						the LED. I FaceTimed a friend to test it out and it was a success!
						</p>
					</div>
					<div className="col d-flex align-items-center" >
						<iframe className="d-block mx-auto"
								title='Approach 1'
								src='https://www.youtube.com/embed/9rYX0X7I8JI'
								style={thirdPicStyle}/>
					</div>
				</div>
				<FullRowText>
					Overall this was a fun little exploration into the world of IoT while I was
					quarantined with COVID. Super simple but integrates the technologies required
					to make IoT devices. I had a good time!
				</FullRowText>
			</div>
		</div>
	);
}