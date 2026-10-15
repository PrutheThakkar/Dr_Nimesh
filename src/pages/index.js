import * as React from "react"
import ReadingCopy from "../components/ReadingCopy"
import Header from "../components/Header"
import ScrollPanImage from "../components/ScrollPanImage"
import Footer from "../components/Footer"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, A11y, Keyboard } from "swiper/modules"
import "swiper/css"
import heroBanner from "../images/banner_image-new.webp"
import meetDrNimesh from "../images/meet-dr-nimesh.webp"
import "../css/reset.css"
import "../css/common.css"

// Fixed scattered positions avoid hydration differences between server and browser.
const careDots = [
  [5, 24, 5, 0.08], [14, 48, 8, 0.16], [23, 18, 4, 0.28],
  [31, 62, 6, 0.4], [9, 76, 4, 0.12], [38, 37, 7, 0.52],
  [19, 89, 5, 0.26], [45, 72, 4, 0.64], [28, 43, 3, 0.36],
  [51, 23, 5, 0.76], [35, 84, 7, 0.48], [57, 54, 4, 0.88],
]

const careParagraphs = [
  "Conditions involving the brain and spine can affect some of the most important aspects of everyday life, including movement, sensation, balance, speech and independence.",
  "Dr. Nimesh Jain takes a structured approach to neurosurgical care, combining clinical assessment with appropriate imaging and investigations to understand the underlying condition.",
  "When surgery is required, the treatment plan is based on the condition, its severity and the structures involved. Where appropriate, non-surgical management and rehabilitation may also form part of the treatment journey.",
]
const aboutParagraphs = [
  "Dr. Nimesh Jain is a Consultant Neurosurgeon with expertise in brain, spine and trauma-related neurosurgical conditions.",
  "His clinical practice includes the management of complex brain conditions, spinal disorders, traumatic brain injuries and conditions affecting the spinal cord and nerves.",
  "His approach combines careful clinical assessment, appropriate investigations and individualised treatment planning.",
]


const expertise = [
  {
    slug: "brain", title: "Brain Disorders",
    description: "Surgical management of brain tumours, intracranial bleeding, hydrocephalus, raised intracranial pressure and selected stroke related neurosurgical conditions.",
    topics: ["Brain tumours", "Intracranial bleeding", "Hydrocephalus", "Raised intracranial pressure", "Selected stroke related conditions"],
  },
  {
    slug: "spine", title: "Spine Disorders",
    description: "Assessment and management of spinal disorders, including disc problems and conditions affecting the spinal cord and nerves.",
    topics: ["Spinal disorders", "Disc problems", "Spinal cord conditions", "Nerve compression"],
  },
  {
    slug: "trauma", title: "Trauma & Emergency Care",
    description: "Neurosurgical care for traumatic brain injuries, spinal injuries and acute conditions involving the brain and spine.",
    topics: ["Traumatic brain injuries", "Spinal injuries", "Acute brain and spine conditions"],
  },
]

