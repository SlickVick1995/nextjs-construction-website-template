import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { usefulLinks } from '../data.js';

/**
 * Widget component renders a titled list of links
 * @param {Array} list - Array of link objects { id, url, title }
 * @param {string} title - Widget title
 */
const Widget = ({ list, title }) => (
  <div className="widget">
    <h4 
      className="widget-title fs-18 mb-3 text-uppercase kadwa-font" 
      style={{ 
        color: '#144070'
      }}
    >
      <style jsx>{`
        h4.widget-title::before,
        h4.widget-title::after {
          background-color: #144070 !important;
          border-color: #144070 !important;
        }
      `}</style>
      {title}
    </h4>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ id, title }) => (
        <li key={id} className="kadwa-font">
          <NextLink href="#" title={title} />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top overflow-hidden" style={{ backgroundColor: 'white' }}>
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">
          {/* Logo and Company Description */}
          <div className="col-xl-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className="mb-5 d-flex justify-content-md-center justify-content-xl-start w-100">
                <Image
                  src="/img/swell-logo.png"
                  alt="Logo | Swell"
                  width={200}
                  height={80}
                  unoptimized={true}
                  className="text-center"
                />
              </div>
              <p className="lead mb-2 text-md-center text-xl-start fs-18 kadwa-font" style={{ color: '#144070' }}>
                Swell is a trusted cleaning service company, delivering high-quality and reliable cleaning solutions.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="d-flex align-items-xl-start align-items-md-center flex-column">
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Quick Links Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <Widget list={usefulLinks} title="Quick Links" />
          </div>

          {/* Contact Information Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase kadwa-font" style={{ color: '#144070' }}>
                <style jsx>{`
                  h4.widget-title::before,
                  h4.widget-title::after {
                    background-color: #144070 !important;
                    border-color: #144070 !important;
                  }
                `}</style>
                Contact Us
              </h4>

              {/* Address */}
              <div className="d-flex mb-3 align-items-start">
                <i className="uil uil-location-pin-alt fs-30" style={{ color: '#144070' }} />
                <address className="ms-2 m-0 mt-1 kadwa-font" style={{ color: '#144070' }}>123 Main Street, Springfield, IL 62704 United States</address>
              </div>

              {/* Email */}
              <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-envelope fs-26" style={{ color: '#144070' }} />
                <a href="mailto:swell@gmail.com" className="link-body ms-2 kadwa-font" style={{ color: '#144070' }}>
                  swell@gmail.com
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="d-flex">
                <i className="uil uil-phone-volume fs-26" style={{ color: '#144070' }} />
                <p className="mt-1 ms-2 fs-18 d-flex flex-column kadwa-font">
                  <a href="tel:+911234567890" style={{ color: '#144070' }}>+91 12345 67890</a>
                  <a href="tel:+919876543210" style={{ color: '#144070' }}>+91 98765 43210</a>
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase kadwa-font" style={{ color: '#144070' }}>
                <style jsx>{`
                  h4.widget-title::before,
                  h4.widget-title::after {
                    background-color: #144070 !important;
                    border-color: #144070 !important;
                  }
                `}</style>
                Google Map
              </h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019594510314!2d-122.4194156846815!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f374c6f%3A0x4211bbcc3de0b9f0!2sGeneral%20Hospital%20-%20San%20Francisco!5e0!3m2!1sen!2sus!4v1748419750000!5m2!1sen!2sus"
                width="300"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              />
            </div>
          </div>

          {/* Horizontal separator */}
          <hr className="mt-4 mt-md-4 mb-7" />

          {/* Footer copyright */}
          <div className="d-md-flex align-items-center justify-content-center">
            <p className="mb-2 mb-lg-0 text-center kadwa-font" style={{ color: '#144070' }}>© {currentYear} Swell. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;