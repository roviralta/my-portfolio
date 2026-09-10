import React, { useState } from 'react'
import { TbCopy, TbCheck } from 'react-icons/tb'
import { skills } from '../../data/Skills'
import './SkillContainer.css'

const keyOf = (group) => group.toLowerCase().split(/[^a-z]+/)[0]

const stackText = () => {
	const obj = {}
	skills.forEach((g) => {
		obj[keyOf(g.group)] = g.items
	})
	return JSON.stringify(obj, null, 2)
}

const SkillContainer = () => {
	const [copied, setCopied] = useState(false)

	const copy = async () => {
		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(stackText())
			} else {
				const ta = document.createElement('textarea')
				ta.value = stackText()
				document.body.appendChild(ta)
				ta.select()
				document.execCommand('copy')
				ta.remove()
			}
			setCopied(true)
			setTimeout(() => setCopied(false), 1800)
		} catch {}
	}

	return (
		<section id='skills' className='section'>
			<div className='section-head'>
				<span className='eyebrow'>Toolbox</span>
				<h2 className='section-title'>Technical skills</h2>
			</div>

			<div className='stack-card'>
				<div className='stack-bar'>
					<span className='stack-path'>~/profile/dev/stack.json</span>
					<button
						type='button'
						className={copied ? 'stack-copy is-copied' : 'stack-copy'}
						onClick={copy}
						aria-label='Copy stack as JSON'
					>
						{copied ? <TbCheck aria-hidden='true' /> : <TbCopy aria-hidden='true' />}
						<span>{copied ? 'copied' : 'copy'}</span>
					</button>
				</div>

				<pre className='stack-pre'>
					<span className='stack-punct'>{'{'}</span>
					{skills.map((group, i) => (
						<div className='stack-row' key={group.group}>
							<span>{'  '}</span>
							<span className='stack-key'>"{keyOf(group.group)}"</span>
							<span className='stack-punct'>: [</span>
							{group.items.map((skill, j) => (
								<span key={skill}>
									<span className='stack-string'>"{skill}"</span>
									{j < group.items.length - 1 && <span className='stack-punct'>, </span>}
								</span>
							))}
							<span className='stack-punct'>]</span>
							{i < skills.length - 1 && <span className='stack-punct'>,</span>}
						</div>
					))}
					<span className='stack-punct'>{'}'}</span>
				</pre>
			</div>
		</section>
	)
}

export default SkillContainer