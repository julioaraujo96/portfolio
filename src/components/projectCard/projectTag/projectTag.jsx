import React from 'react';
import styles from './projectTag.module.scss';

const projectTag = (props) => {
  return (
    <div className='flex items-center rounded bg-primary px-3 py-1 text-xs bg-opacity-30 max-w-2'>
      {props.name}
    </div>
  );
};

export default projectTag;
