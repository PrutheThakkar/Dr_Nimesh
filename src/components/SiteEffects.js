import * as React from "react"
import "../css/polish.css"

export default function SiteEffects() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); observer.unobserve(entry.target) }
    }), { threshold: 0.08 })
    const targets = document.querySelectorAll("main section > h2, main section > .container, .expertise-page__grid article > h3, .expertise-page__grid article > p, .blogs-page__card, .about-page__qualifications article, .faq-page__item")
    targets.forEach((target, index) => {
      target.classList.add("scroll-reveal")
      const delay = target.matches(".expertise-page__grid article > h3") ? 0
        : target.matches(".expertise-page__grid article > p") ? 120
        : Math.min(index % 3 * 70, 140)
      target.style.setProperty("--reveal-delay", `${delay}ms`)
      observer.observe(target)
    })
    return () => {
      observer.disconnect()
      targets.forEach(target => target.classList.remove("scroll-reveal", "is-revealed"))

    }
  }, [])
  return null
}
