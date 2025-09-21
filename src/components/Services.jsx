import React from 'react';

const services = [
  {
    id: 1,
    icon: 'uil-tachometer-fast-alt',
    title: 'Fast & Transparent Estimates',
    description: 'Getting started is simple and straightforward. Reach out to us by phone or message, and we’ll deliver a transparent estimate within one day. We’ll also arrange a convenient property visit to explore the best cleaning solutions tailored to your needs.',
  },
  {
    id: 2,
    icon: 'uil-shield-check',
    title: 'Fully Protected Service',
    description: 'Your peace of mind is our priority. Our comprehensive insurance coverage includes $1MM per incident protection and $2MM total coverage, along with complete automotive and workers’ compensation insurance.',
  },
  {
    id: 3,
    icon: 'uil-user-check',
    title: 'Dependable & Punctual',
    description: 'Getting started is simple and straightforward. Reach out to us by phone or message, and we’ll deliver a transparent estimate within one day. We’ll also arrange a convenient property visit to explore the best cleaning solutions tailored to your needs.',
  },
  {
    id: 4,
    icon: 'uil-building',
    title: 'Honoring Your Business',
    description: 'We embrace the "elevate every environment we visit" mindset as our guiding standard. Attention to detail drives everything we do - from protective footwear upon arrival to meticulously cleaning window ledges and exercising thoughtful placement of all equipment.',
  },
];

const Services = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          
          </div>
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-8">
          {services.map(({ id, icon, title, description }) => (
            <div className="col-md-6 col-lg-3" key={id}>
              <div className="d-flex flex-row">
                <div>
                  <i className={`uil ${icon} fs-28 text-primary me-4`} />
                </div>
                <div>
                  <h4 className="mb-1">{title}</h4>
                  <p className="mb-0">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;