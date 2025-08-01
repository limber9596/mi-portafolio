import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styless/Projects.css';
import { motion } from 'framer-motion';
import "../styless/Global.css";
import projectsData from '../data/projects.json';
export default function Projects() {

  const projects = projectsData;


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

  return (
    <section className="projects" id='projects'>
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button>Más detalles</button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>


    </section>
  );
}
