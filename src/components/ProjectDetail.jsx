// ProjectDetail.jsx
import '../styless/ProjectDetail.css';

export default function ProjectDetail({ project, onClose }) {
  return (
    <div className="project-detail">
      <button className="close-btn" onClick={onClose}>← Volver</button>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <h4>Tecnologías usadas:</h4>
      <ul className="tech-list">
        {project.technologies.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>

      <div className="screenshots">
        <div>
          <h5>Vista Escritorio</h5>
          <img src={project.screenshots.desktop} alt="desktop view" />
        </div>
        <div>
          <h5>Vista Móvil</h5>
          <img src={project.screenshots.mobile} alt="mobile view" />
        </div>
      </div>

      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        Visitar Proyecto
      </a>
    </div>
  );
}
