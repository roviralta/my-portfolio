import Header from './components/Header/Header'
import About from './components/About/About'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import Experience from './components/Experience/Experience'
import SkillContainer from './components/SkillContainer/SkillContainer'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'

function App() {
	return (
		<>
			<Header></Header>
			<About></About>
			<Experience></Experience>
			<ProjectContainer></ProjectContainer>
			<SkillContainer></SkillContainer>
			<AboutMe></AboutMe>
			<Contact></Contact>
		</>
	)
}

export default App
