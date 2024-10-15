import React from 'react'
import '../styles/about.css'
import rovi from '../assets/photo.jpg'

const About = () => {
	return (
		<section id='about'>
			<div className='container'>
				<div className='about-div'>
					<img id='rovi' src={rovi} alt='This is me!' />
					<div className='presentation'>
						<h4>Hi, I'm</h4>
						<h1>Sergi Roviralta</h1>
						<h3>Full Stack Developer</h3>
						<div className='buttons'>
							<button>Download CV</button>
							<button>Contact Info</button>
						</div>
						<div
							className='
						about-icons'
						>
							<img src='' alt='Linkedin icon' />
							<img src='' alt='Github icon' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
