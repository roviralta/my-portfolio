import React, { useMemo } from 'react'
import { MdWork, MdCode, MdDevices, MdPerson, MdEmail, MdDownload } from 'react-icons/md'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import SkillContainer from './components/SkillContainer/SkillContainer'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import CommandPalette from './components/CommandPalette/CommandPalette'
import Toast from './components/Toast/Toast'
import Reveal from './components/Reveal/Reveal'
import { useGlobalShortcuts } from './hooks/useGlobalShortcuts'
import resume from './data/SergiRoviralta_CV.pdf'
import './index.css'

const scrollToId = (id) =>
	document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function App() {
	const { paletteOpen, setPaletteOpen, selected, setSelected, toast, copyEmail } =
		useGlobalShortcuts()

	const paletteItems = useMemo(
		() => [
			{ label: 'Experience', icon: <MdWork />, action: () => scrollToId('experience') },
			{ label: 'Projects', icon: <MdCode />, action: () => scrollToId('projects') },
			{ label: 'Skills', icon: <MdDevices />, action: () => scrollToId('skills') },
			{ label: 'About me', icon: <MdPerson />, action: () => scrollToId('about-me') },
			{ label: 'Copy email', icon: <MdEmail />, action: copyEmail },
			{ label: 'Download CV', icon: <MdDownload />, action: () => window.open(resume, '_blank', 'noopener') },
		],
		[copyEmail]
	)

	return (
		<>
			<Header />

			<main>
				<Hero />
				<Reveal>
					<Experience />
				</Reveal>
				<Reveal>
					<ProjectContainer />
				</Reveal>
				<Reveal>
					<SkillContainer />
				</Reveal>
				<Reveal>
					<AboutMe />
				</Reveal>
			</main>

			<Contact />

			<CommandPalette
				open={paletteOpen}
				items={paletteItems}
				selected={selected}
				setSelected={setSelected}
				onClose={() => setPaletteOpen(false)}
			/>
			<Toast message={toast} />
		</>
	)
}

export default App