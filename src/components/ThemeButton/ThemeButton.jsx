import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import './ThemeButton.css'

const getInitialTheme = () => {
	if (typeof window === 'undefined') return 'light'
	const stored = localStorage.getItem('theme')
	if (stored === 'light' || stored === 'dark') return stored
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

const ThemeButton = () => {
	const [theme, setTheme] = useState(getInitialTheme)

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
	}

	const nextTheme = theme === 'dark' ? 'light' : 'dark'

	return (
		<button
			type='button'
			onClick={toggleTheme}
			id='theme'
			aria-label={`Switch to ${nextTheme} mode`}
			title={`Switch to ${nextTheme} mode`}
		>
			{theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
		</button>
	)
}

export default ThemeButton