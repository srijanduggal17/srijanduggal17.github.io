export default function FullRowText(props) {
	return (
		<div className="row" style={props.style ? props.style : null}>
			<div className="col mx-auto col-11 text-start d-flex fs-5 align-items-center pt-4">
				<p>{props.children}</p>
			</div>
		</div>
	);
}