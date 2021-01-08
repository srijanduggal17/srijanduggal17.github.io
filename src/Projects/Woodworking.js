import Subheading from '../Components/Subheading.js';
import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function Woodworking(props) {
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
			<ProjectHeading>Woodworking Projects in High School</ProjectHeading>
			<div className="w-100 container-fluid">
				<FullRowText>
				During high school, I started learning how to build things out of wood, thanks to a Technical Theatre elective. In this class, we built the sets for the school plays, and I enjoyed this class so much that I retook it 5 times just so I could keep working with my hands. I was lucky to have an incredible teacher, Mr. Travis Stevens, who guided us and taught me so much.
				</FullRowText>
				<Subheading>Adirondack Chair, Senior Year</Subheading>
				<FullRowImage src='project-assets/Woodworking High School/Adirondack Chair.JPG'/>
				<Subheading>Bookshelf for Breakthrough New Orleans</Subheading>
				<FullRowText>
				The summer between my Junior and Senior year, I volunteered as a teaching fellow at Breakthrough New Orleans, a summer educational program and camp for underserved middle schoolers in New Orleans. As a class project during my senior year, I built a bookshelf for the program and got the help of my class in painting and decorating it. It was a gift to Breakthrough New Orleans from our class, and it was such a great thing to make!
				</FullRowText>
				<div className="row">
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Woodworking High School/BTNOLA Bookshelf 1.JPG' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Woodworking High School/BTNOLA Bookshelf 2.JPG' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Woodworking High School/BTNOLA Bookshelf 3.JPG' style={firstPicStyle}/>
					</div>
				</div>
				<Subheading>Genetics Course Final Project</Subheading>
				<FullRowText>
				I took a Genetics course in which the final project was to research a genetic disorder and make some sort of presentation for it. The disorder I picked was Jeune Asphyxiating Thoracic Dystrophy, which impairs bone growth. One place where it can have a severe impact is in the ribcage, reducing lung capacity. As a demo, I made a model of some normal sized and impaired ribcages to show the limited lung capacity.
				</FullRowText>
				<div className="row">
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Woodworking High School/JATD Spine.jpg' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Woodworking High School/JATD Lungs.jpg' style={firstPicStyle}/>
					</div>
					<div className="col-md-6 mx-auto d-flex align-items-center" >
						<iframe className="pt-4 d-block"
								src='https://www.youtube.com/embed/dvE-jLCVdtY'
								style={fourthPicStyle}/>
					</div>
				</div>
				<Subheading>Bookshelf Hidden Door</Subheading>
				<div className="row">
					<div className="col-sm-5 mx-auto text-start fs-5 d-flex align-items-center pt-4">
						<p>
						During my senior year, one of my friends was making a room in his house into sort of a poker room. We built this door/bookshelf for him that had hinges and served as a sort of hidden door that looked like a bookshelf. This was a great time and a fun thing to make with friends!
						</p>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Woodworking High School/Clayton Bookshelf.jpg' style={firstPicStyle}/>
					</div>
					<div className="col" >
						<img className="pt-4 mx-auto pb-4 d-block" src='project-assets/Woodworking High School/Clayton and Miles bookshelf.JPG' style={firstPicStyle}/>
					</div>
				</div>
			</div>
		</div>
	)
}