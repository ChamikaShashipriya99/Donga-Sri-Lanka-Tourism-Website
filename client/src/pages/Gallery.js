import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'mountains', name: 'Mountains' },
    { id: 'beaches', name: 'Beaches' },
    { id: 'forests', name: 'Forests' },
    { id: 'cities', name: 'Cities' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Alpine Peak',
      category: 'mountains',
      description: 'Breathtaking mountain views'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      title: 'Forest Path',
      category: 'forests',
      description: 'Peaceful forest trails'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      title: 'Tropical Beach',
      category: 'beaches',
      description: 'Crystal clear waters'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      title: 'Desert Landscape',
      category: 'mountains',
      description: 'Vast desert vistas'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Mountain Lake',
      category: 'mountains',
      description: 'Serene alpine lakes'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Valley View',
      category: 'mountains',
      description: 'Panoramic valley views'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Coastal Cliffs',
      category: 'beaches',
      description: 'Dramatic coastal scenery'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Urban Skyline',
      category: 'cities',
      description: 'Modern city architecture'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Ancient Forest',
      category: 'forests',
      description: 'Mystical forest atmosphere'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title">Photo Gallery</h2>
              <p className="section-subtitle">Explore our collection of stunning travel photography</p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="row mb-4">
            <div className="col-lg-12 text-center">
              <div className="btn-group" role="group">
                {categories.map(category => (
                  <button
                    key={category.id}
                    type="button"
                    className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div key={image.id} className="gallery-item" data-aos="fade-up">
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <div className="text-center">
                    <h3>{image.title}</h3>
                    <p className="mb-0">{image.description}</p>
                                       <button 
                     className="btn btn-light btn-sm mt-2"
                     onClick={() => handleImageClick(image)}
                   >
                     <i className="fas fa-expand-alt me-1"></i>
                     View
                   </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <button className="btn btn-primary btn-lg">
                <i className="fas fa-images me-2"></i>
                Load More Photos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </div>
  );
};

export default Gallery; 