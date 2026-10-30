import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import sanitizeHtml from "sanitize-html"
import { CmsText, paragraphs } from "../components/CmsContent"
import ReadingCopy from "../components/ReadingCopy"
import Header from "../components/Header"
import ScrollPanImage from "../components/ScrollPanImage"
import Footer from "../components/Footer"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, A11y, Keyboard } from "swiper/modules"
import "swiper/css"
import { conditionIcons } from "../components/medicalIcons"
import { mergeHome, ConditionIcon } from "../components/homeDefaults"
import heroBanner from "../images/banner_image-new.webp"
import brainImage from "../images/brain_disorder-new.webp"
import spineImage from "../images/spine_disorders-new.webp"
import traumaImage from "../images/trauma_and_emergency_care-new.webp"
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

// WordPress content takes priority over the original static defaults.
function CmsIcon({ svg, className }) {
  return <span className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: sanitizeHtml(svg || "", {
    allowedTags: ["svg", "g", "path", "circle", "ellipse", "rect", "line", "polyline", "polygon", "defs", "linearGradient", "radialGradient", "stop", "clipPath", "mask", "title"],
    allowedAttributes: { "*": ["viewBox", "xmlns", "width", "height", "fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "fill-rule", "clip-rule", "d", "cx", "cy", "r", "rx", "ry", "x", "y", "x1", "x2", "y1", "y2", "points", "transform", "opacity", "fill-opacity", "stroke-opacity", "id", "offset", "stop-color", "stop-opacity", "gradientUnits", "gradientTransform", "clip-path"] },
    parser: { lowerCaseTags: false, lowerCaseAttributeNames: false },
  }) }} />
}

