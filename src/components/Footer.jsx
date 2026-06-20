import { business, email, phones } from '../siteData'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <img
            src="/goadspot-logo.png"
            alt={`${business.name} - ${business.tagline}`}
            className="footer-logo"
          />
        </div>
        <div className="footer-contact">
          <p>{phones.join(' | ')}</p>
          <p>{email}</p>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
