import React, { useEffect, useRef, useState } from 'react'
import { TbRotateClockwise } from 'react-icons/tb'
import { about } from '../../data/About'
import { config } from '../../data/config'
import { experience } from '../../data/Experience'
import { projects } from '../../data/ProjectContainer'
import { skills } from '../../data/Skills'
import { askAssistant } from '../../data/assistant'
import resume from '../../data/SergiRoviralta_CV.pdf'
import './Terminal.css'

const SCRIPT = [
	{ kind: 'cmd', text: 'whoami' },
	{
		kind: 'out',
		text: `${about.name} — ${about.role}\nbackend · testing · clean code`,
	},
	{ kind: 'cmd', text: 'cat /dev/stack' },
	{
		kind: 'out',
		text: 'backend  ["java","spring boot","node"]\nfrontend ["react"]\nlangs    ["javascript","typescript"]',
	},
]

const HELP = `available commands
  help      show this list
  whoami    about me
  stack     tech stack (json)
  time      live clock · Europe/Madrid
  github    live github stats
  contact   email + profiles
  cv        download cv
  ai <q>    ask the offline assistant
  clear     clear the screen`

const isReducedMotion = () =>
	typeof window !== 'undefined' &&
	(window.matchMedia('(prefers-reduced-motion: reduce)').matches || false)

const fmtClock = (d) =>
	`${new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', day: '2-digit', month: 'short', year: 'numeric' }).format(d)} · ${new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(d)} (Europe/Madrid)`

const linkify = (text) =>
	text.split(/(\s+)/).map((tok, i) =>
		/^https?:\/\/\S+$/.test(tok) ? (
			<a key={i} href={tok} target='_blank' rel='noreferrer'>
				{tok}
			</a>
		) : (
			<span key={i}>{tok}</span>
		)
	)

const stackText = () => {
	const obj = {}
	skills.forEach((g) => {
		obj[g.group] = g.items
	})
	return JSON.stringify(obj, null, 2)
}

const experiencesText = () =>
	experience
		.map((e) => `• ${e.name} — ${e.company} (${e.time})\n  ${e.description}`)
		.join('\n')

const projectsText = () =>
	projects
		.map(
			(p) =>
				`• ${p.name}\n  ${p.description}\n  ${p.skills_used.join(', ')}${p.link ? `\n  ${p.link}` : ''}`
		)
		.join('\n\n')

