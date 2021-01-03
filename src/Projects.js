import ProjectThumbnail from './ProjectThumbnail.js';
import { projectInfo } from './project-data.js';

export default function Projects(props) {
	return (
		<div className="container-md">
			<div className="row">
				{projectInfo.map(x => <ProjectThumbnail {...x}/>)}
			</div>
		</div>

	);
}