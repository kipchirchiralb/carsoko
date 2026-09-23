import "./Slider.css";

function Slider() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Kenya's smarter car marketplace</p>
        <h1>Find a car that fits your life.</h1>
        <p className="hero-text">
          Shop trusted cars from sellers across Kenya, with the details you need
          to choose with confidence.
        </p>
        <a className="primary-button" href="#search">
          Explore cars <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
      <div className="hero-visual">
        <img src="/src/assets/hero.png" alt="Cars available on Carsoko" />
        <div className="hero-badge">
          <strong>10k+</strong>
          <span>cars listed</span>
        </div>
      </div>
    </section>
  );
}
export default Slider;

// npm create vite@latest -- --template react
// choose javascript
// choose es lint
// y accept config
