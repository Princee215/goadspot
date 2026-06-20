import { useState } from 'react'
import { sendEnquiry } from '../lib/sendEnquiry'

function EnquiryForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      const result = await sendEnquiry(event.target)
      if (result.success) {
        setStatus('sent')
        event.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-form-wrap">
      <h2>Get in Touch</h2>
      <p className="section-subtitle">
        Tell us about the ad you want to book and we'll get back to you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" required />
        </label>
        <label>
          Email (optional)
          <input type="email" name="email" />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" required />
        </label>
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
        </button>

        {status === 'sent' && (
          <p className="form-status form-status-success">
            Thanks! We've received your enquiry and will reach out soon.
          </p>
        )}
        {status === 'error' && (
          <p className="form-status form-status-error">
            Something went wrong. Please reach out using the contact details below.
          </p>
        )}
      </form>
    </div>
  )
}

export default EnquiryForm
