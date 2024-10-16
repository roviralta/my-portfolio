import React from 'react'
import '../styles/projects.css'

const Projects = () => {
	const projects = ['hola']

	return (
		<section id='projects'>
			<div className='container'></div>
			<div className='pro'>
				<h4>Explore my</h4>
				<h1>Experience</h1>
			</div>
			<div className='projects-content'>
				{projects.map((job) => (
					<div key={projects.id} className='proj'>
						Project
					</div>
				))}
			</div>
		</section>
	)
}

export default Projects
