import { about } from './About'
import { config } from './config'
import { experience } from './Experience'
import { projects } from './ProjectContainer'
import { skills } from './Skills'

const skillContext = new Map([
	['java', 'the daily driver for backend services and test automation'],
	['spring boot', 'Spring Boot for building and testing backend APIs'],
	['spring', 'Spring Boot for building and testing backend APIs'],
	['node', 'backend services and APIs'],
	['express', 'APIs and REST services with Node.js'],
	['react', 'front-end work — including the voting app and this very site'],
	['typescript', 'typed JavaScript across hybrid apps and front-end work'],
	['javascript', 'a core language across backend and frontend'],
	['sql', 'relational database queries and modeling'],
	['junit', 'unit and integration testing for Java'],
	['ionic', 'hybrid mobile apps (gallery + voting)'],
	['vue', 'the hybrid gallery app'],
	['solidity', 'Ethereum smart contracts for the voting app'],
	['python', 'backend scripting, tooling and quick prototypes'],
	['c', 'lower-level programming from the CS degree'],
	['git', 'version control, daily'],
	['linux', 'the daily dev environment'],
	['jira', 'ticketing and agile workflow'],
])

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const findTech = (q) => {
	for (const [key, ctx] of skillContext) {
		if (new RegExp(`\\b${escapeRegex(key)}\\b`, 'i').test(q)) return { key, ctx }
	}
	return null
}

const join = (...parts) => parts.filter(Boolean).join('\n')

const intentLines = (q) => {
	if (/^(hi|hello|hey|good (morning|afternoon|evening))\b/.test(q.trim()))
		return 'hi there! I\'m Sergi\'s offline assistant.\nask me about his skills, projects, experience or contact — or type "help".'
	if (/thank/.test(q)) return "you're welcome! type \"help\" if you need more."
	if (/\bhow (was|is).*(site|website|built)\b|built with|(this )?site\b/i.test(q))
		return 'this site runs on React + Vite with self-hosted fonts, zero UI libraries and an offline AI.\ntype "stack" to see the tech.'

	const needs = {
		role: {
			keys: ['what do you do', 'job title', 'role', 'profile'],
			lines: `${about.name} is a ${about.role} — currently a testing engineer on an international team, contributing as a backend developer.`,
		},
		experience: {
			keys: [
				'experience',
				'jobs',
				'career',
				'work',
				'worked',
				'positions',
				'seniority',
				't-systems',
				'transpais',
				'surf the web',
				'curriculum',
			],
			lines: experience
				.map(
					(e) =>
						`• ${e.name} — ${e.company} (${e.time})\n  ${e.description}`
				)
				.join('\n'),
		},
		voting: {
			keys: ['voting', 'vote', 'election', 'blockchain', 'smart contract'],
			lines: (() => {
				const p = projects.find((x) => x.name.includes('Voting'))
				return `• ${p.name}\n  ${p.description}\n  stack: ${p.skills_used.join(', ')}\n  ${p.link}`
			})(),
		},
		gallery: {
			keys: ['gallery', 'photos', 'camera', 'ionic app'],
			lines: (() => {
				const p = projects.find((x) => x.name.includes('Gallery'))
				return `• ${p.name}\n  ${p.description}\n  stack: ${p.skills_used.join(', ')}\n  ${p.link}`
			})(),
		},
		projects: {
			keys: ['projects', 'portfolio', 'apps', 'built a new'],
			lines: projects
				.map(
					(p) =>
						`• ${p.name}\n  ${p.description}\n  stack: ${p.skills_used.join(', ')}${p.link ? `\n  ${p.link}` : ''}`
				)
				.join('\n\n'),
		},
		stack: {
			keys: ['stack', 'skills', 'technologies', 'tech stack', 'languages', 'tools', 'know'],
			lines: skills
				.map((g) => `${g.group.padEnd(16)} ${g.items.join(' · ')}`)
				.join('\n'),
		},
		education: {
			keys: ['degree', 'college', 'university', 'education', 'study', 'studies', 'school', 'engineer'],
			lines: 'Bachelor\'s in Computer Science.\nCurrently studying a Master\'s in Artificial Intelligence.',
		},
		location: {
			keys: ['where', 'location', 'based', 'spain', 'barcelona', 'reus', 'tarragona', 'timezone', 'country', 'remote'],
			lines: 'Based near Barcelona, Spain — timezone Europe/Madrid (CET).\nFluent in Spanish, Catalan and English; happy to work across international teams.',
		},
		contact: {
			keys: ['contact', 'email', 'mail', 'reach', 'hire', 'recruit', 'linkedin', 'github'],
			lines: `email  : ${config.email}\ngithub : ${config.social.github}\nin/    : ${config.social.linkedin}`,
		},
		certification: {
			keys: ['certificate', 'certification', 'cert', 'accreditation'],
			lines: 'Bachelor\'s in Computer Science, and currently a Master\'s in Artificial Intelligence in progress.',
		},
		availability: {
			keys: ['open to work', 'available', 'looking for', 'job hunting'],
			lines: 'Not actively job-hunting right now, but always glad to talk — drop an email anytime.',
		},
	}

	let best = null
	let bestScore = 0
	for (const [name, intent] of Object.entries(needs)) {
		const score = intent.keys.reduce((s, k) => s + (q.includes(k) ? 1 : 0), 0)
		if (score > bestScore) {
			bestScore = score
			best = intent
		}
	}
	return best ? best.lines : null
}

const askAssistant = (question) => {
	const q = ` ${question.toLowerCase().replace(/[^a-z0-9 .-]/g, ' ')} `.replace(/\s+/g, ' ')

	const tech = findTech(q)
	if (tech) return join(`yes — ${tech.key} is in his toolkit.`, tech.ctx, 'type "stack" for the full list.')

	const intent = intentLines(q)
	if (intent) return intent

	return join(
		"I'm an offline intent-matching bot, so I know my own limits.",
		'Try: "what are your skills?", "tell me about the voting app", "do you use java?", "where are you based?" or "email".',
		'Or type "help" for the command list.'
	)
}

export { askAssistant }