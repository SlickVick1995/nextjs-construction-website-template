import { Fragment, useRef } from 'react';
import { useRouter } from 'next/router';
import useSticky from 'hooks/useSticky';
import Image from 'next/image.js';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';

/**
 * Navbar component with sticky behavior, offcanvas menu, and responsive layout.
 *
 * @param {Object} props
 * @param {string} [props.navClassName] - Default navbar class names.
 * @param {string} [props.navOtherClass] - Class names for the offcanvas hamburger container.
 * @param {boolean} [props.fancy] - If true, wraps navbar content in a fancier container.
 * @param {boolean} [props.stickyBox] - If true, adds padding top equal to navbar height when sticky.
 */
const Navbar = ({
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
  navOtherClass = 'navbar-other d-flex d-lg-none',
  fancy = false,
  stickyBox = true
}) => {
  // Track if navbar should be sticky based on scroll position
  const sticky = useSticky(350);

  // Ref to navbar DOM element, used to get height for sticky padding
  const navbarRef = useRef(null);

  // Next.js router (not used here but available if needed)
  const router = useRouter();

  // Class name for fixed sticky navbar version
  const fixedClassName =
    'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // Navbar main content: logo, offcanvas menu, hamburger button
  const headerContent = (
    <Fragment>
      {/* Navbar brand/logo */}
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <Image
              unoptimized={true}
              alt="Logo | Swell"
              src="/img/swell-logo.png"
              width={190}
              height={70}
            />
          }
        />
      </div>

      {/* Offcanvas navigation menu */}
      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        {/* Offcanvas header with close button and logo, visible on small screens */}
        <div className="offcanvas-header d-lg-none offcavas-bg">
          <NextLink
            href="/"
            title={
              <Image
                alt="Logo | Swell"
                src="/img/swell-logo.png"
                width={160}
                height={60}
                unoptimized={true}
                data-bs-dismiss="offcanvas"
              />
            }
          />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-dark ms-2"
          />
        </div>

        {/* Offcanvas body containing navigation links and contact info */}
        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          {/* Navigation links */}
          <ul className="navbar-nav align-items-lg-center">
            {/* Each nav item closes offcanvas on click */}
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Services" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="About" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Contact" className="nav-link" />
            </li>
          </ul>

          {/* Offcanvas footer with contact info and social links (mobile only) */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <div className="d-flex align-items-center mb-5">
                <i className="uil uil-envelope fs-32 text-main bg-white rounded-circle me-2" />
                <p className="fs-16 text-center m-0">
                  <a href="mailto:swell@gmail.com">swell@gmail.com</a>
                </p>
              </div>
              <div className="d-flex mb-5">
                <i className="uil uil-phone-volume fs-32 text-main bg-white rounded-circle me-2" />
                <p className="fs-18 text-center m-0 d-flex flex-column">
                  <a href="tel:+919876543210">+91 98765 43210</a>
                  <a href="tel:+911234567890">+91 12345 67890</a>
                </p>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger menu button for toggling offcanvas on small screens */}
      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
          aria-label="Toggle navigation"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {/* Spacer div to prevent layout jump when navbar becomes sticky */}
      {stickyBox && (
        <div
          style={{
            paddingTop: sticky ? navbarRef.current?.clientHeight : 0
          }}
        />
      )}

      {/* Main navbar element with sticky or normal className */}
      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          // Fancy container with background and layout tweaks
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end" style={{ padding: '10px 0' }}>
              {headerContent}
            </div>
          </div>
        ) : (
          // Default container for navbar content
          <div className="container flex-lg-row flex-nowrap align-items-center py-2">
            {headerContent}
          </div>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;
