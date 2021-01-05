import ProjectThumbnail from './ProjectThumbnail.js';
import { projectInfo } from './project-data.js';

export default function Projects(props) {
	return (
		<div className="container-md ml-auto">
			<div className="row ml-auto">
				{projectInfo.map(x => <ProjectThumbnail {...x}/>)}
			</div>
		</div>

	);
}