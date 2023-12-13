import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className='mainmenu-nav'>
			<ul className='mainmenu'>
				<li className='menu-item-has-children'>
					<Link to={process.env.PUBLIC_URL + "/"}>Namai</Link>
				</li>
				<li className='menu-item-has-children'>
					<Link to={process.env.PUBLIC_URL + "/services"}>Paslaugos</Link>
				</li>
				<li className='menu-item-has-children'>
					<Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Atlikti Darbai</Link>
				</li>
				<li className='menu-item-has-children'>
					<Link to={process.env.PUBLIC_URL + "/about-us"}>Apie Mus</Link>
				</li>
				<li>
					<Link to={process.env.PUBLIC_URL + "/contact"}>Kontaktai</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
