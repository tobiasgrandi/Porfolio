import React from 'react';
import styles from './About.module.css';


function About({about}) {
    return (
        <section className={styles.about}>
            <img src={about.img} alt="Tobías Grandi" className={styles.profileImage} />
            <h1>{about.name}</h1>
            <h2 className={styles.role}>{about.role}</h2>
            <h2>Sobre mí</h2>
            <div className={styles.aboutText}>
                {about.description.split('\n').map((line, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
            </div>
            <div className={styles.iconsContainer}>
                {about.sources.map((source, index) => (
                    <a href={source.link} target="blank" rel='noopener noreferrer' key={index}>
                        <img src={source.img} alt={source.alt} className={styles.icon}></img>
                        {source.source}
                    </a>
                ))}
            </div>
        </section>
    );
}

export default About;