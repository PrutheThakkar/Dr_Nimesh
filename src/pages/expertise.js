import ReadingCopy from "../components/ReadingCopy"

import * as React from "react"
import Header from "../components/Header"
import ScrollPanImage from "../components/ScrollPanImage"
import Footer from "../components/Footer"
import brainTumoursArtwork from "../images/brain-tumours.webp"
import strokeArtwork from "../images/stroke.webp"
import haemorrhageArtwork from "../images/brain-haemorrhage.webp"
import intracranialArtwork from "../images/raised-intracranial.webp"
import headInjuryArtwork from "../images/head-injury.webp"
import bannerArtwork from "../images/expertise-page-banner.webp"
import degenerativeSpineArtwork from "../images/Degenerative-Spine-Conditions_.webp"
import slipDiscArtwork from "../images/Slip-Disc.webp"
import cordCompressionArtwork from "../images/Spinal-Cord-Compression_.webp"
import spineTraumaArtwork from "../images/Spine-Trauma_.webp"
import traumaHeadArtwork from "../images/Head-Injury-trauma.webp"
import brainTraumaArtwork from "../images/Brain-Trauma.webp"
import traumaSpineArtwork from "../images/Spine-Trauma-trauma-care_.webp"
import rehabilitationArtwork from "../images/Neurorehabilitation-trauma-care.webp"
import "../css/reset.css"
import "../css/common.css"
import "../css/expertise.css"

const introParagraphs = ["Neurosurgical conditions can affect the brain, spinal cord and nerves, sometimes with a significant impact on movement, sensation, balance, speech and everyday function. Dr. Nimesh Jain provides evaluation and treatment for a range of complex brain, spine and trauma-related conditions. His expertise covers both planned neurosurgical care and conditions that may require timely intervention."]

const conditions = [
  { id: "brain-tumours", title: "Brain Tumours", image: brainTumoursArtwork, text: "Brain tumours require careful evaluation because their effect can depend on their size, type, location and relationship with surrounding brain structures. Assessment combines neurological examination with appropriate imaging and investigations. Where surgery is indicated, treatment is planned according to the individual tumour and the neurological functions that need to be preserved." },
  { id: "stroke", title: "Stroke", image: strokeArtwork, text: "Stroke can occur when blood flow to part of the brain is interrupted or when bleeding occurs within the brain. Some patients may develop significant brain swelling, bleeding or pressure that requires neurosurgical assessment. Treatment depends on the type of stroke, its location, severity and the patient's neurological condition." },
  { id: "brain-haemorrhage", title: "Brain Haemorrhage", image: haemorrhageArtwork, text: "A brain haemorrhage occurs when a blood vessel bleeds within or around the brain. Depending on the location and amount of bleeding, it can increase pressure within the skull and affect neurological function. Selected cases may require neurosurgical intervention to remove accumulated blood, relieve pressure or address the underlying cause of bleeding." },
  { id: "raised-intracranial-pressure", title: "Raised Intracranial Pressure", image: intracranialArtwork, text: "The brain sits within the rigid space of the skull. When pressure inside this space increases, it can interfere with normal brain function. Raised intracranial pressure can occur because of conditions such as brain injury, bleeding, swelling or certain brain disorders. Treatment focuses on identifying the underlying cause, controlling pressure and protecting neurological function." },
  { id: "head-injury", title: "Head Injury & Brain Trauma", image: headInjuryArtwork, text: "Head injuries can range from mild trauma to serious injuries involving bleeding, brain swelling or damage to brain tissue. A detailed neurological assessment and appropriate imaging help determine the severity of the injury and whether neurosurgical treatment is required. Timely evaluation is particularly important when symptoms worsen or neurological function changes following a head injury." },
]

