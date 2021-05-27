import { React } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions";


const Header = (props) => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(signout());
	};


	return (


		<div className="header">


			<div className="header-left">

				<h2>Mern</h2>

			</div>


			<div className="top-nav-search">
				<form>
					<input type="text" className="form-control" placeholder="Search here.." />
					<button className="btn" type="submit"><i className="fa fa-search"></i></button>
				</form>
			</div>


			<Link to="/" className="mobile_btn" id="mobile_btn">
				<i className="fa fa-bars"></i>
			</Link>

			<ul className="nav user-menu">


				<li className="nav-item dropdown noti-dropdown">
					<a href="haha" className="dropdown-toggle nav-link" data-toggle="dropdown">
						<i className="fa fa-bell"></i> <span className="badge badge-pill">1</span>
					</a>
					<div className="dropdown-menu notifications">
						<div className="topnav-dropdown-header">
							<span className="notification-title">Notifications</span>
							<Link to="/" className="clear-noti"> Clear All </Link>
						</div>
						<div className="noti-content">
							<ul className="notification-list">
								<li className="notification-message">
									<Link to="/" className="fa fa-home">
										<div className="media">

											<div className="media-body">
												<p className="noti-details"><span className="noti-title">James Bond</span> Orders <span className="noti-title">Order received, Thank you!</span></p>
												<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
											</div>
										</div>
									</Link>
								</li>

							</ul>
						</div>
						<div className="topnav-dropdown-footer">
							<span>View all Notifications</span>
						</div>
					</div>
				</li>


				<li className="nav-item dropdown has-arrow">
					<a href="haha" className="dropdown-toggle nav-link" data-toggle="dropdown">

						Welcome</a>
					<div className="dropdown-menu">
						<div className="user-header">

							<div className="user-text">
								<h6>Administrator</h6>

							</div>
						</div>
						<a className="dropdown-item" href="profile.php">My Profile</a>
						<a className="dropdown-item" href="settings.php">Settings</a>
						<li className="dropdown-item" onClick={logout}>Logout</li>
					</div>
				</li>


			</ul>


		</div>

	);
}
export default Header;

