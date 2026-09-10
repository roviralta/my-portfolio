import React from 'react'
import { skills } from '../../data/Skills'
import './SkillContainer.css'

const SkillContainer = () => {
	return (
		<section id='skills' className='section'>
			<div className='section-head'>
				<span className='eyebrow'>Toolbox</span>
				<h2 className='section-title'>Technical skills</h2>
			</div>

			<div className='skill-groups'>
				{skills.map((group) => (
					<div className='skill-group' key={group.group}>
						<h3 className='skill-group-label'>{group.group}</h3>
						<ul className='skill-chips'>
							{group.items.map((skill) => (
								<li className='skill-chip' key={skill}>
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}

export default SkillContainer