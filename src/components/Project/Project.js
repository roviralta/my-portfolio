import React from 'react'
import './Project.css'
import ResumeButton from '../Button/ResumeButton'
import { TbBrandGithub } from 'react-icons/tb'

const Project = ({ name, description, skills, link }) => {
	return (
		<div className='project' aria-labelledby={`${name}-title`}>
			<h3 id={`${name}-title`} className='nameProject'>
				{name}
			</h3>
			<p className='project-desc'>{description}</p>
			<div className='skills'>
				{skills.map((skill) => (
					<img
						id='skill'
						src={skill}
						alt='Skill of the project'
					></img>
				))}
			</div>
			<ResumeButton
				descr='Code'
				link={link}
				icon={TbBrandGithub}
				aria-label={`View ${name} on GitHub`}
			/>
		</div>
	)
}

export default Project
