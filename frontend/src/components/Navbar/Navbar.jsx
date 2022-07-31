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

	let navbarClass = [styles.navbar];

	if (scroll) navbarClass = [styles.active];
	else navbarClass = [styles.navbar];

	return (
		<>
			<nav className={navbarClass}>
				<div className={styles.logo_container}>
					<Link to='/' className={styles.logo_link}>
						<h1>Drop Rate</h1>

						<img src={Logo} alt='logo' />
					</Link>
				</div>

				<ul>
					<li>
						<Link to='/shop'>Shop</Link>
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
