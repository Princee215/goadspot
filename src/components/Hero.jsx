import { business, phones, whatsappLink } from '../siteData'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <h1>{business.tagline}</h1>
        <p>{business.description}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Get a Free Quote
          </a>
          <a
            className="btn btn-whatsapp"
            href={whatsappLink(phones[0], "Hi, I'm interested in booking a newspaper ad with GoAdSpot.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
