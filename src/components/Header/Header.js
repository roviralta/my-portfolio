import React, { useState, useEffect } from 'react'
import HamHeader from './HamHeader'
import NormHeader from './NormHeader'

const Header = () => {
	const [isHam, setIsHam] = useState(window.innerWidth <= 675)

	useEffect(() => {
		const handleResize = () => {
			setIsHam(window.innerWidth <= 675)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return <div>{isHam ? <HamHeader /> : <NormHeader />}</div>
}

export default Header
