import React, { useEffect, useRef } from 'react'
import './CommandPalette.css'

const CommandPalette = ({ open, items, selected, setSelected, onClose }) => {
	const listRef = useRef(null)

	useEffect(() => {
		if (!open || !listRef.current) return
		const el = listRef.current.querySelector('li[data-selected="true"]')
		el?.scrollIntoView({ block: 'nearest' })
	}, [open, selected])

	useEffect(() => {
		if (!open) return
		const onKeyDown = (e) => {
			if (e.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [open, onClose])

	if (!open) return null

	return (
		<div className='cmd-overlay' onClick={onClose}>
			<div
				className='cmd-palette'
				role='dialog'
				aria-label='Quick navigation'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='cmd-head'>
					<span className='cmd-mark' aria-hidden='true'>
						/
					</span>
					<span className='cmd-title'>Quick navigation</span>
					<span className='cmd-kbd'>
						<kbd>esc</kbd>
					</span>
				</div>
				<ul className='cmd-list' ref={listRef}>
					{items.map((item, i) => (
						<li
							key={item.label}
							data-selected={i === selected}
							className={`cmd-item ${i === selected ? 'selected' : ''}`}
							onMouseEnter={() => setSelected(i)}
							onClick={() => {
								item.action()
								onClose()
							}}
						>
							<span className='cmd-item-icon' aria-hidden='true'>
								{item.icon}
							</span>
							<span className='cmd-item-label'>{item.label}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default CommandPalette