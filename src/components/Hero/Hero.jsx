import React from 'react'
import { RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri'
import { TbFileCv } from 'react-icons/tb'
import ActionButton from '../Button/ActionButton'
import Terminal from '../Terminal/Terminal'
import { about } from '../../data/About'
import { config } from '../../data/config'
import { stats } from '../../data/Stats'
import resume from '../../data/SergiRoviralta_CV.pdf'
import './Hero.css'

const Hero = () => {
	return (
		<section id='about' className='hero'>
			<div className='hero-text'>
				<h1 className='hero-name'>
					Hi, I&apos;m <span className='hero-name-accent'>{about.name}</span>.
				</h1>
				<p className='hero-role'>{about.role}.</p>

				<p className='hero-desc'>{about.description}</p>

				<div className='hero-actions'>
					<ActionButton
						label='Download CV'
						href={resume}
						icon={TbFileCv}
						variant='primary'
					/>
					<ActionButton
						label='LinkedIn'
						href={config.social.linkedin}
						icon={RiLinkedinBoxLine}
					/>
					<ActionButton
						label='GitHub'
						href={config.social.github}
						icon={RiGithubLine}
					/>
				</div>
			</div>

			<div className='hero-side'>
				<Terminal />
			</div>

			<ul className='stats' aria-label='Highlights'>
				{stats.map((stat) => (
					<li className='stat' key={stat.label}>
						<span className='stat-value'>{stat.value}</span>
						<span className='stat-label'>{stat.label}</span>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Hero