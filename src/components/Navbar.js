import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
	return (
		<>
			<section>
				<div className='container'>
					<nav id='navbar'>
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
				</div>
			</section>
		</>
	)
}

export default Navbar
