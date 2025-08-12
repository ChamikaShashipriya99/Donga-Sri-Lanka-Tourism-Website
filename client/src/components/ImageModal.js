import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '15px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '80vh',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                fontSize: '20px',
                color: '#333'
              }}
            >
              ×
            </button>

            <div style={{ display: 'flex', height: '100%' }}>
              {/* Image Section */}
              <div style={{ 
                flex: '1', 
                minHeight: '400px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={image.src}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Details Section */}
              <div style={{ 
                flex: '1', 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
              }}>
                <h2 style={{ 
                  color: 'var(--primary-color)', 
                  marginBottom: '20px',
                  fontSize: '2rem',
                  fontWeight: '700'
                }}>
                  {image.title}
                </h2>
                
                <p style={{ 
                  color: '#666', 
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '30px'
                }}>
                  {image.description}
                </p>

                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ 
                    color: '#333', 
                    marginBottom: '10px',
                    fontSize: '1.2rem'
                  }}>
                    Category
                  </h4>
                  <span style={{
                    background: 'var(--primary-color)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    textTransform: 'capitalize'
                  }}>
                    {image.category}
                  </span>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ 
                    color: '#333', 
                    marginBottom: '10px',
                    fontSize: '1.2rem'
                  }}>
                    Location Details
                  </h4>
                  <p style={{ color: '#666', fontSize: '1rem' }}>
                    Experience the breathtaking beauty of this stunning destination. 
                    Perfect for adventure seekers and nature lovers alike.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '15px' }}>
                  <button style={{
                    background: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}>
                    Book This Trip
                  </button>
                  <button style={{
                    background: 'transparent',
                    color: 'var(--primary-color)',
                    border: '2px solid var(--primary-color)',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal; 