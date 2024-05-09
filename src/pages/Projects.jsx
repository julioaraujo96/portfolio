import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import ProjectCard from '../components/projectCard/projectCard';
import Spinner from '../components/Spinner/Spinner';

const Projects = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await axios
        .get('https://julioaraujo96.pythonanywhere.com/projects')
        .then(function (response) {
          setLoading(false);
          setData(response.data);
        })
        .catch(function (error) {
          throw Error(error.message);
        });
    }
    fetchData();
  }, []);

  let output;

  if (data) {
    output = data['projects'].map((project) => (
      <ProjectCard
        key={project.id}
        title={project.name}
        description={project.description}
        images={project.images}
        topics={project.topics}
        url={project.url}
      />
    ));
  }

  return (
    <>
      <Helmet>
        <meta name='description' content='Personal Portfolio' />
        <title>Júlio Araújo - Projects</title>
      </Helmet>

      <section className='container mx-auto max-w-4xl m-4 '>
        <div className='rounded flex flex-col gap-4'>
          {loading ? <Spinner /> : output}
        </div>
      </section>
    </>
  );
};

export default Projects;
