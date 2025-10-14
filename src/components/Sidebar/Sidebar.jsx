import styles from './Sidebar.module.css';
import SidebarSection from './SidebarSection';

function Sidebar({projects, papers, selectedId, onSelect, closeSidebar, isOpen}){

    const handleSelect = (id) => {
        onSelect(id);
        closeSidebar();
    }

    return(
    <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}>
        <SidebarSection 
            title="Proyectos"
            items={projects}
            selectedId={selectedId}
            onSelect={handleSelect}
        />
        <SidebarSection 
            title="Artículos de Investigación"
            items={papers}
            selectedId={selectedId}
            onSelect={handleSelect}
        />
    </aside>
    )
}

export default Sidebar;