function ExpertiseSection({ items }) {
  return (
    <section className="expertise-section" id="expertise" aria-labelledby="expertise-heading">
      <div className="container">
        <h2 id="expertise-heading">Area Of <span>Expertise</span></h2>
        <div className="expertise-grid">
          {items.map((item, index) => {
            const image = getImage(item.areaImage?.node?.gatsbyImage)
            const link = item.areaLinkRedirect
            return <article className={`expertise-card${index === 0 ? " expertise-card--featured" : ""}`} key={index} tabIndex={0} aria-labelledby={`expertise-${index}`}>
              {image ? <GatsbyImage className="expertise-card__image" image={image} alt={item.areaImage.node.altText || ""} /> : <img className="expertise-card__image" src={[brainImage, spineImage, traumaImage][index % 3]} alt="" loading="lazy" />}
              <div className="expertise-card__content">
                <CmsText as="h3" id={`expertise-${index}`} html={item.areaTitle} />
                <div className="expertise-card__reveal">
                  <div className="expertise-card__details">
                    <CmsText html={item.areaPara} />
                    {link?.url && <a className="expertise-card__link" href={link.url} target={link.target || undefined} rel={link.target === "_blank" ? "noopener noreferrer" : undefined}>{link.title || "Explore"}</a>}
                  </div>
                </div>
              </div>
            </article>
          })}
        </div>
      </div>
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

function CareQuestionsSection({ title, subtitle, bottomParagraph }) {
  const [openQuestions, setOpenQuestions] = React.useState([])
  const allOpen = openQuestions.length === careQuestions.length
  const toggleQuestion = index => setOpenQuestions(current =>
    current.includes(index) ? current.filter(item => item !== index) : [...current, index]
  )
  return (
    <section className="care-questions" aria-labelledby="care-questions-heading">
      <div className="container care-questions__content">
        <CmsText as="h2" id="care-questions-heading" html={title} />
        <CmsText className="care-questions__intro" html={subtitle} />
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
        <CmsText className="care-questions__summary" html={bottomParagraph} />
        <button className="care-questions__read-all" type="button" onClick={() => setOpenQuestions(allOpen ? [] : careQuestions.map((_, index) => index))}>{allOpen ? "Close All" : "Read All"}</button>
      </div>
    </section>
  )
}

function ConditionsSection({ title, items }) {
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
      <CmsText as="h2" id="conditions-heading" html={title} />
      <div className="conditions-section__slider" onFocusCapture={() => swiperRef.current?.autoplay?.stop()} onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget) && !paused && !reducedMotion) swiperRef.current?.autoplay?.start()
      }}>
        <Swiper modules={[Autoplay, A11y, Keyboard]} onSwiper={swiper => { swiperRef.current = swiper }}
          slidesPerView={1.15} spaceBetween={0} loop={items.length > 4} speed={900}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          breakpoints={{ 600: { slidesPerView: 2.15 }, 1000: { slidesPerView: 3.3 }, 1400: { slidesPerView: 4.25 } }}
          a11y={{ containerMessage: "Conditions treated carousel" }}>
          {items.map((item, index) => <SwiperSlide key={index}>
            <article className="condition-card">
              {item.conditionsSvgIcon?.includes("<svg") ? <CmsIcon className="condition-card__icon" svg={item.conditionsSvgIcon} /> : conditionIcons[item.icon] ? <img className="condition-card__icon" src={conditionIcons[item.icon]} alt="" loading="lazy" /> : <ConditionIcon type={item.icon || "brain"} />}
              <CmsText as="h3" html={item.conditionTitle} />
              <CmsText html={item.conditionPara} />
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

const IndexPage = ({ data }) => {
  const home = mergeHome(data?.allWpPage?.edges?.[0]?.node?.homePage || {})
  const heroImage = getImage(home.pageBackgroundImage?.node?.gatsbyImage)
  return (
  <main>
    <section className="hero" aria-labelledby="hero-heading">
      <Header />
      <div className="hero__image">
        {heroImage ? <GatsbyImage image={heroImage} alt={home.pageBackgroundImage.node.altText || ""} loading="eager" fetchPriority="high" /> : <img src={heroBanner} alt="Soft orange waves and glowing interconnected points on a cream background" fetchPriority="high" />}
      </div>
      <div className="hero__content">
        <CmsText as="h1" id="hero-heading" html={home.pageTitle} />
        <CmsText className="hero__subtitle" html={home.pageSubtitle} />
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
          <CmsText as="h2" id="about-heading" html={home.aboutTitle} />
          <ReadingCopy paragraphs={paragraphs(home.aboutParagraph)} className="about-section__intro" />
          <ul className="about-section__highlights">
            {(home.detailsList || []).map((item, index) => <li key={index}>
              <CmsIcon svg={item.iconSvg} />
              <CmsText as="span" html={item.text} />
            </li>)}
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
        <CmsText as="h2" id="care-heading" html={home.neuroTitle} />
        <ReadingCopy paragraphs={paragraphs(home.neuroPara)} />
      </div>
    </section>
    <div className="decision-section">
      <ExpertiseSection items={home.areaList || []} />
      <CareQuestionsSection title={home.everyDecisionMattersTitle} subtitle={home.everyDecisionMattersSubtitle} bottomParagraph={home.everyDecisionMattersBottomPara} />
    </div>
    <ConditionsSection title={home.conditionTreatedTitle} items={home.conditionTreatedList || []} />
    <Footer />
  </main>
  )
}

export default IndexPage
export const Head = () => <title>Dr. Nimesh Jain | Brain, Spine &amp; Trauma Care</title>


export const query = graphql`
  query HomePageQuery {
    allWpPage(filter: { databaseId: { eq: 11 } }) {
      edges {
        node {
          homePage {
            pageTitle
            pageSubtitle
            pageBackgroundImage {
              node {
                altText
                gatsbyImage(width: 1920, layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            aboutTitle
            aboutParagraph
            detailsList { iconSvg text }
            neuroTitle
            neuroPara
            areaList {
              areaImage {
                node {
                  id
                  altText
                  gatsbyImage(width: 1000, layout: CONSTRAINED, placeholder: BLURRED)
                }
              }
              areaTitle
              areaPara
              areaLinkRedirect { target title url }
            }
            everyDecisionMattersTitle
            everyDecisionMattersSubtitle
            everyDecisionMattersBottomPara
            conditionTreatedTitle
            conditionTreatedList {
              conditionsSvgIcon
              conditionTitle
              conditionPara
            }
          }
        }
      }
    }
  }
`
