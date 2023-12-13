import React, { useRef, useState } from 'react';
import './style.scss'; // You can create a separate CSS file for styling
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Search Job</a>
				<a href="/#">Post job</a>
				<a href="/#">User Dashboard</a>
				<a href="/#">Client Dashboard</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;