import '../styless/Technologies.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap, FaSass, FaPhp, FaLaravel, FaNodeJs, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiExpress, SiPostman, SiJira, SiVercel, SiHostinger,SiMysql, SiMongodb } from 'react-icons/si';
import { motion, useInView } from 'framer-motion';
import "../styless/Global.css";
const techData = {
  'Frontend': [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Vue', icon: <FaVuejs /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'Sass', icon: <FaSass /> }
  ],
  'Backend': [
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Laravel', icon: <FaLaravel /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> }
  ],
  'Herramientas': [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Jira', icon: <SiJira /> }
  ],
  'Deploy y Hosting': [
    { name: 'Vercel', icon: <SiVercel /> },
    { name: 'Hostinger', icon: <SiHostinger /> },
    { name: 'AWS Lightsail', icon: <FaAws /> }
  ]
};

export default function Technologies() {
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
          {Object.entries(techData).map(([category, techs], idx) => (
            <motion.div
              key={idx}
              className="tech-category"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={itemVariants}
              custom={idx}
            >
              <h3>{category}</h3>
              <ul className="tech-list">
                {techs.map((tech, index) => (
                  <li key={index} className="tech-item">
                    <span className="tech-icon">{tech.icon}</span>
                    {tech.name}
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

