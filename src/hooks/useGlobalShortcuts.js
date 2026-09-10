import { useCallback, useEffect, useState } from 'react'
import { config } from '../data/config'

const sectionIds = ['about', 'experience', 'projects', 'skills', 'about-me', 'contact']

export const useGlobalShortcuts = (items) => {
	const [paletteOpen, setPaletteOpen] = useState(false)
	const [selected, setSelected] = useState(0)
	const [toast, setToast] = useState(null)

	useEffect(() => {
		if (!toast) return
		const timer = setTimeout(() => setToast(null), 2400)
		return () => clearTimeout(timer)
	}, [toast])

	const copyEmail = useCallback(async () => {
		const email = config.email
		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(email)
				setToast(`Email copied: ${email}`)
			} else {
				window.prompt('Your email:', email)
			}
		} catch {
			setToast(`Email: ${email}`)
		}
	}, [])

	const jumpSection = useCallback((dir) => {
		const anchor = window.scrollY + window.innerHeight * 0.35
		let index = 0
		sectionIds.forEach((id, i) => {
			const el = document.getElementById(id)
			if (el && el.offsetTop <= anchor) index = i
		})
		const next = Math.min(sectionIds.length - 1, Math.max(0, index + dir))
		document
			.getElementById(sectionIds[next])
			?.scrollIntoView({ behavior: 'smooth' })
	}, [])

	useEffect(() => {
		const onKeyDown = (e) => {
			if (e.metaKey || e.ctrlKey || e.altKey) return

			const target = e.target
			const isTyping =
				target &&
				(target.tagName === 'INPUT' ||
					target.tagName === 'TEXTAREA' ||
					target.isContentEditable)
			if (isTyping) return

			if (paletteOpen) {
				if (e.key === 'Escape') {
					e.preventDefault()
					setPaletteOpen(false)
				} else if (e.key === 'ArrowDown') {
					e.preventDefault()
					setSelected((s) => (s + 1) % items.length)
				} else if (e.key === 'ArrowUp') {
					e.preventDefault()
					setSelected((s) => (s - 1 + items.length) % items.length)
				} else if (e.key === 'Enter') {
					e.preventDefault()
					items[selected].action()
					setPaletteOpen(false)
				}
				return
			}

			if (e.key === '/') {
				e.preventDefault()
				setSelected(0)
				setPaletteOpen(true)
			} else if (e.key === 'c') {
				e.preventDefault()
				copyEmail()
			} else if (e.key === 'ArrowDown') {
				e.preventDefault()
				jumpSection(1)
			} else if (e.key === 'ArrowUp') {
				e.preventDefault()
				jumpSection(-1)
			}
		}

		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [paletteOpen, selected, items, copyEmail, jumpSection])

	return { paletteOpen, setPaletteOpen, selected, setSelected, toast, copyEmail }
}