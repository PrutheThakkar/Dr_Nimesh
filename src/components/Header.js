import * as React from "react"
import SiteEffects from "./SiteEffects"
import useScrollPan from "./useScrollPan"
import websiteLogo from "../images/website-logo.svg"

function ExpertiseMenu({ expandedOnMobile = false }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="expertise-menu" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false) }}>
      <a className="expertise-menu__trigger" href="/expertise/" aria-expanded={isOpen || expandedOnMobile} aria-controls="expertise-menu-panel" onFocus={() => setIsOpen(true)} onKeyDown={event => { if (event.key === "Escape") setIsOpen(false) }}>
        Expertise <span className="expertise-menu__arrow" aria-hidden="true">⌃</span>
      </a>
      <div className="expertise-menu__panel" id="expertise-menu-panel" hidden={!isOpen && !expandedOnMobile}>
        <div className="expertise-menu__grid">
          <div className="expertise-menu__brain">
            <h3><a href="/expertise/">Complex Brain Disorders</a></h3>
            <div className="expertise-menu__brain-links">
              <div><a href="/expertise/#brain-tumours">Brain Tumour</a><a href="/expertise/#stroke">Stroke</a><a href="/expertise/#brain-haemorrhage">Brain Hemorrhage</a></div>
              <div><a href="/expertise/#raised-intracranial-pressure">Raise Intracranial Pressure</a><a href="/expertise/#head-injury">Head Injury</a><a href="/expertise/#head-injury">Brain Trauma</a></div>
            </div>
          </div>
          <div>
            <h3>Stability &amp; Nerve Function</h3>
            <a href="/expertise/#spine-conditions">Degenerative Spine &amp; Slip Disc</a>
            <a href="/expertise/#spinal-cord-compression">Spinal Cord Compression</a>
          </div>
          <div>
            <h3>Neurosurgical Care</h3>
            <a href="/expertise/#spine-trauma">Spine Trauma</a>
            <a href="/expertise/#neurorehabilitation">Neuro Rehabilitation</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  useScrollPan()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [isCompact, setIsCompact] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)")
    const update = () => {
      setIsCompact(media.matches)
      setMobileOpen(false)
    }
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  return (
      <>
      <SiteEffects />
      <header className="site-header">
        <a className="brand" href="/" aria-label="Dr. Nimesh Jain home">
          <img className="brand__logo" src={websiteLogo} alt="Dr. Nimesh Jain — Neurosurgeon" width="327" height="82" />
        </a>
        <button className="site-header__toggle" type="button" aria-expanded={mobileOpen} aria-controls="main-navigation" onClick={() => setMobileOpen(open => !open)}>
          {mobileOpen ? "Close ✕" : "Menu ☰"}
        </button>
        <nav id="main-navigation" className={`site-nav${mobileOpen ? " is-open" : ""}`} aria-label="Main navigation" onClick={event => {
          if (event.target.closest("a")) setMobileOpen(false)
        }} onKeyDown={event => {
          if (event.key === "Escape") {
            setMobileOpen(false)
            event.currentTarget.previousElementSibling.focus()
          }
        }}>
          <a href="/about/">About</a>
          <ExpertiseMenu expandedOnMobile={isCompact && mobileOpen} />
          <a href="/expertise/">Treatments</a>
          <a href="/faq/">FAQ</a>
          <a href="/blogs/">Blogs</a>
          <a className="button button--primary" href="/contact/">Contact</a>
        </nav>
      </header>
      </>
  )
}