function ExpertiseSection() {
  const [selected, setSelected] = React.useState(null)
  const dialogRef = React.useRef(null)
  React.useEffect(() => {
    if (selected) dialogRef.current.showModal()
  }, [selected])
  return (
    <section className="expertise-section" id="expertise" aria-labelledby="expertise-heading">
      <div className="container">
        <h2 id="expertise-heading">Area Of <span>Expertise</span></h2>
        <div className="expertise-grid">
          {expertise.map(item => (
            <article className={`expertise-card expertise-card--${item.slug}`} key={item.slug} tabIndex={0} aria-labelledby={`expertise-${item.slug}`}>
              <div className="expertise-card__content">
                <h3 id={`expertise-${item.slug}`}>{item.title}</h3>
                <div className="expertise-card__reveal">
                  <div className="expertise-card__details">
                    <p>{item.description}</p>
                    <button type="button" onClick={() => setSelected(item)} aria-label={`Explore ${item.title}`}>Explore</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <dialog className="expertise-dialog" ref={dialogRef} onClose={() => setSelected(null)} aria-labelledby="expertise-dialog-heading">
        {selected && <>
          <button className="expertise-dialog__close" type="button" onClick={() => dialogRef.current.close()} aria-label="Close expertise details">×</button>
          <h2 id="expertise-dialog-heading">{selected.title}</h2>
          <p>{selected.description}</p>
          <ul>{selected.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
        </>}
      </dialog>
    </section>
  )
}

const careQuestions = [
  {
    question: "What is causing the problem?",
    answer: "Understanding the cause begins with a discussion of symptoms, a clinical assessment and a review of appropriate imaging and investigations. Dr. Nimesh Jain explains the findings and how they relate to your condition.",
  },
  {
    question: "What happens if it is left untreated?",
    answer: "This depends on the diagnosis and how the condition is affecting neurological function. Your consultation includes a discussion of the possible course of the condition, the options available and the reasons for recommending treatment or monitoring.",
  },
  {
    question: "Does it require surgery?",
    answer: "The treatment plan is individualised. Dr. Nimesh Jain discusses whether surgery, non-surgical management or further assessment is appropriate, along with the intended benefits and risks of the available options.",
  },
  {
    question: "What will recovery look like?",
    answer: "Recovery planning takes the condition, treatment and individual needs into account. Your care discussion covers follow-up, rehabilitation where appropriate and the expectations for neurological recovery.",
  },
]

function CareQuestionsSection() {
  const [openQuestions, setOpenQuestions] = React.useState([])
  const allOpen = openQuestions.length === careQuestions.length
  const toggleQuestion = index => setOpenQuestions(current =>
    current.includes(index) ? current.filter(item => item !== index) : [...current, index]
  )
  return (
    <section className="care-questions" aria-labelledby="care-questions-heading">
      <div className="container care-questions__content">
        <h2 id="care-questions-heading">When Neurological Function Is at Risk,<br /><span>Every Decision Matters</span></h2>
        <p className="care-questions__intro">A neurosurgical diagnosis can bring many questions like</p>
        <div className="care-questions__grid">
          {careQuestions.map((item, index) => {
            const isOpen = openQuestions.includes(index)
            return (
              <div className={`care-question${isOpen ? " is-open" : ""}`} key={item.question}>
                <h3>
                  <button type="button" id={`care-question-${index}`} aria-expanded={isOpen} aria-controls={`care-answer-${index}`} onClick={() => toggleQuestion(index)}>
                    <span>{item.question}</span><span className="care-question__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="care-question__answer" id={`care-answer-${index}`} role="region" aria-labelledby={`care-question-${index}`} aria-hidden={!isOpen}>
                  <div><p>{item.answer}</p></div>
                </div>
              </div>
            )
          })}
        </div>
        <p className="care-questions__summary">Dr. Nimesh Jain believes patients should understand their condition and treatment options clearly before making decisions about their care.<br />The approach is centred on accurate diagnosis, appropriate treatment and continued attention to neurological recovery.</p>
        <button className="care-questions__read-all" type="button" onClick={() => setOpenQuestions(allOpen ? [] : careQuestions.map((_, index) => index))}>{allOpen ? "Close All" : "Read All"}</button>
      </div>
    </section>
  )
}

const treatedConditions = [
  { title: "Brain Tumours", description: "Assessment and surgical management of selected brain tumors.", icon: "brain" },
  { title: "Stroke & Brain Haemorrhage", description: "Neurosurgical evaluation and management of selected cases involving bleeding, swelling or pressure on the brain.", icon: "stroke" },
  { title: "Raised Intracranial Pressure", description: "Assessment and treatment of conditions causing increased pressure inside the skull.", icon: "pressure" },
  { title: "Head Injury & Brain Trauma", description: "Evaluation and management of traumatic injuries affecting the brain.", icon: "trauma" },
  { title: "Degenerative Spine Conditions", description: "Treatment planning for conditions affecting the spinal discs, vertebrae and nerves.", icon: "spine" },
  { title: "Hydrocephalus", description: "Assessment and management of conditions involving fluid build-up within the brain.", icon: "fluid" },
]

function ConditionIcon({ type }) {
  const nodes = [[20, 35], [31, 20], [48, 14], [64, 19], [80, 31], [88, 47], [75, 62], [60, 70], [42, 65], [26, 53], [43, 38], [61, 40], [62, 56]]
  return (
    <svg className="condition-card__icon" viewBox="0 0 110 100" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      {type === "spine" ? <>
        <path d="M60 8C35 30 75 53 46 88M69 12C45 34 85 57 55 92" />
        {Array.from({ length: 8 }, (_, i) => <path key={i} d={`M${48 + Math.sin(i) * 9} ${15 + i * 10}l18 4-2 7-18-4z`} />)}
      </> : <>
        <path d="M23 57C6 53 10 29 27 27 20 10 40 5 48 13 58 4 72 13 74 22 96 21 105 44 88 54 96 69 76 80 66 71 57 81 40 72 36 63 28 68 20 63 23 57ZM66 71l8 17-10-2-7-12" />
        {nodes.map(([x, y], i) => <g key={i}>
          <path d={`M${x} ${y}L${nodes[(i + 1) % nodes.length].join(" ")}M${x} ${y}L${nodes[(i + 4) % nodes.length].join(" ")}`} />
          <circle cx={x} cy={y} r="1.6" fill="currentColor" />
        </g>)}
        {type === "pressure" && <path d="M34 1q-5 5 0 10M50 0q-5 5 0 10M67 2q-5 5 0 10" />}
        {type === "trauma" && <path d="M75 8l-9 8 12 2-7 9M87 10l-5 7M94 21l-9 3" />}
        {type === "stroke" && <path d="M80 9l-3 10M93 14l-7 9M101 30l-9 2M94 42l9 5" />}
        {type === "fluid" && <path d="M54 24c-2 5-7 9-7 13a7 7 0 0 0 14 0c0-4-5-8-7-13Z" />}
      </>}
    </svg>
  )
}

function ConditionsSection() {
  const swiperRef = React.useRef(null)
  const [paused, setPaused] = React.useState(false)
  const [reducedMotion, setReducedMotion] = React.useState(false)
  React.useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(motion.matches)
    update()
    motion.addEventListener("change", update)
    return () => motion.removeEventListener("change", update)
  }, [])
  React.useEffect(() => {
    const autoplay = swiperRef.current?.autoplay
    if (paused || reducedMotion) autoplay?.stop()
    else autoplay?.start()
  }, [paused, reducedMotion])
  return (
    <section className="conditions-section" id="conditions" aria-labelledby="conditions-heading">
      <h2 id="conditions-heading">Conditions <span>Treated</span></h2>
      <div className="conditions-section__slider" onFocusCapture={() => swiperRef.current?.autoplay?.stop()} onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget) && !paused && !reducedMotion) swiperRef.current?.autoplay?.start()
      }}>
        <Swiper modules={[Autoplay, A11y, Keyboard]} onSwiper={swiper => { swiperRef.current = swiper }}
          slidesPerView={1.15} spaceBetween={0} loop speed={900}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          breakpoints={{ 600: { slidesPerView: 2.15 }, 1000: { slidesPerView: 3.3 }, 1400: { slidesPerView: 4.25 } }}
          a11y={{ containerMessage: "Conditions treated carousel" }}>
          {treatedConditions.map(item => <SwiperSlide key={item.title}>
            <article className="condition-card">
              <ConditionIcon type={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </SwiperSlide>)}
        </Swiper>
      </div>
      <div className="container conditions-section__controls">
        <button type="button" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous condition">←</button>
        <button type="button" onClick={() => setPaused(current => !current)} aria-pressed={paused} disabled={reducedMotion}>{reducedMotion ? "Autoscroll off" : paused ? "Play" : "Pause"}</button>
        <button type="button" onClick={() => swiperRef.current?.slideNext()} aria-label="Next condition">→</button>
      </div>
    </section>
  )
}

