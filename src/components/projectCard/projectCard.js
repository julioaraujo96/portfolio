import React from 'react';
import styles from './projectCard.module.scss'
import ProjectTag from './projectTag/projectTag';

const projectCard = (props) => {

  let tags;

  tags = props.topics.map((topic,index) => <ProjectTag key={index} name={topic}/>)

    return (
        <figure className={styles.container}>
              <img src={props.images[0]} alt="shoe shop" className="relative"/>  
              <figcaption className={styles.overlay}>
               <a href={props.url} target="_blank" rel="noopener noreferrer">
               <h1 className="underline font-bold">
                  {props.title}
                </h1>
               </a>
                <p>{props.description}</p>
                <div className="flex justify-center gap-2 mt-2">
                 {tags}
                </div>
              </figcaption>  
           </figure>
    );
};

export default projectCard;