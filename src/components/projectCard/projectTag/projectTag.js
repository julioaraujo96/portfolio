import React from 'react';
import styles from './projectTag.module.scss'

const projectTag = (props) => {
    return (
        <div className={styles.projectTag}>
            {props.name}   
        </div>
    );
};

export default projectTag;