import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function BasketballProject(props) {
	const firstPicStyle = {
		maxHeight: '70vh',
		maxWidth: '100%'
	};

	const secondPicStyle = {
		maxHeight: '80vh',
		maxWidth: '100%'
	};

	const thirdPicStyle = {
		maxHeight: '90vh',
		maxWidth: '100%'
	};

	return (
		<div>
			<ProjectHeading>A Statistical Method for Analyzing Basketball Teams</ProjectHeading>
			<div className="w-100 container-fluid">
				<div className="row">
					<div className="col-sm-4" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Shu and I.PNG'
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						During my senior year of high school, my high school started participating in the district science fair. My friend Shu loved basketball and we both enjoyed Math so we decided to do a project related to statistics and basketball. At the time, I had been exposed to statistics/probability through my science classes, but I hadn’t taken a formal course yet. The basketball season was in the winter, so we didn’t have long before the team would start practicing. Another one of my good friends, Meyer, was the captain of the basketball team. He loved talking about stats and analytics so the three of us started talking frequently about what sorts of things might be useful to the team, and what could be interesting for us to analyze. We actually won the district science fair and made it to the Intel International Science and Engineering Fair (ISEF) in Los Angeles!!!
						</p>
					</div>
				</div>
				<FullRowText>
				To start, Shu and I decided that above all else, we needed to collect some good quality data. At this point, we didn’t know what we would be doing with the data, but we set out to split the court into many zones, and collect data as players practiced, scrimmaged, and played games. Our basketball court had an indoor track 1 floor above it, so we set up some tables overlooking the court and sat there to collect the data.
				</FullRowText>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Original Zone layout.png'
							style={secondPicStyle}/>
					</div>
					<div className="col d-flex align-items-center" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Basketball court labeled.png'
							style={secondPicStyle}/>
					</div>
				</div>
				<FullRowText>
				We started by grabbing the official high school court dimensions online and then designed zones based on angle from the baseline and radial distance from the hoop. Then we consolidated these layouts into 26 zones after talking to Meyer about how people shoot. Next we marked the basketball court with some tape, made an Excel sheet to collect data, and watched the team play. We thought the pressure might have some affect on the players’ shooting/passing, so with every datapoint, we noted down whether they were practicing (drills), scrimmaging, or playing a game. We collected data on everything: passes, turnovers, shots, free throws, etc.
				</FullRowText>
				<FullRowImage src='project-assets/Basketball Project/Initial Data Excel.png'/>
				<FullRowText>
				At the same time as we were collecting data, we were learning about various statistical methods and how to use them to help answer our hypotheses. This was a period where every day we would eat and breathe basketball and statistics – we learned a crazy amount of stuff during this year. Here are some of the key questions we had:
				</FullRowText>
				<FullRowText>
				<ol>
				<li>Are players using their limited shots effectively during games?</li>
				<li>Does playing at home affect our scoring ratio (points for / points against)?</li>
				<li>Is shot selection in game and scrimmage pressure consistent with shot selection in practice pressure?</li>
				<li>How does the pressure (practice/scrimmage/game) affect our shooting performance?</li>
				<li>Do the shots our players practice impact their performance in games?</li>
				<li>Does the radial distance from the hoop correspond with a difference in shooting accuracy?</li>
				<li>Does the angle from the hoop correspond with a difference in shooting accuracy?</li>
				</ol>
				</FullRowText>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/GameShotSelection.png'
							style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Does Practice Make Perfect.png'
							style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				To answer these questions, we used methods like t-tests, chi-square tests,
				correlations and regressions. Above are some example plots - in both scenarios
				each point represents a zone on the court. The first chart (Question 1) is showing the
				relationship between how often a single player shoots from a zone during a game,
				and their accuracy in the game (eFG% is an accuracy metric in basketball). The
				second chart (Question 5) is showing the relationship between the number of shot
				attempts from that zone during practice, and the player's accuracy in a game.
				</FullRowText>
				<div className="row">
					<div className="col-sm-6 d-flex align-items-center" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Initial Player Reports.png'
							style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Player A.jpg'
							style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				At the same time, we made pie charts for each player’s performance and actions. We wanted make these pie charts on a per-zone basis, but we couldn’t really visualize this well in Excel. This was when we started really learning how to code. The lady who ran the makerspace (which our school recently got) showed us how use a data visualization library: D3.js, and how to set up a desktop app using HTML, JavaScript, CSS, and Electron.js. After this we were off to the races, making visualizations like the following.
				</FullRowText>
				<FullRowImage src='project-assets/Basketball Project/Shooting Chart.png'/>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Team Breakdown.png'
							style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Team Decision Making.png'
							style={thirdPicStyle}/>
					</div>
				</div>
				<FullRowText>
				As we watched practice after practice and game after game, we found the Excel sheet was not the best way to quickly enter data for various players: each player had a different sheet, so we had to switch over to different pages quickly and find the right cell to enter stuff in. Many times we had to go back and rewatch the footage we recorded to enter the data properly. We decided to make a data input program to help us out.
				</FullRowText>
				<FullRowImage src='project-assets/Basketball Project/Data Input.png'/>
				<FullRowText>
				By chance, I watched the movie Moneyball, about the revolution of data in baseball. I still remember I couldn’t sleep that night. My mind was opened to a whole new set of possibilities and ideas. I was reading and reading about what sort of statistics they used, what sort of predictions, and how the quantified the game of baseball. I eventually found that someone had done somewhat of the same for basketball and so we read their book: Basketball on Paper by Dean Oliver. We tried to apply some of these techniques to our dataset, learning about multiple linear regression, effective field goal percentage, and a variety of basketball-specific stats. Through Coursera, we found a course titled “The Math behind Moneyball”, which we took and then learned about Monte Carlo Simulations.
				</FullRowText>
				<div className="row">
					<div className="col-sm-4" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Moneyball.jpg'
							style={firstPicStyle}/>
					</div>
					<div className="col-sm-4" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Basketball on Paper.jpg'
							style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Math Behind Moneyball.png'
							style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				We started to ask: could we simulate various plays and see which ones would be more likely to lead to points? We build an Excel spreadsheet that seemed so complicated but it created probability distributions from all of our data and then used them to create sequential simulations of entire games. The train went something like this:
				</FullRowText>
				<div className="row">
					<div className="col-sm-5" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Monte Carlo Distributions.png'
							style={secondPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<ol>
						<li>What’s the probability that each individual player gets the ball after tipoff? Randomly sample one player according to the historic distribution. </li>
						<li>What’s the probability that this player chooses to pass, shoot, or turns it over? Randomly sample according to the historic distribution.</li>
						<li>If he chooses to pass. What’s the probability that the pass is to each other player? Randomly sample according to the historic distribution.</li>
						<li>If he chooses to pass to player B, what’s the probability that the pass is completed? …</li>
						</ol>
					</div>
				</div>
				<FullRowImage src='project-assets/Basketball Project/Monte Carlo Sampling.png'/>
				<FullRowText>
				You get the idea. We can repeat these sorts of questions until some sort of terminating condition for the drive – turnover or score. Then we can repeat this based on historic number of drives in each game to get a simulation of our offense for a whole game. Repeat the game simulation 10000 times and you can see an estimate of the average points our team would score in a game. Mess around with some of the players’ shooting or passing accuracies and see how the game or season changes. The possibilities were endless and we were amazed by the capability of this approach, even though it may not be the most accurate representation of what was going on.
				</FullRowText>
				<div className="row">
					<div className="col-sm-8" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Monte Carlo Plays.png'
							style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/Monte Carlo Game Results.png'
							style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				We started incorporating all these functionalities into a desktop app: data entry, our visualizations, the simulations, and so on. After talking to some people on the basketball team and seeing what they currently used, we thought this might have the potential to be a really useful product. We started doing market research, looking at the competitor applications at the high-school/college level, as well as what the pros used: GameChanger, Hoopmath, Synergy, SportVU. We interviewed high school coaches, college coaches and assistants, software developers: any alumni we could reach out to from our high school.
				</FullRowText>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/District Poster.JPG'
							style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Basketball Project/ISEF Poster.JPG'
							style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				We worked on the app throughout the summer and even into college a little bit, but eventually the market started showing products that were similar to what we were thinking of. As we got busy with college, we sort of just stopped working on it. This was by far the most influential project and partnership to my academic development so far. It exposed me to the world of statistics, programming, entrepreneurship, and broadened my horizons of what I thought possible. 
				</FullRowText>
			</div>
		</div>
	)
}