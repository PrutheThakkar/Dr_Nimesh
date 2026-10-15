import * as React from "react"
import ReadingCopy from "../components/ReadingCopy"
import Header from "../components/Header"
import portrait from "../images/meet-dr-nimesh.webp"
import Footer from "../components/Footer"
import "../css/reset.css"
import "../css/common.css"
import "../css/about.css"

const biography = [
  "Dr. Nimesh Jain is a Consultant Neurosurgeon specialising in the evaluation and treatment of conditions affecting the brain, spine, spinal cord and nerves. His areas of clinical expertise include brain tumours, stroke, brain haemorrhage, raised intracranial pressure, head injury, brain trauma, degenerative spine conditions, slipped discs, spinal cord compression and spine trauma.",
  "Neurosurgery often involves complex medical decisions. Dr. Jain's approach begins with understanding the patient's symptoms, neurological examination, medical history and imaging before developing an appropriate treatment plan."
]

const approach = [
  { title: "Understand", icon: "understand", lead: "Every patient is different", text: "Location, severity, existing health conditions and neurological function are considered before treatment is recommended." },
  { title: "CHOOSE", icon: "choose", lead: "The treatment should fit the patient.", text: "Where surgery is indicated, patients are guided through why it is recommended and what the expected goals are. When surgery isn't immediately required, medical management, observation or rehabilitation may be considered." },
  { title: "SUPPORT", icon: "support", lead: "The goal extends beyond surgery.", text: "Treatment decisions are made with the patient's long-term neurological health and recovery in mind." },
]

function ApproachIcon({ type }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    {type === "understand" ? <><circle cx="9" cy="7" r="3" /><path d="M3 20v-3a6 6 0 0 1 12 0v3H3Z" /><path d="M16 3h5v6h-5l-3 3V6a3 3 0 0 1 3-3Z" /></> : type === "choose" ? <><path d="m10 8 3 13 3-5 5-3-11-5Z" /><path d="M4 4 7 7M3 11h4M11 2v4M17 4l-3 3M5 17l3-3" /></> : <><circle cx="12" cy="5" r="3" /><path d="M5 22v-8a7 7 0 0 1 14 0v8H5Z" /><path d="m12 19-3-3a2 2 0 0 1 3-3 2 2 0 0 1 3 3l-3 3Z" /></>}
  </svg>
}

export default function AboutPage() {
  return <div className="about-page">
    <Header />
    <main>
      <section className="about-page__intro" aria-labelledby="about-title">
        <h1 id="about-title">About <span>Dr. Nimesh Jain</span></h1>
        <img className="about-page__media" src={portrait} alt="Dr. Nimesh Jain, Consultant Neurosurgeon" />
        <ReadingCopy className="about-page__bio" paragraphs={biography} />
      </section>
      <section className="about-page__approach" aria-labelledby="approach-title">
        <h2 id="approach-title">A Patient-Centred Approach to <span>Neurosurgery</span></h2>
        <p className="about-page__description">Every neurosurgical condition presents differently.</p>
        <div className="about-page__steps">
          {approach.map(step => <article key={step.title}>
            <h3><ApproachIcon type={step.icon} />{step.title}</h3>
            <p className="about-page__lead">{step.lead}</p>
            <p>{step.text}</p>
          </article>)}
        </div>
      </section>
      <section className="about-page__education" aria-labelledby="education-title">
        <h2 id="education-title">Education <span>&amp;</span> Qualifications</h2>
        <p className="about-page__description">Every neurosurgical condition presents differently.</p>
        <div className="about-page__qualifications">
          <article><h3>M.B.B.S.</h3><p>Bachelor of Medicine, Bachelor of<br className="desktop-break" /> Surgery</p></article>
          <article><h3>M.S. - General Surgery</h3><p>-</p></article>
          <article><h3>M.Ch. - Neurosurgery</h3><p>-</p></article>
        </div>
      </section>
      <section className="about-page__consults" aria-labelledby="consults-title">
        <h2 id="consults-title">Where He <span>Consults</span></h2>
        <div className="about-page__consultation">
          <iframe
            className="about-page__map"
            title="Wockhardt Hospitals, Mira Road location"
            src="https://www.google.com/maps?q=Wockhardt+Hospitals+Mira+Road+Mumbai&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="about-page__consultation-details">
            <p>Dr. Nimesh Jain<br />Consultant Neurosurgeon<br />Wockhardt Hospitals, Mira Road, Mumbai</p>
            <a className="button button--primary" href="/contact/">Book a Consultation</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
}

export const Head = () => <title>About Dr. Nimesh Jain | Neurosurgeon</title>
