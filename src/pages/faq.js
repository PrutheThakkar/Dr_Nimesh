import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import bannerArtwork from "../images/FAQ-banner-image.webp"
import "../css/reset.css"
import "../css/common.css"
import "../css/faq.css"

const questions = [
  {
    question: "What conditions does a neurosurgeon treat?",
    answer: "A neurosurgeon evaluates conditions affecting the brain, spine and spinal cord. These may include brain tumours, slipped discs, spinal stenosis, nerve compression, head injuries, bleeding in the brain and certain conditions related to stroke. Treatment depends on the diagnosis and how the condition affects the person.",
  },
  {
    question: "When should I consult a neurosurgeon?",
    answer: "You may need a neurosurgical evaluation if you have persistent neck or back pain with pain spreading to your arms or legs, numbness, muscle weakness, difficulty walking, or scan findings involving the brain or spine. A referral may also be advised after a head or spinal injury.",
  },
  {
    question: "Does every brain or spine condition require surgery?",
    answer: "No. Some conditions can be managed with medication, physiotherapy, observation or other non-surgical treatments. Surgery may be considered when the diagnosis, symptoms and investigation findings indicate that it is appropriate. The decision depends on each person's clinical assessment.",
  },
  {
    question: "What is a slipped disc, and when does it need surgery?",
    answer: "A slipped disc occurs when material from an intervertebral disc moves beyond its usual boundary and may press on nearby nerves. It can cause back or neck pain, tingling, numbness or pain travelling into an arm or leg. Treatment may include medication, activity modification and physiotherapy. Surgery may be considered in selected cases, particularly when there is significant nerve compression, progressive weakness or persistent symptoms despite appropriate treatment.",
  },
  {
    question: "What is spinal stenosis?",
    answer: "Spinal stenosis is the narrowing of the spaces within the spine, which can put pressure on the spinal nerves or spinal cord. Symptoms may include pain, numbness, weakness or difficulty walking. Treatment depends on the location and severity of the narrowing, the symptoms and the findings on clinical examination and imaging.",
  },
  {
    question: "When might back or neck pain need surgical evaluation?",
    answer: "Surgery is not required for every episode of back or neck pain. An evaluation may be needed when pain persists despite appropriate treatment, or when there are signs of nerve or spinal cord compression, spinal instability or neurological changes. New or progressive weakness, or loss of bladder or bowel control, needs urgent medical assessment.",
  },
  {
    question: "What symptoms can a brain tumour cause?",
    answer: "Symptoms depend on the tumour's location, size and growth pattern. They may include persistent or changing headaches, seizures, changes in vision, weakness, difficulty with speech, balance problems or changes in behaviour. These symptoms can also occur with other conditions, so medical assessment and appropriate investigations are important.",
  },
  {
    question: "Does every brain tumour need surgery?",
    answer: "No. Management depends on the type of tumour, its location and size, how it is growing, the symptoms it causes and the person's overall health. Depending on the findings, options may include monitoring, surgery, radiation therapy, medicines or a combination of treatments. The appropriate plan is decided after reviewing the clinical findings and investigations.",
  },
  {
    question: "What should I do after a head injury?",
    answer: "A head injury should be assessed according to its severity and the symptoms present. Seek emergency medical care if there is loss of consciousness, repeated vomiting, worsening headache, confusion, a seizure, unusual drowsiness, weakness or difficulty speaking. Symptoms can sometimes develop after the initial injury, so medical advice is important when there is concern.",
  },
  {
    question: "Can a neurosurgeon treat a stroke?",
    answer: "Some stroke-related conditions require neurosurgical evaluation, particularly certain types of bleeding in the brain, raised pressure within the skull or situations where a procedure may be needed to relieve pressure. Stroke treatment depends on whether the stroke is caused by a blocked blood vessel or bleeding, as well as the timing and clinical findings. Suspected stroke is a medical emergency and requires immediate hospital assessment.",
  },
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
