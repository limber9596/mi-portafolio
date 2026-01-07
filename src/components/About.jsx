import "../styless/About.css";
import "../styless/Global.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section id="about" className="about">
      {/* Animación de entrada al hacer scroll solo para los elementos internos */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="about-content"
      >
        <motion.h1
          className="animated-text-h1"
          initial={true} // importante para que no reinicie animación infinita
          animate={{
            backgroundPosition: ["-200% center", "200% center"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Sobre mí
        </motion.h1>

        <motion.p
          initial={true}
          animate={{
            opacity: [1, 0.7, 1],
          }}
          transition={{
            opacity: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          Desarrollador Backend Junior con experiencia práctica en proyectos
          reales utilizando Laravel y Node.js. He participado en el desarrollo
          de APIs REST, implementación de autenticación de usuarios (JWT y
          OAuth), gestión de bases de datos MySQL y PostgreSQL, y despliegue de
          aplicaciones web. Cuento con conocimientos en React para la
          integración del frontend con servicios backend. Busco integrarme a un
          equipo donde pueda seguir fortaleciendo mis habilidades backend y
          aportar con responsabilidad, honestidad y compromiso.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
