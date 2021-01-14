import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function HomeValueForecasting(props) {
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
		height: '80vh',
		maxWidth: '100%'
	};

	return (
		<div>
			<ProjectHeading>Home Value Forecasting</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				This was a final team project for a Deep Learning course, and I learned a 
				lot about aggregating a dataset, formatting it for use in a deep learning
				task, and implementing/training a deep learning model in PyTorch. Our goal was
				to use socioeconomic time series data at the county, state, and country level
				to predict average home values within a county. The target variable was the
				Zillow Home Value Index, and the features were derived from the St. Louis
				Federal Reserve Bank’s FRED API. We were interested in applying Recurrent
				Neural Networks and Long-Short Term Memory (LSTM) Networks to this problem.
				The majority of my effort was focused on dataset aggregation and formatting,
				and some of it was on model training and analysis. 
				</FullRowText>
				<Subheading>Dataset Creation</Subheading>
				<FullRowText>
				There was a lot of data that we needed to retrieve, as deep learning models
				require large datasets. We started by browsing the FRED website for what kind
				of information they had. We found they had various series at the state, country,
				and county level.
				</FullRowText>
				<div className="row">
					<div className='col-sm-6 d-flex align-items-center'>
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/FRED State Level Data.png"
							style={secondPicStyle}/>
					</div>
					<div className='col-sm-6 d-flex align-items-center'>
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/FRED County Level Data.png"
							style={secondPicStyle}/>
					</div>		
				</div>
				<FullRowText>
				Once we got a feel for what they had, I started browsing their API. I was able to
				get a list of states and their ids in the database, and then the counties within
				each state.
				</FullRowText>
				<div className="row">
					<div className='col-sm-6 d-flex align-items-center'>
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/FRED States.png"
							style={thirdPicStyle}/>
					</div>
					<div className='col-sm-6 d-flex align-items-center'>
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/FRED County.png"
							style={thirdPicStyle}/>
					</div>		
				</div>
				<FullRowText>
				Then we moved on to the available series in each county and finally to the raw
				data for a single series.
				</FullRowText>
				<div className="row">
					<div className='col-sm-5 d-flex align-items-center'>
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/FRED County Series.png"
							style={thirdPicStyle}/>
					</div>
					<div className='col-sm-7 d-flex align-items-center'>
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/FRED Series.png"
							style={thirdPicStyle}/>
					</div>		
				</div>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						Now that I knew how to navigate through their database, I started pulling all
						the counties available to us and the corresponding series names. I used Pandas
						to store the data in a structured way that made it easy to perform various
						transformations and aggregations. I looked into the names more closely and
						found that some had the county name in them while others didn’t:
						</p>
					</div>
					<div className="col-sm-6">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/Series with County Name.png"
							style={firstPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/Series Aggregate.png"
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						After removing the county names so that the series name was consistent
						across counties, I aggregated the number of series with each name.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						Next was to filter down a date range. We wanted our features on a monthly basis, so we were looking for as many years of data as possible that were shared across series. After filtering that down to the range of 2010-2017, I was left with the counts shown.
						</p>
					</div>
					<div className="col-sm-7">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/Choosing Date Range.png"
							style={firstPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-7">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/Choosing Counties.png"
							style={firstPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						I noticed that some features were not shared across all counties;
						After dropping all counties that didn’t have every feature,
						I was left with 1985 counties for 73 features. 
						</p>
					</div>
				</div>
				<FullRowText>
				Out of this list, we as a group eliminated features we thought were unnecessary
				/ duplicated and noted which features would need some transformations to be
				amicable for our models. Then we scraped all the actual observations for each
				series in each county, as well as various series at the state and national
				level. Once we had the data for each feature on a monthly basis, after applying
				our noted transformations, we constructed the training dataset.
				</FullRowText>
				<Subheading>Model Training and Results</Subheading>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						We created 6 model types we wanted to test. Each model would be
						trained on instances of either 12 or 24 months of data and then
						try to predict the Zillow Home Value Index for the next 1, 3, or 6 months.
						</p>
					</div>
					<div className="col-sm-6">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/dataset.png"
							style={firstPicStyle}/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/model comparison.png"
							style={secondPicStyle}/>
					</div>
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						We created RNN/LSTM models using PyTorch, and then trained/tuned/evaluated
						them. Time was limited and the project focus was on our
						implementation more than researching prior methods, so the baseline
						model we compare our results to is pretty simple and there are likely
						better methods in use.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col text-start fs-5 d-flex align-items-center">
						<p>
						The overall results for both our models were pretty good, achieving a
						mean absolute percentage error of about 12%. The actual time series
						forecast is also shown, which was pretty awesome as well.
						</p>
					</div>
					<div className="col-sm-7">
						<img className="pt-4 pb-4 mx-auto d-block"
							src="project-assets/Home Value Forecasting/time series tracking.png"
							style={fourthPicStyle}/>
					</div>
				</div>
				<FullRowText>
				Overall, this project gave me a lot of hands-on experience: combining data 
				from multiple sources, cleaning data, aggregating/formatting it into a usable
				format for deep learning, and training/analyzing time-series models. See our
				paper <a href='project-assets/Home Value Forecasting/Final_Report.pdf'>here</a>,
				and see our code <a href='https://github.com/srijanduggal17/HousingPredictions'>
					here</a> on Github.
				</FullRowText>
			</div>
		</div>
	);
}