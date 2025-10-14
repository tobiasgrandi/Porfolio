import React from 'react';
import styles from './ProjectDetail.module.css'

function ProjectDetail({ project }) {
    if (!project) {
        return <div className={styles.noProject}>No project selected</div>;
    }

    return (
        <div className={styles.detail}>
            <h2>{project.title}</h2>
            <div className={styles.detailText}>
                {project.description.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className={styles.iconsContainer}>
                {project.sources.map((source, index) => (
                    <a href={source.link} target="blank" rel='noopener noreferrer' key={index}> 
                        <img src={source.img} alt={source.alt} className={styles.icon}></img>
                        {source.source}
                   </a>
                ))}
            </div>
        </div>
    );
}
export default ProjectDetail;