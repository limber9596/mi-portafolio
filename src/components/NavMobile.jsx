import { useState } from 'react'
import '../styless/navMobile.css' // Assuming you have a CSS file for mobile styles

export default function NavMobile() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="navbar mobile">
      <div className="logo">MiPortafolio</div>
      <button className="burger" onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <span className="close-icon">✕</span> : <span className="burger-icon">☰</span>}
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
        <li><a href="#technologies" onClick={() => setMenuOpen(false)}>Tecnologías</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
      </ul>
    </nav>
  )
}
