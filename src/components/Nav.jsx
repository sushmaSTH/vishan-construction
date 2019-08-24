import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const bars = <FontAwesomeIcon icon={faCoffee} />


function Nav() {
	return (
		<>
			<header id="header">
				<nav className="left">
					<a href="#menu"><span>Menu</span></a>
				</nav>
				<a href="index.html" className="logo">intensify</a>
				<nav className="right">
					{bars}
				</nav>
			</header>

			<nav id="menu">
				<ul className="links">
					<li><a href="index.html">Home</a></li>
					<li><a href="generic.html">Generic</a></li>
					<li><a href="elements.html">Elements</a></li>
				</ul>
				<ul className="actions vertical">

				</ul>
			</nav>
		</>
	);
}

export default Nav;
