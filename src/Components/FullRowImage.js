export default function FullRowImage(props) {
	const secondPicStyle = {
		maxHeight: '90vh',
		maxWidth: '100%'
	};

	return (
		<div className="row">
			<div className="col">
				<img alt={props.alt} className="pt-4 pb-4 mx-auto d-block" src={props.src} style={secondPicStyle}/>
			</div>
		</div>
	);
}