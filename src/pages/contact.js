import * as React from "react"
import contactArtwork from "../images/contact new.webp"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../css/reset.css"
import "../css/common.css"

export default function ContactPage() {
  const [formNotice, setFormNotice] = React.useState("")
  const [sending, setSending] = React.useState(false)
  const formEndpoint = process.env.GATSBY_CONTACT_FORM_ENDPOINT
  return <div className="contact-page"><Header /><main className="contact-page__content">
    <h1>Plan Your Consultation</h1>
    {/* <p>Dr. Nimesh Jain · Consultant Neurosurgeon</p> */}
    <img className="contact-page__banner" src={contactArtwork} alt="" fetchPriority="high" />
    <section className="contact-page__enquiry" aria-labelledby="enquiry-title">
      <h2 id="enquiry-title">Send an Enquiry</h2>
      <form className="contact-page__form" onSubmit={async event => {
        event.preventDefault()
        if (!formEndpoint || sending) return
        const form = event.currentTarget
        setSending(true)
        setFormNotice("")
        try {
          const response = await fetch(formEndpoint, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" },
          })
          if (!response.ok) throw new Error("Submission failed")
          form.reset()
          setFormNotice("Thank you. Your enquiry has been sent.")
        } catch {
          setFormNotice("Your message could not be sent. Please try again or contact the hospital’s appointment desk.")
        } finally {
          setSending(false)
        }
      }}>
        <div className="contact-page__field">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required maxLength={120} />
        </div>
        <div className="contact-page__field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required maxLength={254} />
        </div>
        <div className="contact-page__field contact-page__field--wide">
          <label htmlFor="contact-phone">Phone Number</label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required maxLength={30} />
        </div>
        <div className="contact-page__field contact-page__field--wide">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows={5} placeholder="How can we help?" required maxLength={5000} />
        </div>
        {/* {!formEndpoint && <p className="contact-page__form-note">Online enquiries are being set up. Please contact the hospital’s appointment desk to book a consultation.</p>} */}
        <button className="button button--primary" type="submit" disabled={!formEndpoint || sending}>{sending ? "Sending…" : "Send Message"}</button>
        <p className="contact-page__form-status" role="status">{formNotice}</p>
      </form>
    </section>
    <div className="contact-page__grid">
      <div><h2>Where to Visit</h2><p>Wockhardt Hospitals<br />Mira Road, Mumbai</p>
        <p>Please contact the hospital’s appointment desk to confirm consultation availability before your visit.</p>
        <a className="button button--primary" href="https://www.google.com/maps/search/?api=1&query=Wockhardt+Hospitals+Mira+Road+Mumbai" target="_blank" rel="noopener noreferrer">Get Directions ↗</a>
        <p>Bring your scan images, medical reports and a list of current medicines to help prepare for your consultation.</p>
      </div>
      <iframe title="Wockhardt Hospitals, Mira Road location" src="https://www.google.com/maps?q=Wockhardt+Hospitals+Mira+Road+Mumbai&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
    </div>

  </main><Footer /></div>
}
export const Head = () => <><title>Contact | Dr. Nimesh Jain</title><meta name="description" content="Plan your consultation with Dr. Nimesh Jain at Wockhardt Hospitals, Mira Road, Mumbai." /></>
