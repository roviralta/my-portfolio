import React from 'react'
import { MdWork, MdWorkOff } from 'react-icons/md'
import { experience } from '../../data/Experience'
import './Experience.css'

const Experience = () => {
	return (
		<section id='experience' className='section'>
			<div className='section-head'>
				<span className='eyebrow'>Career</span>
				<h2 className='section-title'>Experience</h2>
			</div>

			<ol className='timeline'>
				{experience.map((exp) => {
					const current = exp.time.toLowerCase().includes('present')
					return (
						<li className='timeline-item' key={`${exp.company}-${exp.name}`}>
							<div className='timeline-meta'>
								<span className='timeline-time'>{exp.time}</span>
							</div>
							<div className='timeline-marker' aria-hidden='true'>
								<span className={current ? 'timeline-node current' : 'timeline-node'}>
									{current ? <MdWork /> : <MdWorkOff />}
								</span>
							</div>
							<div className='timeline-body'>
								<h3 className='timeline-role'>{exp.name}</h3>
								<p className='timeline-company'>{exp.company}</p>
								<p className='timeline-desc'>{exp.description}</p>
							</div>
						</li>
					)
				})}
			</ol>
		</section>
	)
}

export default Experience