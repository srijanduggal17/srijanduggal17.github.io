import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function SpotifyProjects(props) {
	const firstPicStyle = {
		maxHeight: '70vh',
		maxWidth: '100%'
	};

	const secondPicStyle = {
		maxHeight: '80vh',
		maxWidth: '100%'
	};

	return (
		<div>
			<ProjectHeading>Spotify Projects</ProjectHeading>
			<div className="w-100 container-fluid">
				<Subheading>OurMusic</Subheading>
				<FullRowText>
				This was my first project with the Spotify API, and it stemmed from one of
				my favorite ideas! Let’s say you and your friend both use Spotify and are
				going on a road trip together. You want to listen to music for some of the
				way. Wouldn’t it be great if you had a playlist of songs you both liked?
				OurMusic lets you and your friend log into Spotify and creates a playlist with
				all the songs that both of you have saved or that are in both of your playlists.
				The new playlist is automatically added to both of your accounts and you can
				now listen to shared music without any hassle!
				</FullRowText>
				<FullRowImage src='project-assets/Spotify Projects/OurMusic Homepage.png'
								alt='Image of Website Homepage' />
				<FullRowText>
				The was a fun project because it was a cool idea I had and I learned a lot! It
				was my first time working with APIs, and I learned about the power of using
				Promises in JS along with the common software patterns for them. I set up a
				NoSQL database and hosted my website through Firebase. A great foray into APIs
				and web development! My code can be found <a
				href='https://github.com/srijanduggal17/OurMusic'>here</a> on GitHub.
				</FullRowText>
				<Subheading>Music Recommender</Subheading>
				<FullRowText>
				For a final project in my Machine Learning course, I chose to tackle a
				classification problem: given information about songs that I have saved and
				not saved, tell me whether I would save a new unheard song. This was an
				interesting problem and I wanted to try to make something that could work.
				I listen to music in a way that enables this to happen: whenever I find a
				good song, I listen to the whole album. Fortunately, this lends itself easily
				to generating a dataset for this recommender: the dataset must include only
				songs that I have listened to, and there should be enough songs for each class
				label: saved, unsaved. 
				</FullRowText>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Spotify Projects/Audio Features.png'
							alt='audio features from spotify API'
							style={secondPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4" >
						<p>
						To construct the dataset, I did the following:
						<ol>
							<li>Obtain the songs I had listened to</li>
							<ul>
							<li>Get all songs I had saved (Spotify provides an endpoint to do so)</li>
							<li>Aggregated these songs by album to compute the total songs saved for each album</li>
							<li>Assumed that albums from which I have saved 2 or more songs are albums that I had fully listened to</li>
							<li>Get all the songs for those albums (Spotify provides an endpoint to do so)</li>
							</ul>
							<li>Find the label for each song</li>
							<ul>
							<li>From the list of all songs, label the songs I have saved as "saved"</li>
							<li>Label the rest as unsaved</li>
							</ul>
							<li>Find the features for each song (Spotify provides an endpoint to do so)</li>
						</ol>
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center pt-4">
						<p>
						Now that I had a dataset, I tried three different classifiers using
						Scikit Learn: Random Forest with Boosting, Support Vector Machines,
						and a Neural Network. I performed various experiments, tuned
						hyperparameters, and analyzed the results for each. In the figures are
						some results: overall performance using Precision as the evaluation
						metric, and the average confusion matrices for each algorithm. 
						</p>
					</div>
					<div className="col-sm-5" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Spotify Projects/Algorithm Comparison.png'
							alt='Algorithm comparison bar graphs'
							style={secondPicStyle}/>
					</div>
				</div>
				<FullRowImage src='project-assets/Spotify Projects/Confusion Matrices.png'
							alt='Algorithm comparison confusion matrices'/>
				<FullRowText>
				Overall I gained experience using machine learning to tackle a task all the way
				from dataset creation to final evaluation. I also learned how to use Scikit Learn
				and improved my Python skills, particularly using Numpy, Pandas, and visualizing.
				It was a fun way to apply my knowledge from the course! See here for the project
				requirements and my report. My code can be found <a
				href='https://github.com/srijanduggal17/SpotifyRecommender'>here</a> on GitHub.
				</FullRowText>
				<Subheading>Clustering for Playlist Generation</Subheading>
				<FullRowText>
				Throughout my machine learning class, I didn’t get much hands-on experience with
				unsupervised learning. I’ve always enjoyed music, had worked with the Spotify API
				before, and I had this idea to make playlists out of my music using unsupervised
				clustering methods. 
				</FullRowText>
				<div className="row">
					<div className="col-sm-6" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Spotify Projects/Audio Features.png'
							alt='audio features from spotify API'
							style={secondPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center pt-4" >
						<p>
						First, I needed to grab all of my saved songs and get some features for them.
				I used an API endpoint to get the IDs of all my saved songs, and then another
				endpoint to get features for each song ID. Once I had the dataset, I looked
				into two clustering algorithms: DBSCAN and Mean-Shift Clustering. I tuned each
				algorithm (subjectively by looking at the size of clusters, ie # of songs in
				each playlist, as well as my feeling about the cohesiveness of the playlist).
				Finally, I wrote a script to take the generated clusters and create playlists
				on my Spotify account with them. Here are some of the better ones!
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Spotify Projects/DBSCAN Result.png'
							alt='Example playlist from DBSCAN'
							style={firstPicStyle}/>
					</div>
					<div className="col-sm-4" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Spotify Projects/Mean Shift Result1.png'
							alt='Example playlist from mean shift algorithm'
							style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block"
							src='project-assets/Spotify Projects/Mean Shift Result2.png'
							alt='Example playlist 2 from mean shift algorithm'
							style={firstPicStyle}/>
					</div>
				</div>
				<FullRowText>
				Overall, this project was a lot of fun! It was simple and sweet – I enjoyed
				learning some clustering algorithms and applying them to something I care about.
				Out of pure luck and timing it was also stored in GitHub’s Arctic Code Vault
				which is a time capsule to preserve humanity’s history and is stored in the
				Arctic – totally random but feels like a part of history! My code can be found <a
				href='https://github.com/srijanduggal17/SpotifyClusterPlaylists'>here</a> on GitHub.
				</FullRowText>
				<Subheading>Clean Playlist Generator</Subheading>
				<FullRowText>
				I listen to many different types of music, some of which is explicit. I also don’t
				really make playlists; I just save songs that I like and then put my Spotify on
				shuffle. This is not ideal for family car rides, particularly the explicit music.
				So I thought, why not make a Spotify playlist of all my clean songs? I figured
				Spotify would have this feature already but they don’t, so I wrote a little
				Python script in Jupyter Notebook to do this for you. It goes through all of your
				saved songs on Spotify and then makes a playlist with just the clean ones.
				</FullRowText>
				<FullRowImage src='project-assets/Spotify Projects/CleanPlaylistGenerator.png'
							alt='Clean playlist generator'/>
			</div>
		</div>
	)
}