import '../styless/Technologies.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap, FaSass, FaPhp, FaLaravel, FaNodeJs, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiExpress, SiPostman, SiJira, SiVercel, SiHostinger,SiMysql, SiMongodb } from 'react-icons/si';
import { motion, useInView } from 'framer-motion';
import "../styless/Global.css";
import React, { useEffect, useState } from 'react';
import techsData from '../data/techs.json';

export default function Technologies() {

  const techs = techsData;

  const iconMap = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <FaJs />,
    React: <FaReact />,
    Vue: <FaVuejs />,
    Bootstrap: <FaBootstrap />,
    Sass: <FaSass />,
    PHP: <FaPhp />,
    Laravel: <FaLaravel />,
    "Node.js": <FaNodeJs />,
    Express: <SiExpress />,
    MySQL: <SiMysql />,
    MongoDB: <SiMongodb />,
    Git: <FaGitAlt />,
    Postman: <SiPostman />,
    Jira: <SiJira />,
    Vercel: <SiVercel />,
    Hostinger: <SiHostinger />,
    "AWS Lightsail": <FaAws />
  };
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
    <section id="technologies" className="technologies">
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
        Tecnologías
      </motion.h1>

      <div className="technologies-container">
        <div className="tech-categories">
          {techs.map((category, idx) => (
            <motion.div
              key={category.id}
              className="tech-category"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={itemVariants}
              custom={idx}
            >
              <h3>{category.title}</h3>
              <ul className="tech-list">
                {category.technologies.map((tech, index) => (
                  <li key={index} className="tech-item">
                    <span className="tech-icon">{iconMap[tech]}</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

