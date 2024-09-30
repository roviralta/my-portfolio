import React from 'react'
import '../styles/projects.css'
import profile from '../assets/1651657926797 - Copy.jpg'

const Projects = () => {
	return (
		<section id='projects'>
			<div className='container'>
				<div className='title'>
					<h1>Projects</h1>
				</div>
				<div className='diff-works'>
					<div className='cards'>
						<img
							className='img-projects'
							alt='project display'
							src={profile}
						></img>
						<h2 className='role'>Project n. 1</h2>
						<div className='tecnologies'>
							<h3>Javascript</h3>
							<h3>React</h3>
						</div>
						<p className='text2'>
							Built a responsive portfolio using React, CSS, and
							JavaScript to showcase my projects and skills.
							Features clean design, smooth navigation, and
							optimized performance for both desktop and mobile.
						</p>
					</div>
					<div className='cards'>
						<img
							className='img-projects'
							alt='project display'
							src={profile}
						></img>
						<h2 className='role'>Project n. 2</h2>
						<div className='tecnologies'>
							<h3>Javascript</h3>
							<h3>React</h3>
						</div>
						<p className='text2'>
							Built a responsive portfolio using React, CSS, and
							JavaScript to showcase my projects and skills.
							Features clean design, smooth navigation, and
							optimized performance for both desktop and mobile.
						</p>
					</div>
					<div className='cards'>
						<img
							className='img-projects'
							alt='project display'
							src={profile}
						></img>
						<h2 className='role'>Project n. 3</h2>
						<div className='tecnologies'>
							<h3>Javascript</h3>
							<h3>React</h3>
						</div>
						<p className='text2'>
							Built a responsive portfolio using React, CSS, and
							JavaScript to showcase my projects and skills.
							Features clean design, smooth navigation, and
							optimized performance for both desktop and mobile.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
