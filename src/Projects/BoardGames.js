import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function BoardGames(props) {
	const firstPicStyle = {
		maxHeight: '60vh',
		maxWidth: '100%'
	};

	const secondPicStyle = {
		maxHeight: '70vh',
		maxWidth: '100%'
	};

	const thirdPicStyle = {
		maxHeight: '85vh',
		maxWidth: '100%'
	};

	const fourthPicStyle = {
		maxHeight: '140vh',
		maxWidth: '100%'
	};

	return (
		<div>
			<ProjectHeading>Automated Board Game Deal Finder</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				So my roommate really enjoys playing different board games, and he
				has a collection of 30-40 games that he plays. He frequents various board
				game forums and groups to buy/sell/trade games. He knew that I had messed
				around with some web scraping projects and one day he realized that some
				of the forums he frequents have very structured formats in the post titles
				(see image).
				</FullRowText>
				<div className="row">
					<div className="col-sm-6">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Board Games/Reddit.png"
							style={thirdPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						Often, people put the title as the board game name and the price they
						are selling it for. He asked if it was possible for us to make an
						automated system that could find when there are good deals on games.
						I was intrigued and this was a good chance to get some hands-on
						experience with cloud services. In order to find good deals, we
						needed to periodically scrape this Reddit forum, extract the board
						game name and price, and compare it to some sort of historic price.
						Bill already used a website to see the price history of games he was
						interested in purchasing (CamelCamelCamel.com).
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						This website shows a lot of information and has the same layout
						for different games – we decided to use the Average and Low prices
						from Amazon. Now that we knew the information was available, we
						planned to set up a database of prices for a bunch of games. Bill
						said a good set of games to start with would be the BoardGameGeek
						top 1000 list. So I started by writing a script to go to their
						website and get the title and rank for each of the games, using
						Python with the Selenium and BeautifulSoup libraries. The site
						shows 100 games per page so I also had to have it iterate through
						10 pages.
						</p>
					</div>
					<div className="col-sm-6">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Board Games/CCC.png"
							style={fourthPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-7">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Board Games/BGG Top 100.png"
							style={thirdPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						Next, I wrote a script to loop through each of these titles and
						search them on CamelCamelCamel. I built in some logic for the
						scraper to check all the titles on the front page of the search
						and find the best match. Then it clicked on the best match and
						added the high/low price to a database I set up using AWS RDS. I
						had never set up a MySQL database before, nor had I set up anything
						in AWS so this was a fun way to get my hands dirty.
						</p>
					</div>
				</div>
				<FullRowText>
				Now that the games we wanted to look for were all in a database, I set out
				to make a real-time system. I used AWS Lambda and set up a script to run
				every 8hrs. The most recent post URL was stored in the database. The script
				would scrape the Reddit forum and find all the posts more recent than the
				current “recent post URL” saved in the database. Then I used a regular
				expression to extract the price of the game, and I set up some other logic
				to extract the title. This part is not perfect for titles that are not as
				well structured as “[GameNerdz] Adventure Games: The Dungeon – $10.47”. Once
				the key words in the title are found (words like “the”, “of”, “to” are ignored),
				I use a MySQL query with regular expressions to find matches to the title in
				our database. If there is a match, the prices are retrieved and sent to us in
				a group message. We chose GroupMe here because they make it really easy to
				set up a chatbot that you can use to programmatically send messages to a group.
				See the figure below for the overall system architecture diagram.
				</FullRowText>
				<FullRowImage src='project-assets/Board Games/Architecture.png'/>
				<FullRowText>
				Overall this was a lot of fun! It was nice to make something useful that
				my friend cared about, and get practice with a real-time system using AWS and
				web scraping. If you're wondering why MegaLand is the thumbnail for this page,
				it's because it's one of my favorite board games :)
				</FullRowText>
			</div>
		</div>
	);
}