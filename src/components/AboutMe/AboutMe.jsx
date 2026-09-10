import React from 'react'
import profile from '../../data/aboutme.avif'
import { descr } from '../../data/AboutMe'
import './AboutMe.css'

const AboutMe = () => {
	return (
		<section id='about-me' className='section about-me'>
			<div className='section-head'>
				<span className='eyebrow'>Person</span>
				<h2 className='section-title'>About me</h2>
			</div>

			<div className='about-me-grid'>
				<div className='about-me-copy'>
					<p className='about-me-lead'>{descr.part1}.</p>
					<p>{descr.part2}</p>
					<p>{descr.part3}</p>
					<p>{descr.part4}</p>
				</div>

				<figure className='about-me-figure'>
					<img src={profile} alt='Sergi Roviralta' loading='lazy' />
				</figure>
			</div>
		</section>
	)
}

export default AboutMe