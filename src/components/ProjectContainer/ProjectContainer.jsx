import React from 'react'
import Project from '../Project/Project'
import { projects } from '../../data/ProjectContainer'
import './ProjectContainer.css'

const ProjectContainer = () => {
	return (
		<section id='projects' className='section'>
			<div className='section-head'>
				<span className='eyebrow'>Selected work</span>
				<h2 className='section-title'>Projects</h2>
				<p className='section-sub'>
					A few things I built end to end — from UI to the logic underneath.
				</p>
			</div>

			<div className='projects-grid'>
				{projects.map((project) => (
					<Project key={project.name} project={project} />
				))}
			</div>
		</section>
	)
}

export default ProjectContainer