import React, { useEffect, useRef, useState } from 'react'
import './Reveal.css'

const Reveal = ({ children, style }) => {
	const ref = useRef(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.12 }
		)
		observer.observe(el)
		return () => observer.disconnect()
	}, [])

	return (
		<div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`} style={style}>
			{children}
		</div>
	)
}

export default Reveal