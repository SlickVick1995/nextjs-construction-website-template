import { Fragment } from 'react';
import Head from 'next/head';

// Components
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import Services from 'components/Services';

const Home = () => {
  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>Swell - Cleaning Services</title>
        <meta name="description" content="Swell - Cleaning Services" />
      </Head>

      <main className="content-wrapper overflow-hidden">

        {/* Hero Section */}
        <Hero />

        {/* New Section */}
        <section className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/img/team-pic.jpg"
                alt="Our Team"
                className="img-fluid rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-lg-6" style={{ fontFamily: 'Kadwa, serif' }}>
              <h2 className="display-5 fw-bold">We Don’t Just Clean Windows
We Perfect Them!</h2>
              <p className="lead">
                Swell is built on exceptional service at honest prices. We're driven to make our families proud – and earn the trust of yours along the way.
Whether we're transforming your windows to crystal clarity or restoring your property's exterior, we treat your home and your time with complete respect. We don't consider any job finished until it's done right.
At Swell, quality service shouldn't cost a fortune. We deliver the results you deserve at prices that make sense.
              </p>
              <button
                className="quote-button"
                style={{
                  display: 'flex',
                  width: '307px',
                  height: '58px',
                  padding: '12px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  flexShrink: 0,
                  borderRadius: '8px',
                  border: '1px solid rgba(44, 44, 44, 1)',
                  background: '#17416F',
                  color: 'rgba(245, 245, 245, 1)',
                  fontFamily: 'Kadwa, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  lineHeight: '120%',
                  letterSpacing: '-0.48px',
                  cursor: 'pointer',
                  border: 'none',
                  marginTop: '24px'
                }}
              >
                Generate a Quote
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Services />

      </main>
    </Fragment>
  );
};

export default Home;
