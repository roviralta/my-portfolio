import React from 'react'
import './Header.css'
import HamHeader from './HamHeader'

const Header = () => {
	return (
		<>
			<header className='header'>
				<nav>
					<h1
						className='icon-button'
						onClick={() =>
							window.scrollTo({ top: 0, behavior: 'smooth' })
						}
					>
						SR
					</h1>
					<ul className='header-list'>
						<li>
							<a href='#about-me'>About me</a>
						</li>
						<li>
							<a href='#experience'>Experience</a>
						</li>
						<li>
							<a href='#projects'>Projects</a>
						</li>
						<li>
							<a href='#skills'>Skills</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
					<div className='ham-menu'>
						<HamHeader></HamHeader>
					</div>
				</nav>
			</header>
		</>
	)
}

export default Header
