import React from 'react'
import '../styles/profile.css'
import profile from '../assets/1651657926797 - Copy.jpg'

const Profile = () => {
	return (
		<section>
			<div id='about'>
				<div className='image'>
					<img id='logo' alt='Here I am' src={profile}></img>
					<button className='work'>Open to work</button>
				</div>

				<div className='title'>
					<h1>Hi, I'm Sergi Roviralta</h1>
					<p className='text'>
						Junior Full Stack Developer passionate about building
						innovative solutions and continuously learning. Eager to
						take on challenging projects and grow through hands-on
						experience.
					</p>
				</div>
				<div className='buttons'>
					<button className='work'>Contact me</button>
					<button className='work'>Linkedin</button>
				</div>
			</div>
		</section>
	)
}

export default Profile
