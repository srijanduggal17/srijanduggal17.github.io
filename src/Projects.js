import ProjectThumbnail from './ProjectThumbnail.js';
import { thumbnailInfo } from './project-data.js';

export default function Projects(props) {

	return (
		<div className="container-md">
			<div className="row">
				<ProjectThumbnail {...thumbnailInfo[0]}/>
				<ProjectThumbnail {...thumbnailInfo[0]}/>
				<ProjectThumbnail {...thumbnailInfo[0]}/>
				<ProjectThumbnail {...thumbnailInfo[0]}/>
				<ProjectThumbnail {...thumbnailInfo[0]}/>
			</div>
		</div>

	);
}