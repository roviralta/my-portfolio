import React from 'react'
import './NormHeader.css'
import ThemeButton from '../ThemeButton/ThemeButton'

const NormHeader = () => {
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
							<a href='mailto:sergirovisu74@gmail.com'>Contact</a>
						</li>
					</ul>
					<ThemeButton></ThemeButton>
				</nav>
			</header>
		</>
	)
}

export default NormHeader
