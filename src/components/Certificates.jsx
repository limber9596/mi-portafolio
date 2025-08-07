import React, { useState } from 'react';
import '../styless/Certificates.css';
import { motion, AnimatePresence } from 'framer-motion';
import certificatesData from '../data/certificates.json';
import useWindowWidth from '../hooks/useWindowWidth';
const Certificates = () => {
  
  const certificates = certificatesData;

  const [selectedCert, setSelectedCert] = useState(null);
  const width = useWindowWidth();
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <section id="certificates" className="certificates">
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
        Certificados       
      </motion.h1>
      <div className="certificate-cards">

        {certificates.map((cert, idx) => (
          <motion.div
            className="card_cert"
            key={cert.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={itemVariants}
            custom={idx}
            onClick={() => setSelectedCert(cert)}
            whileHover={width > 795 ? { scale: 1.05 } : false}
          >
            <img src={cert.image} alt={cert.title} />
            <h3 className='title-cert'>{cert.title} - {cert.date}</h3>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedCert && width > 795 && (
          <motion.div
            className="certificate-modal"
            onClick={() => setSelectedCert(null)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content-cert"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button className="close-button" onClick={() => setSelectedCert(null)}> <b>X</b></button>
              <img src={selectedCert.image} alt={selectedCert.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
