import React from 'react'
import './AboutMe.css'
import profile from '../../data/aboutme.webp'
import { descr } from '../../data/AboutMe'
import { BsPersonCircle } from 'react-icons/bs'

const AboutMe = () => {
	return (
		<section id='about-me'>
			<div className='about-title'>
				<BsPersonCircle id='about-icon' />
				<h1 id='title'>About me</h1>
			</div>
			<div className='about-me-desc'>
				<p>
					{descr.part1}
					<br></br>
					<br></br>
					{descr.part2}
					<br></br>
					<br></br> {descr.part3}
					<br></br>
					<br></br> {descr.part4}
				</p>
				<img src={profile} alt='not me another time' id='profile'></img>
			</div>
		</section>
	)
}

export default AboutMe
