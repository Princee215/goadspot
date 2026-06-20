import { email, mailtoLink, phones, telLink, whatsappLink } from '../siteData'

function QuickContact() {
  return (
    <div className="quick-contact">
      <a className="btn btn-outline" href={telLink(phones[0])}>
        Call {phones[0]}
      </a>
      <a className="btn btn-outline" href={telLink(phones[1])}>
        Call {phones[1]}
      </a>
      <a
        className="btn btn-whatsapp"
        href={whatsappLink(
          phones[0],
          "Hi, I'm interested in booking a newspaper ad with GoAdSpot."
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp Us
      </a>
      <a className="btn btn-outline" href={mailtoLink(email, 'Newspaper Ad Enquiry')}>
        Email {email}
      </a>
    </div>
  )
}

export default QuickContact
