import React from 'react'
import '../styles/about.css'
import rovi from '../assets/photo.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const About = () => {
	return (
		<section id='about'>
			<div className='container'>
				<div className='about-content'>
					<img
						className='profile-pic'
						src={rovi}
						alt='Sergi Roviralta'
					/>
					<div className='presentation'>
						<h4>Hi, I'm</h4>
						<h1>Sergi Roviralta</h1>
						<h3>Full Stack Developer</h3>
						<div className='buttons'>
							<a href='/cv.pdf' className='button' download>
								Download CV
							</a>
							<a href='#contact' className='button'>
								Contact Info
							</a>
						</div>
						<div className='about-icons'>
							<a
								href='https://linkedin.com'
								target='_blank'
								rel='noreferrer'
							>
								<FaLinkedin />
							</a>
							<a
								href='https://github.com'
								target='_blank'
								rel='noreferrer'
							>
								<FaGithub />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
