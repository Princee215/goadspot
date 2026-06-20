import { audiences, features } from '../siteData'

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Who We Serve</h2>
        <div className="card-grid">
          {audiences.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <h2>Why Choose GoAdSpot</h2>
        <div className="feature-grid">
          {features.map((item) => (
            <div key={item.title} className="feature">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
