import React from "react";
import styles from './Skills.module.css';
import Skill from "./Skill";

function SkillsSection({title, skills}) {
    return (
        <div className={styles.skillsSection}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.skillList}>
                {skills.map((skill, index) => (
                    <Skill key={skill.name} name={skill.name} img={skill.img} />
                ))}
            </div>
        </div>
    );
}

export default SkillsSection;