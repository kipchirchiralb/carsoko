import "./ContactBanner.css";

function ContactBanner() {
  return (
    <section className="contact-banner" id="contact">
      <div>
        <p className="eyebrow">Need a hand?</p>
        <h2>We are here to help you find the right drive.</h2>
      </div>
      <a href="mailto:info@carsoko.co.ke">
        info@carsoko.co.ke <span aria-hidden="true">-&gt;</span>
      </a>
    </section>
  );
}

export default ContactBanner;
