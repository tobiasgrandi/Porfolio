import React from 'react';
import styles from './ProjectDetail.module.css'

function ProjectDetail({ project }) {
    if (!project) {
        return <div className={styles.noProject}>No project selected</div>;
    }

    return (
        <div className={styles.detail}>

            <div className={styles.titleContainer}>
                <img src={project.icon} alt='Proyect Icon' className={styles.icon}></img> 
                <h2>{project.title}</h2>
                <img src={project.icon} alt='Proyect Icon' className={styles.icon}></img> 
            </div>

            <div className={styles.detailText}>
                {project.description.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>

            <div className={styles.sourceContainer}>
                {project.sources.map((source, index) => (
                    <a href={source.link} target="blank" rel='noopener noreferrer' key={index}> 
                        <img src={source.img} alt={source.alt} className={styles.source}></img>
                        {source.source}
                   </a>
                ))}
            </div>
        </div>
    );
}
export default ProjectDetail;