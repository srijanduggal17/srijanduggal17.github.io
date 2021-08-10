import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';

export default function MG20(props) {
	const thirdPicStyle = {
		height: '80vh',
		width: '100%'
	};

	return (
		<div>
			<ProjectHeading>MAR JCC Maccabi Games 2020</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				The MAR JCC Maccabi Games is an annual community sports tournament for the
				Jewish community in Miami. Since 2018, I have worked on a small team of
				developers to create a web and mobile platform to simplify the logistics
				of the tournament. Around 2500 people come each year to participate as
				athletes (they each represent a country) or to watch their friends and
				family participate. To make the tournament run smoothly, there is a lot
				of information that must be presented as easily as possible to the
				participants. The 2020 tournament was different, as only social distanced
				sports were played, resulting in a much smaller event. On the logistics
				side, two things were needed: a way for tournament officials to report
				who scored points, and a way for the public to see how many points each
				country had scored. 
				</FullRowText>
				<div className="row">
					<div className="col-sm-6">
						<iframe className="pt-4 mx-auto pb-4 d-block"
								title='Public points page demo'
								src='https://www.youtube.com/embed/HPbhnyzTPLg'
								style={thirdPicStyle}/>
					</div>
					<div className="col text-start d-flex fs-5 align-items-center pt-4">
						<p>
						The public page is shown in the video. There is a bar graph showing
						the points scored for each country, with a nice race animation at the
						beginning. The individual point breakdown of each country is shown by
						clicking on the bars.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col text-start d-flex fs-5 align-items-center pt-4">
						<p>
						The points reporting page is shown in the video. There is a toggle at
						the top for which event you would like to add points for, and then a
						selector for the country. You can then type in the player name, the
						reason for the points, and the number of points. All points for the
						event can be seen in the table beneath, and points you added by accident
						can be deleted.
						</p>
					</div>
					<div className="col-sm-6">
						<iframe className="pt-4 mx-auto pb-4 d-block"
								title='Admin add points view'
								src='https://www.youtube.com/embed/liITX_2FRbI'
								style={thirdPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col text-start d-flex fs-5 align-items-center pt-4">
						<p className="mx-auto">
						Technologies:
						<ul>
						<li>The points reporting page is secured by AWS Cognito</li>
						<li>The database is stored on AWS RDS and accessed via MySQL queries</li>
						<li>The front-end is programmed using React.js, Redux.js, HTML, JS, & CSS</li>
						<li>The back-end is programmed using Node.js, Express.js, and the AccessControl library</li>
						<li>The front-end and back-end are hosted using Heroku</li>
						</ul>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}