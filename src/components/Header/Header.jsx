import React, { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'
import ThemeButton from '../ThemeButton/ThemeButton'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import './Header.css'

const NAV = [
	{ id: 'experience', label: 'Experience' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'about-me', label: 'About me' },
]

const ALL_IDS = ['about', ...NAV.map((n) => n.id), 'contact']

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const active = useScrollSpy(ALL_IDS)

	const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

	return (
		<header className='site-header'>
			<a className='skip-link' href='#about'>
				Skip to content
			</a>
			<div className='header-inner'>
				<a className='logo' href='#about' onClick={scrollTop} aria-label='Back to top'>
					SR
				</a>

				<nav
					className={`header-nav ${menuOpen ? 'open' : ''}`}
					aria-label='Primary'
				>
					{NAV.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className={active === item.id ? 'nav-link active' : 'nav-link'}
							onClick={() => setMenuOpen(false)}
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className='header-actions'>
					<ThemeButton />
					<button
						type='button'
						className='hamburger'
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((o) => !o)}
					>
						{menuOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header