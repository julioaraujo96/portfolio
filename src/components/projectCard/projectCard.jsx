import React from 'react';
import styles from './projectCard.module.scss';
import ProjectTag from './projectTag/projectTag';

const projectCard = ({ title, description, images, topics, url }) => {
  let tags;

  tags = topics.map((topic, index) => <ProjectTag key={index} name={topic} />);

  return (
    <article className='flex bg-blue-900 dark:bg-gray-700 items-center rounded p-4 gap-2'>
      {images[0].includes('media') ? (
        <div className={styles.imageContainer}>
          <img src={images[0]} alt={title} className={styles.cardImage} />
        </div>
      ) : null}
      <div className='p-4 flex flex-col gap-4 max-w-xs sm:max-w-none'>
        <a className='text-teal underline' href={url}>
          {title}
        </a>
        <p className='text-gray-400 text-xs'>{description}</p>
        <div className='flex gap-1 text-teal whitespace-nowrap flex-wrap'>
          {tags}
        </div>
      </div>
    </article>
  );
};

export default projectCard;
