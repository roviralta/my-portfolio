import React, { useEffect, useState } from 'react'
import { RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri'
import { TbFileCv, TbRotateClockwise } from 'react-icons/tb'
import ActionButton from '../Button/ActionButton'
import { about } from '../../data/About'
import { config } from '../../data/config'
import { stats } from '../../data/Stats'
import resume from '../../data/SergiRoviralta_CV.pdf'
import './Hero.css'

const LINES = [
	{ type: 'cmd', text: 'whoami' },
	{ type: 'out', text: 'sergi-roviralta · junior software engineer' },
	{ type: 'cmd', text: 'cat /dev/stack' },
	{ type: 'out', text: '{ "backend": ["java","spring boot","node"], "frontend": ["react"] }' },
]

const TYPING_MS = 48
const GAP_MS = 420

const Hero = () => {
	const [lineIndex, setLineIndex] = useState(0)
	const [charCount, setCharCount] = useState(0)
	const [runKey, setRunKey] = useState(0)

	useEffect(() => {
		if (lineIndex >= LINES.length) return

		const line = LINES[lineIndex]
		let timer

		if (line.type === 'cmd') {
			if (charCount < line.text.length) {
				timer = setTimeout(() => setCharCount((c) => c + 1), TYPING_MS)
			} else {
				timer = setTimeout(() => {
					setLineIndex((i) => i + 1)
					setCharCount(0)
				}, GAP_MS)
			}
		} else {
			timer = setTimeout(() => {
				setLineIndex((i) => i + 1)
				setCharCount(0)
			}, GAP_MS)
		}

		return () => clearTimeout(timer)
	}, [lineIndex, charCount, runKey])

	const replay = () => {
		setRunKey((k) => k + 1)
		setLineIndex(0)
		setCharCount(0)
	}

	const done = lineIndex >= LINES.length

	return (
		<section id='about' className='hero'>
			<div className='hero-text'>
				<span className='hero-availability'>
					<span className='availability-dot' aria-hidden='true' />
					Open to work
				</span>

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
				<div className='terminal' aria-label='Terminal with a summary of who I am'>
					<div className='terminal-bar'>
						<span className='terminal-dot red' />
						<span className='terminal-dot amber' />
						<span className='terminal-dot green' />
						<span className='terminal-title'>~/profile</span>
						<button
							type='button'
							className='terminal-replay'
							onClick={replay}
							aria-label='Replay terminal animation'
							title='Replay'
						>
							<TbRotateClockwise />
						</button>
					</div>
					<div className='terminal-body'>
						{LINES.slice(0, lineIndex).map((line, i) => (
							<div
								key={i}
								className={line.type === 'cmd' ? 'term-line cmd' : 'term-line out'}
							>
								{line.type === 'cmd' && <span className='term-prompt'>❯</span>}
								<span>{line.text}</span>
							</div>
						))}
						{lineIndex < LINES.length && (
							<div className='term-line cmd'>
								<span className='term-prompt'>❯</span>
								<span>
									{LINES[lineIndex].type === 'cmd'
										? LINES[lineIndex].text.slice(0, charCount)
										: ''}
									<span className='term-cursor' aria-hidden='true' />
								</span>
							</div>
						)}
						{lineIndex >= LINES.length && (
							<div className='term-line cmd'>
								<span className='term-prompt'>❯</span>
								<span className='term-cursor' aria-hidden='true' />
							</div>
						)}
						{done && <div className='term-status'>— ready for new challenges</div>}
					</div>
				</div>
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