import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import './Project.css'

const Project = ({ project }) => {
	return (
		<article className='project-card'>
			<div className='project-head'>
				<h3 className='project-name'>{project.name}</h3>
				<a
					href={project.link}
					className='project-link'
					target='_blank'
					rel='noopener noreferrer'
					aria-label={`View ${project.name} on GitHub`}
					title='View source on GitHub'
				>
					<TbBrandGithub />
				</a>
			</div>

			<p className='project-desc'>{project.description}</p>

			<ul className='project-highlights'>
				{project.highlights.map((point) => (
					<li key={point}>
						<span className='highlights-arrow' aria-hidden='true' />
						{point}
					</li>
				))}
			</ul>

			<ul className='chips' aria-label='Technologies used'>
				{project.skills_used.map((skill) => (
					<li className='chip' key={skill}>
						{skill}
					</li>
				))}
			</ul>
		</article>
	)
}

export default Project