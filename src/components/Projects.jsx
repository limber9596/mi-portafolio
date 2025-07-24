import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styless/Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/data/projects.json')
      .then((res) => setProjects(res.data))
      .catch((err) => console.error('Error loading projects:', err));
  }, []);

  return (
    <section className="projects" id='projects'>
      <h2 className='title'>Mis Proyectos</h2>
      <div className="project-cards">
        {projects.map((project) => (
            <div className="card" key={project.id}>
                <h3 className="card-title">{project.title}</h3>
                <div className="card-image">
                    <img src={project.image} alt={project.title} />
                </div>
                <div className="card-footer">
                    <button>Más detalles</button>
                </div>
            </div>

        ))}
      </div>
    </section>
  );
}
