import '../styless/About.css'
import '../styless/Global.css'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section id="about" className="about">
      {/* Animación de entrada al hacer scroll solo para los elementos internos */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="animated-text-h1"
          initial={true} // importante para que no reinicie animación infinita
          animate={{
            backgroundPosition: ['-200% center', '200% center'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
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
              ease: 'easeInOut',
            },
          }}
        >
          Desarrollador Web Full Stack con más de 2 años de experiencia en desarrollo frontend y backend. He participado en proyectos reales en Ecuador, Guatemala y Chile, trabajando de forma remota con tecnologías como React, Laravel, Node.js, MySQL y MongoDB. Me enfoco en crear soluciones eficientes y escalables.
        </motion.p>
      </motion.div>
    </motion.section>

  )
}
