import React, { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'
import './HamHeader.css'

const HamHeader = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='ham-container'>
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
						<a href='#contact' onClick={toggleMenu}>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default HamHeader
