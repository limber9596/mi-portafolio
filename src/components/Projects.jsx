import React, { useState } from 'react';
import '../styless/Projects.css';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const projects = projectsData;

  // Estado para el modal y proyecto seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeInOut',
      },
    }),
  };

  // Función para abrir modal y setear proyecto
  function openModal(project) {
    setSelectedProject(project);
    setIsModalOpen(true);
  }

  // Función para cerrar modal
  function closeModal() {
    setIsModalOpen(false);
    setSelectedProject(null);
  }

  return (
    <section className="projects" id="projects">
      <motion.h1
        className="animated-text-h1"
        initial={{ backgroundPosition: '-200% center' }}
        animate={{ backgroundPosition: '200% center' }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        Mis Proyectos
      </motion.h1>

      <div className="project-cards">
        {projects.map((project, idx) => (
          <motion.div
            className="card"
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={itemVariants}
            custom={idx}
          >
            <h3 className="card-title">{project.title}</h3>

            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="card-footer">
              {/* Cambia aquí el botón para abrir el modal */}
              <button onClick={() => openModal(project)}>Más detalles</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mostrar modal solo si isModalOpen es true y selectedProject no es null */}
      {isModalOpen && selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </section>
  );
}
