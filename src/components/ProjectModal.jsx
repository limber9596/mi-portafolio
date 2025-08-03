// ProjectModal.jsx
import "../styless/ProjectModal.css";
import React, { useState } from 'react';
export default function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState('pc'); // 'pc' o 'mobile'
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <div className="content-header">
          <div className="header">
             <button className="close-btn" onClick={onClose}> <b>X</b> </button>
            <h1>{project.title}</h1>
            <p className="text">{project.description}</p>
      
              <ul className="techh-list">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            

            {/* NAV de pestañas */}
            <div className="content-tabs">
              <nav className="tabs">
                <button
                  className={activeTab === 'pc' ? 'active' : ''}
                  onClick={() => setActiveTab('pc')}
                >
                  Vista PC
                </button>
                <button
                  className={activeTab === 'mobile' ? 'active' : ''}
                  onClick={() => setActiveTab('mobile')}
                >
                  Vista Mobile
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Contenido según pestaña */}
        <div className="screenshots">
          {activeTab === 'pc' && (
            <div className="screenshots-list">
              {project.screenshots.pc.map((shot, i) => (
                <div key={i} className="screenshot-item">
                  <p className="title-image"> <b>{shot.label}</b> </p>
                  <img src={shot.url} alt={shot.label} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'mobile' && (
            <div className="screenshots-list">
              {project.screenshots.mobile.map((shot, i) => (
                <div key={i} className="screenshot-item">
                  <p className="title-image"> <b>{shot.label}</b></p>
                  <img src={shot.url} alt={shot.label} />
                </div>
              ))}
            </div>
          )}
        </div>

        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          Visitar Proyecto
        </a>
      </div>
    </div>
  );
}
