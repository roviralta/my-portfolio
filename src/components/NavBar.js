import React from 'react'
import '../styles/navbar.css'

const NavBar = () => {
	return (
		<header>
			<nav className='navbar'>
				<ul className='nav-links'>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#experience'>Experience</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default NavBar
