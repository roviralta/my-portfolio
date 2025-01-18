import Header from "./components/Header/Header";
import About from "./components/About/About";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import Experience from "./components/Experience/Experience";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <ProjectContainer></ProjectContainer>
      <SkillContainer></SkillContainer>
    </>
  );
}

export default App;
