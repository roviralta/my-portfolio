import React from 'react'
import '../styles/experience.css'

const Experience = () => {
	const jobs = [
		{
			id: 1,
			title: 'Junior Full Stack Developer',
			company: 'Tech Company',
			date: 'Jan 2023 - Present',
			description:
				'Developing and maintaining web applications using React and Node.js.',
		},
		{
			id: 2,
			title: 'Intern Software Developer',
			company: 'Another Tech Company',
			date: 'Jun 2022 - Dec 2022',
			description:
				'Assisted in developing features for a web application using JavaScript and Python.',
		},
		{
			id: 3,
			title: 'Frontend Developer',
			company: 'Creative Solutions Inc.',
			date: 'Jan 2022 - May 2022',
			description:
				'Collaborated with the design team to implement user-friendly interfaces and optimize performance for responsive web applications.',
		},
	]

	return (
		<section id='experience'>
			<div className='container'>
				<div className='exp'>
					<h4>Explore my</h4>
					<h1>Experience</h1>
				</div>
				<div className='experience-content'>
					{jobs.map((job) => (
						<div key={job.id} className='job'>
							<h2 className='job-title'>{job.title}</h2>
							<p className='job-company'>{job.company}</p>
							<p className='job-date'>{job.date}</p>
							<p className='job-description'>{job.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience
