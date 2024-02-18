import React from 'react';
import styles from './projectTag.module.scss'

const projectTag = (props) => {
    return (
        <div className='flex items-center rounded bg-blue-500 px-3 py-1 text-xs bg-opacity-70'>
            {props.name}
        </div>
    );
};

export default projectTag;