import React, {useState, useEffect} from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import styles from './App.module.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills.jsx';

import projects from './data/projects';
import papers from './data/papers';
import about from './data/about.js'
import principalSkills from './data/principalSkills.js';
import secondarySkills from './data/secondarySkills.js'

import { Menu, X } from 'lucide-react';

function App() {
  const [selectedId, setSelectedId] = useState("project-1");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const all = projects.concat(papers);
  const selectedProject = all.find((p) => p.id === selectedId) || null;

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={styles.appContainer}>
      <About about={about}/>
      
      <div className={styles.proyects}>
        <button className={styles.proyectsButton} onClick={toggleSidebar}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        <Sidebar
          projects={projects}
          papers={papers}
          selectedId={selectedId}
          onSelect={setSelectedId}
          closeSidebar={setIsSidebarOpen}
          isOpen={isSidebarOpen}
        />
        <ProjectDetail project={selectedProject} />

      </div>
      <Skills title={'Habilidades Principales'} skills={principalSkills}/>
      <Skills title={'Otros conocimientos'} skills={secondarySkills}/>

      {isSidebarOpen && <div className={`${styles.overlay} ${isSidebarOpen ? styles.active : ''}`} onClick={toggleSidebar}></div>}
    </div>
  );
}

export default App;