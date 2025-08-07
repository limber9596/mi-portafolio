import '../styless/navDesktop.css'

export default function NavDesktop() {
  return (
    <nav className="navbar desktop">
      <div className="logo">MiPortafolio</div>
      <ul className="nav-links-desktop">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#technologies">Tecnologías</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#certificates">Certificados</a></li>
      </ul>
    </nav>
  )
}
