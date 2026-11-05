import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y } from "swiper/modules"
import "swiper/css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import banner from "../images/expertise-banner-new.webp"
import tumour from "../images/Brain-tumours-new.webp"
import haemorrhage from "../images/brain-haemorhage-new.webp"
import spine from "../images/slip-disc-new.webp"
import trauma from "../images/trauma_and_emergency_care-new.webp"
import recovery from "../images/neurorehabilitation-new.webp"
import { conditionIcons } from "../components/medicalIcons"
import "../css/reset.css"
import "../css/common.css"
import "../css/treatment.css"

const treatments = [
  { title: "Brain Tumour Surgery", image: tumour, text: "Surgical treatment of selected brain tumours, planned according to the tumour’s location, characteristics and relationship with important neurological structures." },
  { title: "Surgery for Brain Haemorrhage", image: haemorrhage, text: "Selected brain haemorrhages may require surgery to remove accumulated blood, reduce pressure on the brain or address the underlying cause." },
  { title: "Spine Surgery", image: spine, text: "Surgical treatment may be considered for selected cases of slipped disc, nerve compression, degenerative spine disease or spinal cord compression." },
  { title: "Trauma & Emergency Neurosurgery", image: trauma, text: "Severe head injuries, brain trauma and spinal injuries may require urgent neurological assessment and treatment." },
  { title: "Postoperative Care", image: recovery, text: "Following neurosurgery, patients may require neurological monitoring, medication, physiotherapy, rehabilitation and regular follow-up depending on their condition and treatment." },
]

const benefits = [
  { title: "Comprehensive Brain & Spine Care", icon: "spine", text: "Expertise across complex brain conditions, spinal disorders, trauma and neurological injuries." },
  { title: "Individualised Treatment Planning", icon: "pressure", text: "Treatment recommendations are based on the patient’s condition, symptoms, investigations and neurological status." },
  { title: "Clear Communication", icon: "brain", text: "Patients and families are guided through the diagnosis, treatment options and expected recovery process." },
  { title: "Care Beyond Surgery", icon: "trauma", text: "Follow-up and rehabilitation form an important part of recovery following neurosurgical treatment." },
]

export default function TreatmentPage() {
  const swiperRef = React.useRef(null)
  const [activeSlide, setActiveSlide] = React.useState(0)
  const [reducedMotion, setReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  return <div className="treatment-page">
    <Header />
    <main>
      <section className="treatment-page__intro" aria-labelledby="treatment-title">
        <h1 id="treatment-title">Treatments <span>&amp;</span> Procedures</h1>
        <img className="treatment-page__banner" src={banner} alt="" width="1717" height="656" fetchPriority="high" />
        <p>Neurosurgery is not a single treatment pathway. The appropriate treatment depends on the diagnosis,<br className="treatment-page__desktop-break" /> severity of the condition, neurological function and overall health of the patient.<br className="treatment-page__desktop-break" /> Dr. Nimesh Jain evaluates these factors before recommending a treatment approach.</p>
      </section>
      <section className="treatment-page__conditions" aria-labelledby="conditions-title">
        <h2 id="conditions-title">Treatment Based On <span>The Condition</span></h2>
        <div className="treatment-page__slider" role="region" aria-roledescription="carousel" aria-label="Treatments" tabIndex={0} onKeyDown={event => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault()
            if (event.key === "ArrowRight") swiperRef.current?.slideNext()
            else swiperRef.current?.slidePrev()
          }
        }}>
          <Swiper
            id="treatment-swiper"
            modules={[A11y]}
            onSwiper={swiper => { swiperRef.current = swiper }}
            onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 32 } }}
            speed={reducedMotion ? 0 : 600}
            loop
            grabCursor
            a11y={{ slideLabelMessage: "Treatment {{index}} of {{slidesLength}}" }}
          >
            {treatments.map(treatment => <SwiperSlide key={treatment.title}>
              <article className="treatment-page__slide">
                <img src={treatment.image} alt="" width="833" height="633" loading="lazy" draggable={false} />
                <div className="treatment-page__slide-copy">
                  <h3>{treatment.title}</h3>
                  <p>{treatment.text}</p>
                </div>
              </article>
            </SwiperSlide>)}
          </Swiper>
          <div className="treatment-page__pagination" role="group" aria-label="Choose a treatment slide">
            {treatments.map((treatment, index) => <button
              key={treatment.title}
              type="button"
              aria-label={`Show ${treatment.title}`}
              aria-controls="treatment-swiper"
              aria-current={activeSlide === index ? "true" : undefined}
              onClick={() => swiperRef.current?.slideToLoop(index)}
            ><span /></button>)}
          </div>
          <div className="treatment-page__controls">
            <button type="button" aria-label="Previous treatment" aria-controls="treatment-swiper" onClick={() => swiperRef.current?.slidePrev()}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 4-8 8 8 8" /></svg></button>
            <button type="button" aria-label="Next treatment" aria-controls="treatment-swiper" onClick={() => swiperRef.current?.slideNext()}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 4 8 8-8 8" /></svg></button>
          </div>
        </div>
      </section>
      <section className="treatment-page__why" aria-labelledby="why-title">
        <h2 id="why-title">Why <span>Dr Nimesh Jain</span>?</h2>
        <p>Brain and spine conditions can affect much more than a patient’s physical health. They can influence mobility, independence, communication and everyday life. Dr. Nimesh Jain approaches neurosurgical care with attention to both the underlying condition and its effect on neurological function.</p>
        <div className="treatment-page__benefits">
          {benefits.map(benefit => <article key={benefit.title}>
            <img src={conditionIcons[benefit.icon]} alt="" width="140" height="140" loading="lazy" />
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>)}
        </div>
      </section>
    </main>
    <Footer />
  </div>
}

export const Head = () => <>
  <title>Treatments &amp; Procedures | Dr. Nimesh Jain</title>
  <meta name="description" content="Explore Dr. Nimesh Jain’s approach to brain tumour surgery, brain haemorrhage, spine surgery, emergency neurosurgery and postoperative care." />
</>
