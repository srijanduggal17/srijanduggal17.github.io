import './ProjectThumbnail.css';

export default function ProjectThumbnail(props) {
	const picStyle = {
		width: '100%'
	};

	return (
		<div className="col thumbcard">
			<img src={`thumbnails/${props.imgPath}`} style={picStyle}/>
			<div className="thumbtext">
				<p className="text-center display-6">{props.title}</p>
				<p className="text-center">{props.desc}</p>
				<p className="text-end">{props.timeline}</p>
				<p className="bottom-align-text skills">{props.skills.join(', ')}</p>
			</div>
		</div>
	);
}