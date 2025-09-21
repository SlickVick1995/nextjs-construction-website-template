import NextLink from './NextLink';

/**
 * Hero component - displays a window cleaning service hero section with video background,
 * images, headline, description, and call-to-action button.
 */
const Hero = () => {
  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline width="100%" height="100%">
        <source src="/video/Video_Regeneration_With_New_Logo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;
