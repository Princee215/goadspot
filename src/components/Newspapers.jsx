import { newspapers } from '../siteData'

function Newspapers() {
  return (
    <section id="newspapers" className="newspapers">
      <div className="container">
        <h2>Our Newspaper Network</h2>
        <p className="section-subtitle">
          Book your ad in renowned newspapers nationwide.
        </p>
        <div className="newspaper-grid">
          {newspapers.map((name) => (
            <div key={name} className="newspaper-pill">
              {name}
            </div>
          ))}
          <div className="newspaper-pill newspaper-pill-muted">and many more...</div>
        </div>
      </div>
    </section>
  )
}

export default Newspapers
