import React from 'react'
import './About.css'
import pict from '../../data/image.avif'
import { about } from '../../data/About'
import ResumeButton from '../Button/ResumeButton'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { TbFileCv } from 'react-icons/tb'
import resume from '../../data/SergiRoviralta_CV.pdf'

const About = () => {
	return (
		<section id='about' aria-labelledby='about-title'>
			<div className='about-me'>
				<div className='about-picture'>
					<img
						src={pict}
						alt='Illustration representing {about.name}'
						id='portfolio-picture'
					/>
					<h1 id='title'>Hi, I am {about.name}.</h1>
				</div>
				<div className='about-text'>
					<h3>{about.role}.</h3>
					<p>{about.description}</p>
				</div>
				<div className='about-buttons'>
					<ResumeButton
						descr='CV'
						icon={TbFileCv}
						link={resume}
						aria-label='Download Resume'
					></ResumeButton>
					<ResumeButton
						descr='Linkedin'
						link={about.social.linkedin}
						icon={RiLinkedinBoxLine}
						aria-label='Visit LinkedIn Profile'
					></ResumeButton>
				</div>
			</div>
		</section>
	)
}

export default About
