import React from 'react';

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero section">
        <div className="blog-hero-background">
          <div className="blog-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="section-title text-white">Blog</h1>
              <p className="section-subtitle text-white">
                Stories, insights, and adventures from Sri Lanka's culinary world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2>Coming Soon</h2>
              <p className="lead">
                We're working on bringing you amazing stories and insights. Check back soon for our blog posts!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
