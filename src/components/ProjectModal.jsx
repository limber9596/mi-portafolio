// ProjectModal.jsx
import "../styless/ProjectModal.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState("pc"); // 'pc' o 'mobile'

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content-project"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="content-header">
          <div className="header">
            <button className="close-btn" onClick={onClose}>
              {" "}
              <b>X</b>{" "}
            </button>
            <h1 className="title-project">{project.title}</h1>
            <p className="text">{project.description}</p>

            <p className="text">
              <b>Login:</b> {project.login}
            </p>
            <ul className="techh-list">
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>

            {/* NAV de pestañas */}
            <div className="content-tabs">
              <nav className="tabs">
                <button
                  className={activeTab === "pc" ? "active" : ""}
                  onClick={() => setActiveTab("pc")}
                >
                  Vista PC
                </button>
                <button
                  className={activeTab === "mobile" ? "active" : ""}
                  onClick={() => setActiveTab("mobile")}
                >
                  Vista Mobile
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Contenido según pestaña */}
        <div className="screenshots">
          {activeTab === "pc" && (
            <div className="screenshots-list">
              {project.screenshots.pc.map((shot, i) => (
                <motion.div
                  key={i}
                  className="screenshot-item"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={itemVariants}
                  custom={i}
                >
                  <p className="title-image">
                    <b>{shot.label}</b>
                  </p>
                  <img src={shot.url} alt={shot.label} />
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "mobile" && (
            <div className="screenshots-list">
              {project.screenshots.mobile.map((shot, i) => (
                <motion.div
                  key={i}
                  className="screenshot-item"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={itemVariants}
                  custom={i}
                >
                  <p className="title-image">
                    <b>{shot.label}</b>
                  </p>
                  <img src={shot.url} alt={shot.label} />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Visitar Proyecto
        </a>
      </div>
    </div>
  );
}
