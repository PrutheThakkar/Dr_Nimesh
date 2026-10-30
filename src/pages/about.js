import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CmsText, paragraphs } from "../components/CmsContent"
import { withFallback } from "../components/homeDefaults"
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

const qualifications = [
  { educationName: "M.B.B.S.", educationPara: "Bachelor of Medicine, Bachelor of<br /> Surgery" },
  { educationName: "M.S. - General Surgery", educationPara: "-" },
  { educationName: "M.Ch. - Neurosurgery", educationPara: "-" },
]

export default function AboutPage({ data }) {
  const about = data?.allWpPage?.edges?.[0]?.node?.aboutPage || {}
  const doctorImage = getImage(about.aboutImageDoctor?.node?.gatsbyImage)
  const steps = withFallback(about.aPatientList, approach.map(step => ({ title: step.title, subTitle: step.lead, para: step.text })))
    .filter(Boolean).map((step, index) => ({
      title: withFallback(step.title, approach[index]?.title),
      subTitle: withFallback(step.subTitle, approach[index]?.lead),
      para: withFallback(step.para, approach[index]?.text),
      icon: approach[index]?.icon || "support",
    }))
  const education = withFallback(about.educationList, qualifications).filter(Boolean).map((item, index) => ({
    educationName: withFallback(item.educationName, qualifications[index]?.educationName),
    educationPara: withFallback(item.educationPara, qualifications[index]?.educationPara),
  }))
  return <div className="about-page">
    <Header />
    <main>
      <section className="about-page__intro" aria-labelledby="about-title">
        <CmsText as="h1" id="about-title" html={withFallback(about.aboutPageTitle, "About <span>Dr. Nimesh Jain</span>")} />
        {doctorImage ? <GatsbyImage className="about-page__media" image={doctorImage} alt={about.aboutImageDoctor.node.altText || "Dr. Nimesh Jain, Consultant Neurosurgeon"} loading="eager" /> : <img className="about-page__media" src={portrait} alt="Dr. Nimesh Jain, Consultant Neurosurgeon" />}
        <ReadingCopy className="about-page__bio" paragraphs={paragraphs(withFallback(about.aboutPagePara, biography.join("\n\n")))} />
      </section>
      <section className="about-page__approach" aria-labelledby="approach-title">
        <CmsText as="h2" id="approach-title" html={withFallback(about.aPatientCentredTitle, "A Patient-Centred Approach to <span>Neurosurgery</span>")} />
        <CmsText className="about-page__description" html={withFallback(about.aPatientSubtitle, "Every neurosurgical condition presents differently.")} />
        <div className="about-page__steps">
          {steps.map((step, index) => <article key={index}>
            <h3><ApproachIcon type={step.icon} /><CmsText as="span" html={step.title} /></h3>
            <CmsText className="about-page__lead" html={step.subTitle} />
            <CmsText className="about-page__step-copy" html={step.para} />
          </article>)}
        </div>
      </section>
      <section className="about-page__education" aria-labelledby="education-title">
        <CmsText as="h2" id="education-title" html={withFallback(about.educationTitle, "Education <span>&amp;</span> Qualifications")} />
        <CmsText className="about-page__description" html={withFallback(about.educationSubtitle, "Every neurosurgical condition presents differently.")} />
        <div className="about-page__qualifications">
          {education.map((item, index) => <article key={index}>
            <CmsText as="h3" html={item.educationName} />
            <CmsText className="about-page__qualification-copy" html={item.educationPara} />
          </article>)}
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


export const query = graphql`
  query AboutPageQuery {
    allWpPage(filter: { databaseId: { eq: 73 } }) {
      edges {
        node {
          aboutPage {
            aboutPageTitle
            aboutImageDoctor {
              node {
                altText
                gatsbyImage(width: 1600, placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
            aboutPagePara
            aPatientCentredTitle
            aPatientSubtitle
            aPatientList { title subTitle para }
            educationTitle
            educationSubtitle
            educationList { educationName educationPara }
          }
        }
      }
    }
  }
`
