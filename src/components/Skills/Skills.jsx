import React from 'react';
import styles from './Skills.module.css';
import SkillsSection from './SkillsSection';

function Skills({title, skills}) {
    return (
        <div className={styles.skills}>
            <h2>{title}</h2>
            {skills.map((section, index) => (
                <SkillsSection key={section.title} title={section.title} skills={section.skills} />
            ))}
        </div>
    );
}

export default Skills;