import { motion } from 'framer-motion'
import '../styless/Hero.css'
import "../styless/Global.css"

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="/mi_foto.png"
        animate={{
          y: [0, -10, 0],
          // opacity: [1, 0.8, 1]
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hero-img"
      />

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
        <span className="line">Hola, soy  </span>
        <span className="line">Limbert Molina</span>
      </motion.h1>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: [1, 0.5, 1]
        }}
        transition={{
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        Desarrollador Web Full Stack
      </motion.p>

      <motion.a
        href="#projects"
        className="btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Ver proyectos
      </motion.a>
    </motion.section>
  )
}
