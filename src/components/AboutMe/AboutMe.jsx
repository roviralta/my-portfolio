import React from 'react'
import { descr } from '../../data/AboutMe'
import './AboutMe.css'

const SPECS = [
	['os', 'Spain (EU)'],
	['location', 'near Barcelona, Spain'],
	['timezone', 'Europe/Madrid (CET)'],
	['languages', 'Java · TypeScript · SQL · Bash'],
	['focus', 'backend · API design · testing'],
	['currently', 'Spring Boot · cloud essentials'],
	['status', 'building things that pass the tests'],
]

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

				<div className='about-me-card'>
					<p className='about-me-card-head'>
						<span className='about-me-card-user'>sergi-roviralta@sergi</span>
						<span className='about-me-card-sep' aria-hidden='true'>
							——— profile
						</span>
					</p>
					<dl className='about-me-spec'>
						{SPECS.map(([key, value]) => (
							<div className='about-me-row' key={key}>
								<dt>{key}</dt>
								<dd>{value}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	)
}

export default AboutMe