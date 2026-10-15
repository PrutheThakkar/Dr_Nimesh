import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import bannerArtwork from "../images/FAQ-banner-image.webp"
import "../css/reset.css"
import "../css/common.css"
import "../css/faq.css"

const questions = [
  {
    question: "What is causing the problem?",
    answer: "Understanding the cause begins with a discussion of symptoms, a clinical assessment and a review of appropriate imaging and investigations. Dr. Nimesh Jain explains the findings and how they relate to your condition.",
  },
  {
    question: "Does it require surgery?",
    answer: "The treatment plan is individualised. Dr. Nimesh Jain discusses whether surgery, non-surgical management or further assessment is appropriate, along with the intended benefits and risks of the available options.",
  },
  {
    question: "What happens if it is left untreated?",
    answer: "This depends on the diagnosis and how the condition is affecting neurological function. Your consultation includes a discussion of the possible course of the condition, the options available and the reasons for recommending treatment or monitoring.",
  },
  {
    question: "What will recovery look like?",
    answer: "Recovery planning takes the condition, treatment and individual needs into account. Your care discussion covers follow-up, rehabilitation where appropriate and the expectations for neurological recovery.",
  },
  {
    question: "What should I bring to my consultation?",
    answer: "Bring any available medical reports, scan images and reports, a list of current medicines, and details of previous treatment. Writing down your symptoms and the questions you would like to discuss can help you prepare for the appointment.",
  },
  {
    question: "How can I arrange a consultation?",
    answer: <>Visit the <a href="/contact/">contact page</a> to enquire about a consultation with Dr. Nimesh Jain and confirm appointment details.</>,
  },
]

export default function FAQPage() {
  return <div className="faq-page">
    <Header />
    <main>
      <section className="faq-page__intro" aria-labelledby="faq-title">
        <h1 id="faq-title">FAQ</h1>
        <img className="faq-page__banner" src={bannerArtwork} alt="" fetchPriority="high" />
      </section>
      <section className="faq-page__questions" aria-labelledby="faq-questions-title">
        <div className="faq-page__content">
          <h2 id="faq-questions-title">When Neurological Function Is at Risk,<br /><span>Every Decision Matters</span></h2>
          <div className="faq-page__list">
            {questions.map((item, index) => <details className="faq-page__item" key={item.question}>
              <summary id={`faq-question-${index}`}><h3>{item.question}</h3><span className="faq-page__icon" aria-hidden="true" /></summary>
              <div className="faq-page__answer" role="region" aria-labelledby={`faq-question-${index}`}><p>{item.answer}</p></div>
            </details>)}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
}

export const Head = () => <>
  <html lang="en" />
  <title>Frequently Asked Questions | Dr. Nimesh Jain</title>
  <meta name="description" content="Answers to common questions about neurosurgical consultations, treatment decisions and recovery with Dr. Nimesh Jain." />
</>
