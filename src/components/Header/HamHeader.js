import React, { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'
import './HamHeader.css'
import ThemeButton from '../ThemeButton/ThemeButton'

const HamHeader = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header className='ham-container'>
			<h1
				className='icon-button'
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			>
				SR
			</h1>
			<div className='ham-button' onClick={toggleMenu}>
				{isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
			</div>
			<nav className={`ham-menu-list ${isOpen ? 'open' : ''}`}>
				<ul>
					<li>
						<a href='#about-me' onClick={toggleMenu}>
							About me
						</a>
					</li>
					<li>
						<a href='#experience' onClick={toggleMenu}>
							Experience
						</a>
					</li>
					<li>
						<a href='#projects' onClick={toggleMenu}>
							Projects
						</a>
					</li>
					<li>
						<a href='#skills' onClick={toggleMenu}>
							Skills
						</a>
					</li>
					<li>
						<a
							href='mailto:sergirovisu74@gmail.com'
							onClick={toggleMenu}
						>
							Contact
						</a>
					</li>
					<li>
						<ThemeButton></ThemeButton>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default HamHeader
