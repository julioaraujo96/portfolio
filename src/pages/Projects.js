import React, { useEffect,useState } from "react";
import { Helmet } from 'react-helmet';
import axios from 'axios';
import ProjectCard from '../components/projectCard/projectCard'
import Spinner from '../components/Spinner/Spinner'

const Projects = () => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

useEffect(()=>{
  async function fetchData() {
    setLoading(true);
     await axios.get("https://julioaraujo96.pythonanywhere.com/projects"`)
    .then(function (response) {
      
      setLoading(false);
      setData(response.data)
    })
    .catch(function (error) {
      throw Error(error.message);
    })
  }
  fetchData();
},[]);

let output;


if (data) {
 output = data['projects'].map((project) =>(<ProjectCard 
  
  key={project.id}
  title={project['name']} 
  description={project['description']} 
  images={project['images']}
  topics={project['topics']}
  url={project['url']}
  />))
}


  return (
 <>
    <Helmet>
        <meta name="description" content="Personal Portfolio" />
        <title>Júlio Araújo - Projects</title>
    </Helmet>

    <section className="container mx-auto max-w-4xl mb-4">
      <div className="bg-gray-300 dark:bg-terciary rounded shadow mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center">
       { loading ? <Spinner /> : output }
      </div>
    </section>
</>
  );
};

export default Projects;
