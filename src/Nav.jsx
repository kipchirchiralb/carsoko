import "./Nav.css";

function Nav() {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        carsoko<span>.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#search">Find a car</a>
        <a href="#faq">How it works</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-action" href="#search">
        Browse cars <span aria-hidden="true">-&gt;</span>
      </a>
    </header>
  );
}

export default Nav;