const spineConditions = [
  { id: "degenerative-spine", title: "Degenerative Spine Conditions", image: degenerativeSpineArtwork, text: "Degenerative changes can affect the discs, joints and other structures of the spine over time. Depending on the location and severity, these changes can cause back or neck pain, nerve compression, numbness, weakness or difficulty with movement. Treatment is planned according to symptoms, neurological findings and the degree of compression." },
  { id: "slip-disc", title: "Slip Disc", image: slipDiscArtwork, text: "A slipped or herniated disc occurs when the soft inner portion of a spinal disc pushes through its outer layer and may compress a nearby nerve. This can cause back or neck pain along with symptoms such as pain radiating into the arm or leg, numbness, tingling or weakness. Many cases can initially be managed without surgery. Surgery may be considered when symptoms persist, neurological function is affected or significant nerve compression requires intervention." },
  { id: "spinal-cord-compression", title: "Spinal Cord Compression", image: cordCompressionArtwork, text: "The spinal cord carries signals between the brain and the rest of the body. Compression can therefore affect movement, sensation, coordination and balance. Spinal cord compression can result from several conditions, including degenerative changes, disc problems, trauma or other structural abnormalities. Early assessment is important when neurological symptoms are present." },
  { id: "spine-trauma", title: "Spine Trauma", image: spineTraumaArtwork, text: "Trauma to the spine can cause fractures, instability or injury to the spinal cord and nerves. Treatment depends on the location and severity of the injury, the stability of the spine and whether neurological function has been affected. Neurosurgical evaluation helps determine whether observation, immobilisation, rehabilitation or surgical treatment is required." },
]

const traumaCare = [
  { id: "traumatic-head-injury", title: "Head Injury", image: traumaHeadArtwork, text: "Assessment and management of traumatic brain injuries, including injuries associated with bleeding, swelling or damage to brain tissue." },
  { id: "brain-trauma", title: "Brain Trauma", image: brainTraumaArtwork, text: "Evaluation of traumatic brain injuries and their neurological effects, with treatment based on the severity and nature of the injury." },
  { id: "traumatic-spine-injury", title: "Spine Trauma", image: traumaSpineArtwork, text: "Assessment of traumatic spinal injuries, including fractures, instability and associated spinal cord or nerve involvement." },
  { id: "neurorehabilitation", title: "Neurorehabilitation", image: rehabilitationArtwork, text: "Recovery from a brain or spinal injury can continue well beyond the initial treatment. Neurorehabilitation may involve physiotherapy, occupational therapy and other specialised rehabilitation depending on the patient's condition and functional goals." },
]

function ConditionGrid({ items }) {
  return <div className="expertise-page__grid">
    {items.map(condition => <article id={condition.id} key={condition.id}>
      <ScrollPanImage src={condition.image} alt="" loading="lazy" width="833" height="633" />
      <h3>{condition.title}</h3>
      <p>{condition.text}</p>
    </article>)}
  </div>
}

export default function ExpertisePage() {
  return <div className="expertise-page">
    <Header />
    <main>
      <section className="expertise-page__intro" aria-labelledby="expertise-title">
        <h1 id="expertise-title">Brain, Spine <span>&amp;</span> Trauma Care</h1>
        <ScrollPanImage className="expertise-page__banner" src={bannerArtwork} alt="" width="1717" height="656" fetchPriority="high" />
        <ReadingCopy className="expertise-page__reading" paragraphs={introParagraphs} />
      </section>
      <section className="expertise-page__conditions" id="brain-conditions" aria-labelledby="brain-conditions-title">
        <h2 id="brain-conditions-title">Brain <span>Conditions</span></h2>
        <ConditionGrid items={conditions} />
      </section>
      <section className="expertise-page__conditions expertise-page__conditions--spine" id="spine-conditions" aria-labelledby="spine-conditions-title">
        <h2 id="spine-conditions-title">Spine <span>Conditions</span></h2>
        <ConditionGrid items={spineConditions} />
      </section>
      <section className="expertise-page__conditions expertise-page__conditions--trauma" id="trauma-care" aria-labelledby="trauma-care-title">
        <h2 id="trauma-care-title">Neurosurgical <span>&amp;</span> Trauma Care</h2>
        <ConditionGrid items={traumaCare} />
      </section>
    </main>
    <Footer />
  </div>
}

export const Head = () => <title>Expertise | Dr. Nimesh Jain</title>
