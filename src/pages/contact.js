import * as React from "react"
import contactArtwork from "../images/contact new.webp"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../css/reset.css"
import "../css/common.css"

export default function ContactPage() {
  return <div className="contact-page"><Header /><main className="contact-page__content">
    <h1>Plan Your Consultation</h1>
    <p>Dr. Nimesh Jain · Consultant Neurosurgeon</p>
    <img className="contact-page__banner" src={contactArtwork} alt="" fetchPriority="high" />
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
