import React, { useState, useEffect } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import './ThemeButton.css'

const ThemeButton = () => {
	const [isDark, setIsDark] = useState(
		() => localStorage.getItem('theme') === 'dark'
	)

	useEffect(() => {
		if (isDark) {
			document.body.classList.add('darkmode')
			localStorage.setItem('theme', 'dark')
		} else {
			document.body.classList.remove('darkmode')
			localStorage.setItem('theme', 'light')
		}
	}, [isDark])

	const toggleTheme = () => {
		setIsDark((prev) => !prev)
	}

	return (
		<button onClick={toggleTheme} id='theme'>
			{isDark ? <MdDarkMode /> : <MdLightMode />}
		</button>
	)
}

export default ThemeButton