const Terminal = () => {
	const [mode, setMode] = useState(() => (isReducedMotion() ? 'live' : 'intro'))
	const [entries, setEntries] = useState(() =>
		isReducedMotion() ? SCRIPT.map((s, i) => ({ ...s, uid: i })) : []
	)
	const [typing, setTyping] = useState(null)
	const [input, setInput] = useState('')
	const [kick, setKick] = useState(0)
	const [now, setNow] = useState(() => new Date())

	const introIdx = useRef(isReducedMotion() ? SCRIPT.length : 0)
	const pending = useRef([])
	const uid = useRef(isReducedMotion() ? SCRIPT.length : 0)
	const clockId = useRef(null)
	const past = useRef([])
	const pastIdx = useRef(-1)
	const bodyRef = useRef(null)
	const inputRef = useRef(null)

	useEffect(() => {
		if (mode === 'live') inputRef.current?.focus()
	}, [mode])

	useEffect(() => {
		const t = setInterval(() => {
			setNow(new Date())
			if (clockId.current != null) {
				const text = fmtClock(new Date())
				setEntries((es) =>
					es.map((e) => (e.uid === clockId.current ? { ...e, text } : e))
				)
			}
		}, 1000)
		return () => clearInterval(t)
	}, [])

	useEffect(() => {
		if (bodyRef.current) {
			bodyRef.current.scrollTop = bodyRef.current.scrollHeight
		}
	}, [entries, typing, input])

	useEffect(() => {
		if (typing) {
			const timer = setTimeout(
				() => {
					if (typing.count < typing.text.length) {
						setTyping((t) => ({ ...t, count: t.count + 1 }))
					} else {
						setEntries((es) => [
							...es,
							{ kind: typing.kind, text: typing.text, uid: uid.current++ },
						])
						setTyping(null)
					}
				},
				typing.kind === 'cmd' ? 38 : 16
			)
			return () => clearTimeout(timer)
		}

		if (mode === 'intro') {
			if (introIdx.current < SCRIPT.length) {
				setTyping({ ...SCRIPT[introIdx.current++], count: 0 })
			} else {
				setMode('live')
			}
			return
		}

		if (pending.current.length) {
			setTyping({ ...pending.current.shift(), count: 0 })
		}
	}, [typing, mode, kick])

	const queueType = (entry) => {
		pending.current.push(entry)
		setKick((k) => k + 1)
	}

	const restart = () => {
		setEntries([])
		setTyping(null)
		pending.current = []
		clockId.current = null
		introIdx.current = 0
		uid.current = 0
		setMode('intro')
	}

	const runGithub = async () => {
		queueType({ kind: 'out', text: 'fetching live stats from api.github.com …' })
		try {
			const res = await fetch('https://api.github.com/users/roviralta')
			if (!res.ok) throw new Error(String(res.status))
			const u = await res.json()
			queueType({
				kind: 'out',
				text: `user     : ${u.login}\nrepos    : ${u.public_repos}\nfollowers: ${u.followers}\ngists    : ${u.public_gists}\nsource   : ${u.html_url}\nbio      : ${u.bio || '(no bio)'}`,
			})
		} catch {
			queueType({ kind: 'sys', text: '! API rate-limited or unreachable — try again later.' })
		}
	}

	const startClock = () => {
		clockId.current = uid.current
		setEntries((es) => [
			...es,
			{ kind: 'out', text: fmtClock(now), uid: clockId.current },
		])
		uid.current += 1
	}

	const runCommand = (raw) => {
		const cmd = raw.trim()
		if (!cmd) return

		setEntries((es) => [...es, { kind: 'cmd', text: cmd, uid: uid.current++ }])
		past.current.unshift(cmd)
		pastIdx.current = -1

		const [name, ...rest] = cmd.split(/\s+/)
		const arg = rest.join(' ')
		switch (name.toLowerCase()) {
			case 'help':
				queueType({ kind: 'out', text: HELP })
				break
			case 'whoami':
				queueType({
					kind: 'out',
					text: `${about.name} — ${about.role}\n${about.description}`,
				})
				break
			case 'stack':
				queueType({ kind: 'out', text: stackText() })
				break
			case 'time':
				startClock()
				break
			case 'github':
				runGithub()
				break
			case 'contact':
				queueType({
					kind: 'out',
					text: `email : ${config.email}\ngithub: ${config.social.github}\nin/   : ${config.social.linkedin}`,
				})
				break
			case 'cv':
				queueType({ kind: 'out', text: `download → ${resume}` })
				break
			case 'ai':
			case 'ask':
				if (!arg) {
					queueType({ kind: 'sys', text: 'usage: ai <question>  (e.g. "ai what are your skills?")' })
				} else {
					queueType({ kind: 'sys', text: '[offline-ai] matching your question locally — nothing leaves the browser.' })
					queueType({ kind: 'out', text: askAssistant(arg) })
				}
				break
			case 'clear':
				setEntries([])
				pending.current = []
				clockId.current = null
				break
			case 'hi':
			case 'hello':
			case 'hey':
				queueType({ kind: 'out', text: "hi! this is an interactive terminal.\ntype \"help\" to see what you can do here." })
				break
			case 'experience':
				queueType({ kind: 'out', text: experiencesText() })
				break
			case 'projects':
				queueType({ kind: 'out', text: projectsText() })
				break
			default:
				queueType({ kind: 'sys', text: `command not found: ${name} — type "help" for the command list.` })
		}
		setInput('')
	}

	const onKeyDown = (e) => {
		if (e.key === 'ArrowUp') {
			e.preventDefault()
			if (!past.current.length) return
			pastIdx.current = (pastIdx.current + 1) % past.current.length
			setInput(past.current[pastIdx.current])
		} else if (e.key === 'ArrowDown') {
			e.preventDefault()
			if (!past.current.length) return
			pastIdx.current = pastIdx.current <= 0 ? -1 : pastIdx.current - 1
			setInput(pastIdx.current === -1 ? '' : past.current[pastIdx.current])
		}
	}

	return (
		<div className='terminal' role='log' aria-label='Interactive terminal — type help to see the commands'>
			<div className='terminal-bar'>
				<span className='terminal-dot red' />
				<span className='terminal-dot amber' />
				<span className='terminal-dot green' />
				<span className='terminal-title'>~/profile — interactive</span>
				<button
					type='button'
					className='terminal-replay'
					onClick={restart}
					aria-label='Replay terminal animation'
					title='Replay'
				>
					<TbRotateClockwise />
				</button>
			</div>

			<div className='terminal-body' ref={bodyRef}>
				{entries.map((en) =>
					en.kind === 'cmd' ? (
						<div className='term-line cmd' key={en.uid}>
							<span className='term-prompt'>❯</span>
							<span>{en.text}</span>
						</div>
					) : (
						<div
							className={en.kind === 'out' ? 'term-line out' : 'term-line sys'}
							key={en.uid}
						>
							{linkify(en.text)}
						</div>
					)
				)}

				{typing && (
					<div className={typing.kind === 'cmd' ? 'term-line cmd' : 'term-line out'}>
						{typing.kind === 'cmd' && <span className='term-prompt'>❯</span>}
						<span>
							{typing.text.slice(0, typing.count)}
							<span className='term-cursor' aria-hidden='true' />
						</span>
					</div>
				)}

				{mode === 'live' && (
					<form
						className='term-input-row'
						onSubmit={(e) => {
							e.preventDefault()
							runCommand(input)
						}}
					>
						<span className='term-prompt'>❯</span>
						<input
							ref={inputRef}
							className='term-input'
							type='text'
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={onKeyDown}
							aria-label='Terminal input'
							autoComplete='off'
							spellCheck='false'
						/>
					</form>
				)}
			</div>
		</div>
	)
}

export default Terminal