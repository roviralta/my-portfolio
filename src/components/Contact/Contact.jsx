import React from 'react'
import { RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri'
import { TbMail } from 'react-icons/tb'
import ActionButton from '../Button/ActionButton'
import { config } from '../../data/config'
import './Contact.css'

const year = new Date().getFullYear()

const Contact = () => {
	return (
		<footer id='contact' role='contentinfo'>
			<div className='footer-top'>
				<p className='eyebrow'>Contact</p>
				<h2 className='footer-title'>Let&apos;s build something together</h2>
				<p className='footer-sub'>
					Have an idea, a role, or just a question? My inbox is open.
				</p>
				<div className='footer-actions'>
					<ActionButton
						label='Email me'
						href={`mailto:${config.email}`}
						icon={TbMail}
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

			<div className='footer-bottom'>
				<div className='footer-meta'>
					<p>© {year} Rovi. All rights reserved.</p>
					<p className='footer-built'>
						Built with React 19 + Vite · self-hosted fonts · no UI libraries
					</p>
				</div>
				<div className='footer-hint'>
					<p>
						Press <kbd>/</kbd> for quick navigation · <kbd>c</kbd> to copy my email
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Contact