const IndexPage = () => (
  <main>
    <section className="hero" aria-labelledby="hero-heading">
      <Header />
      <div className="hero__image">
        <img src={heroBanner} alt="Soft orange waves and glowing interconnected points on a cream background" fetchPriority="high" />
      </div>
      <div className="hero__content">
        <h1 id="hero-heading"><span className="hero__title-line">Advanced <span>Brain &amp; Spine Surgery</span></span><span className="hero__title-line">With Ethical &amp; Precise Care</span></h1>
        <p>Dr. Nimesh Jain specializes in the diagnosis and surgical management of brain tumours,<br className="desktop-break" /> spine disorders, trauma and stroke, with a focus on safety, clarity and long-term recovery.</p>
        <div className="hero__actions">
          <a className="button button--primary" href="/contact/">Book a Consultation</a>
          <a className="button button--outline" href="#conditions">Explore Treatments</a>
        </div>
      </div>
    </section>

    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="container about-section__content">
        <ScrollPanImage className="about-section__portrait" src={meetDrNimesh} alt="Dr. Nimesh Jain, Consultant Neurosurgeon" loading="lazy" />
        <div className="about-section__bio">
          <h2 id="about-heading">Meet <span>Dr. Nimesh Jain</span></h2>
          <ReadingCopy paragraphs={aboutParagraphs} className="about-section__intro" />
          <ul className="about-section__highlights">
            <li>
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5H7v24h18V5h-5M12 3h8v5h-8zM11 14l2 2 3-4M18 14h3M11 23l2 2 3-4M18 23h3" />
              </svg>
              <span>Detailed evaluation of brain &amp; spine disorders</span>
            </li>
            <li>
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="8" cy="17" r="3" /><path d="M3 29v-4a5 5 0 0 1 10 0v4M15 5h14v12H19l-4 4V5zM19 9h6M19 13h4" />
              </svg>
              <span>Transparent explanation of diagnosis &amp; treatment</span>
            </li>
            <li>
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="16" cy="6" r="3" /><path d="M10 18v-2a6 6 0 0 1 12 0v2M3 21h5v9H3zM8 23l5-3h5a2 2 0 0 1 0 4h-4M8 28h12l9-6a2 2 0 0 0-3-3l-7 5" />
              </svg>
              <span>Care focused on safety, recovery and quality of life</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="care-section" aria-labelledby="care-heading">
      <div className="care-section__drawing-dots" aria-hidden="true">
        {careDots.map(([left, top, size, delay], index) => <span key={index} style={{
          left: `${left}%`, top: `${top}%`, "--dot-size": `${size}px`, "--dot-delay": `${delay}s`,
        }} />)}
      </div>
      <div className="container care-section__content">
        <h2 id="care-heading"><span>Neurosurgical Care</span><br />That Begins With Understanding</h2>
        <ReadingCopy paragraphs={careParagraphs} />
      </div>
    </section>
    <div className="decision-section">
      <ExpertiseSection />
      <CareQuestionsSection />
    </div>
    <ConditionsSection />
    <Footer />
  </main>
)

export default IndexPage
export const Head = () => <title>Dr. Nimesh Jain | Brain, Spine &amp; Trauma Care</title>
