import EnquiryForm from './EnquiryForm'
import QuickContact from './QuickContact'
import Addresses from './Addresses'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <EnquiryForm />
        <div className="contact-info">
          <QuickContact />
          <Addresses />
        </div>
      </div>
    </section>
  )
}

export default Contact
