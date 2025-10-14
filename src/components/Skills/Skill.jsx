import React from "react";
import styles from './Skills.module.css';

function Skill({name, img}) {
    return (
        <div className={styles.skill}>
            <img src={img} alt={name} className={styles.skillImg} />
            <span className={styles.skillName}>{name}</span>
        </div>
    );
}
export default Skill;