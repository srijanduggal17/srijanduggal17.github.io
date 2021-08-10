import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function PowerCourses(props) {
	const thirdPicStyle = {
		height: '80vh',
		width: '100%'
	};

	return (
		<div>
			<ProjectHeading>Website for The Power Courses</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowImage alt='homepage' src='project-assets/Power Courses/Homepage.png'/>
				<FullRowText>
				During the summers of 2017 and 2018, I worked as an ACT/SAT tutor at a local
				business: The Power Courses. This was a 3-week long course that I went to as
				a high school student and it really helped my test scores. I really enjoy
				teaching; The previous summer I had taught math to 6th graders at
				Breakthrough New Orleans so I felt excited and capable to give back to the
				course. As a teacher, I learned a lot here about communication, motivation,
				and understanding when your students don’t understand. During my time there,
				after many conversations with Alex Gershanik (the owner and head teacher), I
				found that his website needed improvement. I had an interest in web development
				from a previous project and thought creating a better website would be a great
				opportunity to learn and help. I organized and wrote the content for the site,
				set up times for another teacher (who was a fantastic photographer) to take pictures,
				and developed the site. It was my first time fully making a site from scratch and
				hosting it, so I learned a lot. I also made a desktop tool for easy upload of new
				course schedules every season. This is a great place to get standardized test prep
				and Alex is a great guy to work with! See screenshots and a demo below. Visit the
				website <a
				href='https://thepowercourses.com/'>here</a>
				</FullRowText>
				<Subheading>Screenshots</Subheading>
				<FullRowImage alt='example page' src='project-assets/Power Courses/Example Page.png'/>
				<FullRowImage alt='example page ctnd'
					src='project-assets/Power Courses/Example Page ctnd.png'/>
				<Subheading>Demo</Subheading>
				<div className="row">
					<div className="col-sm-9 mx-auto d-flex align-items-center pb-4" >
						<iframe className="pt-4 d-block"
								title='website demo'
								src='https://www.youtube.com/embed/3-BniMOYxaU'
								style={thirdPicStyle}/>
					</div>
				</div>
			</div>
		</div>
	)
}