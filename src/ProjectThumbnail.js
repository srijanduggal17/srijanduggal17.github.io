import { Link, useRouteMatch } from 'react-router-dom';
import './ProjectThumbnail.css';

export default function ProjectThumbnail(props) {
	const { url } = useRouteMatch();

	const picStyle = {
		width: '100%'
	};

	return (
		<div className="col thumbcard">
			<Link to={`${url}/${props.projectURL}`}>
				<img src={`thumbnails/${props.imgPath}`} style={picStyle}/>
				<div className="thumbtext">
					<p className="text-center display-7 fs-4">{props.title}</p>
					<p className="text-center">{props.desc}</p>
					<p className="text-end fst-italic">{props.timeline}</p>
					<p className="bottom-align-text skills fw-bold">{props.skills.join(', ')}</p>
				</div>
			</Link>
		</div>
	);
}