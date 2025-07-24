import '../styless/Technologies.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap, FaSass, FaPhp, FaLaravel, FaNodeJs, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiExpress, SiPostman, SiJira, SiVercel, SiHostinger,SiMysql, SiMongodb } from 'react-icons/si';

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
  return (
    <section id="technologies" className="technologies">
      <h1>Tenologias</h1>
      <div className="technologies-container">
        <div className="tech-categories">
          {Object.entries(techData).map(([category, techs], idx) => (
            <div className="tech-category" key={idx}>
              <h3>{category}</h3>
              <ul className="tech-list">
                {techs.map((tech, index) => (
                  <li key={index} className="tech-item">
                    <span className="tech-icon">{tech.icon}</span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

