import React from 'react';

const services = [
  {
    id: 1,
    icon: 'uil-tachometer-fast-alt',
    title: 'FAST & TRANSPARENT ESTIMATES',
    description:
      "Getting started is simple and straightforward. Reach out to us by phone or message, and we'll deliver a transparent estimate within one day. We'll also arrange a convenient property visit to explore the best cleaning solutions tailored to your needs."
  },
  {
    id: 2,
    icon: 'uil-shield-check',
    title: 'FULLY PROTECTED SERVICE',
    description:
      "Your peace of mind is our priority. Our comprehensive insurance coverage includes $1MM per incident protection and $2MM total coverage, along with complete automotive and workers' compensation insurance."
  },
  {
    id: 3,
    icon: 'uil-user-check',
    title: 'DEPENDABLE & PUNCTUAL',
    description:
      "Getting started is simple and straightforward. Reach out to us by phone or message, and we'll deliver a transparent estimate within one day. We'll also arrange a convenient property visit to explore the best cleaning solutions tailored to your needs."
  },
  {
    id: 4,
    icon: 'uil-building',
    title: 'Honoring Your Business',
    description:
      'We embrace the "elevate every environment we visit" mindset as our guiding standard. Attention to detail drives everything we do - from protective footwear upon arrival to meticulously cleaning window ledges and exercising thoughtful placement of all equipment including ladders and platforms.'
  }
];

const Services = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-15 text-uppercase text-muted mb-3 text-center">What We Do?</h2>
            <h3 className="display-4 mb-10 px-xl-10 text-center">The service we offer is specifically designed to meet your needs.</h3>
          </div>
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-8">
          {services.map(({ id, icon, title, description }) => (
            <div className="service-item" key={id}>
              <i className={`uil ${icon} service-icon`} aria-hidden="true" />
              <h3 className="service-title kadwa-font m-0">{title}</h3>
              <p className="service-desc kadwa-font m-0">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
