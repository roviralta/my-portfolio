import React from 'react'
import './ActionButton.css'

const ActionButton = ({ label, href, icon: Icon, variant = 'ghost', onClick }) => {
	const className = `action-btn ${variant === 'primary' ? 'primary' : 'ghost'}`

	if (href) {
		return (
			<a
				href={href}
				className={className}
				target='_blank'
				rel='noopener noreferrer'
				onClick={onClick}
				data-call-to-action
			>
				{Icon && <Icon className='action-btn-icon' aria-hidden='true' />}
				{label}
			</a>
		)
	}

	return (
		<button type='button' className={className} onClick={onClick}>
			{Icon && <Icon className='action-btn-icon' aria-hidden='true' />}
			{label}
		</button>
	)
}

export default ActionButton