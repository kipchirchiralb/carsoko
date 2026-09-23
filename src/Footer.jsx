import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href="/">
          carsoko<span>.</span>
        </a>
        <p>A better way to find your next car in Kenya.</p>
      </div>
      <div className="footer-links">
        <a href="#search">Find a car</a>
        <a href="#faq">FAQs</a>
        <a href="mailto:info@carsoko.co.ke">Email us</a>
      </div>
      <p className="copyright">&copy; 2026 Carsoko</p>
    </footer>
  );
}

export default Footer;
