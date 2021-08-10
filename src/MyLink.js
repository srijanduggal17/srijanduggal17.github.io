import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MyLink extends React.Component {
	render() {
		const { location } = this.props;
		
		const currentClass = location.pathname === this.props.to ? 'nav-link active' : 'nav-link'
		
		return (
			<Link to={this.props.to}
				className={currentClass}
				exact={this.props.exact}>
					{this.props.children}
			</Link>
		)
	}
}

export default withRouter(MyLink);