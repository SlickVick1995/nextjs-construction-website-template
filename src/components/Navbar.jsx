import { Fragment, useRef } from 'react';
import { useRouter } from 'next/router';
import useSticky from 'hooks/useSticky';
import NextLink from 'components/NextLink';

/**
 * Navbar component matching Figma design exactly
 */
const Navbar = ({
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
  navOtherClass = 'navbar-other d-flex d-lg-none',
  fancy = false,
  stickyBox = true
}) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);
  const router = useRouter();

  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  const headerContent = (
    <Fragment>
      {/* Mobile hamburger button */}
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

      {/* Desktop Navigation */}
      <div className="figma-navbar-container">
        <div className="figma-navbar-wrapper">
          {/* Left: User Icon Button */}
          <div className="figma-icon-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66667C5.78261 12.5 4.93476 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5M13.3333 5.83333C13.3333 7.67428 11.8409 9.16667 10 9.16667C8.15905 9.16667 6.66667 7.67428 6.66667 5.83333C6.66667 3.99238 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333Z" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Center: Navigation Menu with Logo */}
          <div className="figma-nav-container">
            <nav className="figma-nav-menu">
              <div className="figma-menu-group">
                <NextLink href="#" className="figma-nav-link inter-font">About Us</NextLink>
                <NextLink href="#" className="figma-nav-link kadwa-bold">Services</NextLink>
              </div>
              
              <div className="figma-menu-group">
                <NextLink href="#" className="figma-nav-link kadwa-bold">Clients</NextLink>
                <NextLink href="#" className="figma-nav-link kadwa-bold">Press</NextLink>
              </div>

              {/* Logo in center */}
              <div className="figma-logo-container">
                <NextLink href="/">
                  <img 
                    alt="Swell Logo" 
                    src="/img/swell-logo.png" 
                    width={85} 
                    height={54} 
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </NextLink>
              </div>

              <div className="figma-menu-group">
                <NextLink href="#" className="figma-nav-link kadwa-bold">Locations</NextLink>
                <NextLink href="#" className="figma-nav-link kadwa-bold">Franchise</NextLink>
              </div>

              <div className="figma-menu-group">
                <NextLink href="#" className="figma-nav-link kadwa-bold">Shop</NextLink>
                <NextLink href="#" className="figma-nav-link kadwa-bold">Get a Quote!</NextLink>
              </div>
            </nav>
          </div>

          {/* Right: Search Icon Button */}
          <div className="figma-icon-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6695 16.6695L13.3764 13.3764M15.1005 9.21552C15.1005 12.4657 12.4657 15.1005 9.21552 15.1005C5.96535 15.1005 3.33057 12.4657 3.33057 9.21552C3.33057 5.96535 5.96535 3.33057 9.21552 3.33057C12.4657 3.33057 15.1005 5.96535 15.1005 9.21552Z" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Logo */}
      <div className="navbar-brand d-lg-none">
        <NextLink href="/">
          <Image unoptimized={true} alt="Swell Logo" src="/img/swell-logo.png" width={120} height={45} />
        </NextLink>
      </div>

      {/* Mobile Navigation - Offcanvas */}
      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <NextLink href="/">
            <Image alt="Swell Logo" src="/img/swell-logo.png" width={160} height={60} unoptimized={true} />
          </NextLink>
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-dark ms-2"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NextLink href="#" title="About Us" className="nav-link" />
            </li>
            <li className="nav-item">
              <NextLink href="#" title="Services" className="nav-link" />
            </li>
            <li className="nav-item">
              <NextLink href="#" title="Clients" className="nav-link" />
            </li>
            <li className="nav-item">
              <NextLink href="#" title="Press" className="nav-link" />
            </li>
            <li className="nav-item">
              <NextLink href="#" title="Locations" className="nav-link" />
            </li>
            <li className="nav-item">
              <NextLink href="#" title="Franchise" className="nav-link" />
            </li>
            <li className="nav-item">
              <NextLink href="#" title="Shop" className="nav-link" />
            </li>
            <li className="nav-item">
              <NextLink href="#" title="Get a Quote!" className="nav-link" />
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && (
        <div
          style={{
            paddingTop: sticky ? navbarRef.current?.clientHeight : 0
          }}
        />
      )}

      <nav ref={navbarRef} className={`${sticky ? fixedClassName : navClassName} figma-navbar`}>
        {headerContent}
      </nav>
    </Fragment>
  );
};

export default Navbar;
