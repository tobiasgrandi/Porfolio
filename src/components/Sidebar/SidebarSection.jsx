import React from "react";
import styles from './Sidebar.module.css';

function SidebarSection({title, items, selectedId, onSelect}) {
    return (
        <div className={styles.sidebarSection}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.list}>
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        className={`${styles.item} ${item.id === selectedId ? styles.active : ""}`}
                        >
                        <div className={styles.itemContent}>
                            <img src={item.icon} alt="Proyect icon" className={styles.icon}></img>
                            <span>{item.title}</span>
                        </div>
                    </li> 
                ))}
            </ul>
        </div>
    );
}

export default SidebarSection;