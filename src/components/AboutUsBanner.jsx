import React from 'react';

const AboutUsBanner = () => {
  return (
    <section className="about-us-banner" style={{
      backgroundImage: 'url(/img/team-pic.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1
      }} />
      
      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white'
      }}>
        {/* More About Us Button */}
        <button
          className="more-about-us-btn"
          style={{
            backgroundColor: '#17416F',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            fontSize: '18px',
            fontWeight: '600',
            fontFamily: 'Kadwa, serif',
            cursor: 'pointer',
            marginBottom: '24px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          More About Us
        </button>

        {/* Swell Logo */}
        <div className="swell-logo-banner">
          <img
            src="/img/swell-logo.png"
            alt="Swell Logo"
            style={{
              width: '200px',
              height: 'auto',
              filter: 'brightness(0) invert(1)',
              opacity: 0.9
            }}
            onError={(e) => {
              console.error('Failed to load Swell logo:', e);
              e.target.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Swell logo loaded successfully');
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBanner;