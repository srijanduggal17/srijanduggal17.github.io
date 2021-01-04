export default function Agent2048(props) {
	const firstRowStyle = {
		backgroundColor: '#f3b27a'
	};

	const secRowStyle = {
		backgroundColor: '#eee4da'
	};

	const thirdRowStyle = {
		backgroundColor: '#f77c5f'
	};

	const fourthRowStyle = {
		backgroundColor: '#eee1c9'
	};

	const firstPicStyle = {
		maxHeight: '60vh',
		maxWidth: '100%'
	};

	const firstRowTextStyle = {
		color: 'white'
	};

	const secRowTextStyle = {
		color: '#786e66'
	};

	const thirdPicStyle = {
		height: '80vh',
		width: '100%'
	};

	const thirdRowTextStyle = {
		color: 'white'
	};


	return (
		<div>
			<p className="text-center display-4 pt-2 pb-6">2048 Playing Agent</p>
			<div className="w-100 container-fluid">
				<div className="row" style={firstRowStyle}>
					<div className="col-sm-3">
						<img className="pt-4 pb-4 mx-auto d-block" src="project-assets/2048/2048 Game.png" style={firstPicStyle}/>
					</div>
					<div className="col text-center fs-4 fw-bold d-flex align-items-center" style={firstRowTextStyle}>
						<p>I made a bot to play this online game called 2048.
						I had it choose actions based on two sets of rules: 
						one that my friend and I came up with and one that it tried
						to learn using reinforcement learning.</p>
					</div>
				</div>
				<div className="row" style={secRowStyle}>
					<div className="col text-start fs-5 d-flex align-items-center pt-4" style={secRowTextStyle}>
						<p>When I was in high school, I used to play this game.
						The way it works is you have a tile area and the goal is
						to create a 2048 tile. You can press the left/right/up/down arrow keys,
						and when you do, each tile moves in the direction you pressed
						until it hits another tile. If it hits a tile of equal value,
						then the two tiles combine and the value doubles: when a 2 tile
						and a 2 tile collide, they become a 4 tile. Every time you move,
						a 2 or 4 tile is randomly added to the board.
						</p>
					</div>
					<div className="col-sm-4" >
						<img className="pt-4 mx-auto pb-4 d-block" src='https://thumbs.gfycat.com/ImpassionedShadyFlounder-small.gif' style={firstPicStyle}/>
					</div>
				</div>
				<div className="row" style={thirdRowStyle}>
					<div className="col-sm-6">
						<iframe className="pt-4 mx-auto pb-4 d-block"
								src='https://www.youtube.com/embed/H8oM8vUvROc'
								style={thirdPicStyle}/>
					</div>
					<div className="col text-start d-flex fs-5 align-items-center pt-4" style={thirdRowTextStyle}>
						<p>
						This was a common game amongst kids in my school, and after
						learning about reinforcement learning during my Deep Learning class,
						I thought it would be fun to make a bot that could play. I started by
						using <span className="fw-bold">Selenium</span> and <span className="fw-bold">Python</span> to scrape the game website, and to get the
						values of the tiles as well as the score. Once I had made a way to
						interact with the website using Python functions, I started working on
						two agents. The first agent played the game according to a set of rules
						that my friend and I created. The second agent played the game using a
						learned policy (from Deep Reinforcement Learning). My friend and I played
						many games and thought about what we would do in various situations to
						come up with rules to beat it. Eventually we were able to come up with a
						policy that almost guaranteed winning, at least as frequently as we would
						win if we were playing (see video).
						</p>
					</div>
				</div>
				<div className="row" style={fourthRowStyle}>
					<div className="col text-start fs-5">
						<p className="w-100 mx-auto pt-4">
						For the Reinforcement Learning agent, I used some
						convolution layers and a feed-forward neural network. For the reward
						function, I used the score and tried training the agent. After training
						for a while, it was able to do some moves that seemed like things my friend
						and I would do, but it lost well before reaching 2048. I didn’t have any
						experience in reinforcement learning at this time, so I wasn’t really
						sure how to move forward. Looking back on it now (I still haven’t
						gained any experience in reinforcement learning since then, but I
						have done more deep learning projects using convolutional neural
						networks), I think it needed more training time and potentially a
						different reward function. While I did not finish training a
						successful reinforcement learning agent, I was able to interact
						with the game website and use <span className="fw-bold">PyTorch</span> in real-time to play it, which to
						me was a success. One day I would like to revisit this and finish
						training an agent that can win!
						</p>
					</div>
				</div>
				<div className="row fs-5">
					<div className="col text-center pt-4">
						<p>The game can be found at <a href='https://play2048.co/'>https://play2048.co/</a></p>
					</div>
					<div className="col-sm-6 text-center pt-4 text-break">
						<p>GIF credits: <a href='https://gfycat.com/impassionedshadyflounder'>https://gfycat.com/impassionedshadyflounder</a></p>
					</div>
				</div>
			</div>
			<p></p>
		</div>
	);
}