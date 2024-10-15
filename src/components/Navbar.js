import React from 'react'
import '../styles/navbar.css'

const DesktopNavbar = () => {
	return (
		<section>
			<nav id='navbar'>
				<div className='logo'>Sergi Roviralta</div>
				<div>
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
				</div>
			</nav>
		</section>
	)
}

const Navbar = () => {
	return <DesktopNavbar></DesktopNavbar>
}

export default Navbar
