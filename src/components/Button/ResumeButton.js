import React from 'react'
import './ResumeButton.css'

const ResumeButton = (props) => {
	function openLink() {
		window.open(props.link, '_blank')
	}

	return (
		<button id='about-button' onClick={openLink}>
			{props.icon && <props.icon className='icon' />}
			{props.descr}
		</button>
	)
}

export default ResumeButton
