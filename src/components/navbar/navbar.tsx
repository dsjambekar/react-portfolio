export const Navbar = () => {
	return (
		<div className="navbar navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">
						WebSiteName
					</a>
				</div>
				<ul className="nav navbar-nav">
					<li className="active">
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Page 1</a>
					</li>
					<li>
						<a href="#">Page 2</a>
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li>
						<a href="#">
							<span className="glyphicon glyphicon-user"></span>{" "}
							Sign Up
						</a>
					</li>
					<li>
						<a href="#">
							<span className="glyphicon glyphicon-log-in"></span>{" "}
							Login
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
