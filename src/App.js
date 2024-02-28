import './App.css';
import Header from './components/Header/Header';
import SkillSection from './components/Sections/SkillSection';
import ProjectSection from './components/Sections/ProjectSection';
import { useEffect, useRef } from 'react';
function App() {

  const SkillSectionRef = useRef(null); // 초기값으로 null을 설정합니다.
  const ProjectSectionRef = useRef(null);
  const scrollToSkillSection = () => {
    if (SkillSectionRef.current) {
      SkillSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
  };

  const scrollToProjectSection = () => {
    if (ProjectSectionRef.current) {
      ProjectSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <>
      <Header scrollToSkillSection={scrollToSkillSection}  scrollToProjectSection={scrollToProjectSection}></Header>
      {/* <SkillSection ref={SkillSectionRef}></SkillSection>
      <ProjectSection ref={ProjectSectionRef}></ProjectSection> */}
    </>
  );
}

export default App;
