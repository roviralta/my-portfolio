import React from 'react'
import './Header.css'
import HamHeader from './HamHeader'

const Header = () => {
	return (
		<>
			<header className='header'>
				<h1>SR</h1>
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
						<a href='#contact'>Contact</a>
					</li>
				</ul>
				<div className='ham-menu'>
					<HamHeader></HamHeader>
				</div>
			</header>
		</>
	)
}

export default Header
