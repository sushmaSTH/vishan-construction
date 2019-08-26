import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const bars = <FontAwesomeIcon icon={faBars} />
const close = <FontAwesomeIcon icon={faTimes} />

function Nav() {
	const [diplayMobMenu, setDisplayMobMenu] = useState(null);
	function renderNav() {
		return (
			<ul>
				<li> <Link to="/">Home</Link></li>
				<li> <Link to="/project">Projects</Link></li>
				<li> <Link to="/about">About Us</Link></li>
			</ul>
		)
	}
	return (
		<header>
			<a href="index.html" className="logo">Vishan</a>
			<nav className="nav_mob hide_for_desktop">
				<span className="menu_bars " onClick={() => setDisplayMobMenu(!diplayMobMenu)}>{bars}</span>
				{diplayMobMenu ?
					<div className="nav_links">
						<span className="nav_links-close" onClick={() => setDisplayMobMenu(!diplayMobMenu)}>{close}</span>
						{renderNav()}
					</div>
					: ''}
			</nav>
			<nav className="nav_desktop hide_for_mobile">
				{renderNav()}
			</nav>
		</header>
	);
}

export default Nav;
