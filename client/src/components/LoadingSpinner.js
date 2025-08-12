import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-spinner"
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '50%',
        padding: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          width: '40px',
          height: '40px',
          border: '3px solid var(--primary-color)',
          borderTop: '3px solid transparent',
          borderRadius: '50%'
        }}
      />
    </motion.div>
  );
};

export default LoadingSpinner; 