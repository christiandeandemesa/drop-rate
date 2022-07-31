import {React, useState, useEffect} from 'react';
import {Link, Outlet} from 'react-router-dom';

import Logo from '../../assets/logo.png';

import styles from './Navbar.module.scss';

function Navbar() {
	const [scroll, setScroll] = useState(false);

	const scrollHandler = () => {
		const offset = window.scrollY;

		if (offset > 1) setScroll(true);
		else setScroll(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
	}, []);

	let navbarClasses = [styles.navbar];

	if (scroll) navbarClasses = [styles.active];
	else navbarClasses = [styles.navbar];

	return (
		<>
			<nav className={navbarClasses}>
				<div className={styles.logo_container}>
					<h1>Drop Rate</h1>

					<img src={Logo} alt='logo' />

					<Link to='/' />
				</div>

				<ul>
					<li>
						<a href='https://www.google.com/'>Dummy Link</a>
					</li>

					<li>
						<a href='https://www.google.com/'>Dummy Link</a>
					</li>

					<li>
						<a href='https://www.google.com/'>Dummy Link</a>
					</li>

					<li>
						<a href='https://www.google.com/'>Dummy Link</a>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Navbar;
