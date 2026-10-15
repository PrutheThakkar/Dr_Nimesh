import * as React from "react"

export default function useScrollPan() {
  React.useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const elements = Array.from(document.querySelectorAll(".scroll-pan-image, .expertise-card"))
    const drawingSections = Array.from(document.querySelectorAll(".care-section, .decision-section, .conditions-section, .recovery-footer, .about-page__approach, #brain-conditions"))
    const drawingObserver = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          const section = target.matches(".expertise-page__intro p")
            ? document.getElementById("brain-conditions")
            : target.closest("[data-draw-artwork]")
          section?.classList.add("is-artwork-drawn")
          drawingObserver.unobserve(target)
        }
      })
    }, { threshold: 0.15 })
    drawingSections.forEach(section => {
      section.setAttribute("data-draw-artwork", "")
      // The brain artwork extends above its cards; start when the intro copy appears.
      const trigger = section.id === "brain-conditions"
        ? document.querySelector(".expertise-page__intro p")
        : section.querySelector(".care-questions")
      drawingObserver.observe(trigger || section)
    })
    const visible = new Set()
    let frame = 0
    const update = () => {
      frame = 0
      if (preference.matches) return
      visible.forEach(element => {
        const rect = element.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
        element.style.setProperty("--scroll-pan-y", `${(progress - 0.5) * 8}%`)
      })
    }
    const schedule = () => {
      if (!frame && !preference.matches) frame = window.requestAnimationFrame(update)
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) visible.add(target)
        else visible.delete(target)
      })
      schedule()
    }, { rootMargin: "100px" })
    const reset = () => {
      elements.forEach(element => {
        element.style.removeProperty("--scroll-pan-y")
        element.style.removeProperty("--hero-text-pan")
      })
      schedule()
    }
    elements.forEach(element => observer.observe(element))
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    preference.addEventListener("change", reset)
    return () => {
      observer.disconnect()
      drawingObserver.disconnect()
      drawingSections.forEach(section => {
        section.removeAttribute("data-draw-artwork")
        section.classList.remove("is-artwork-drawn")
      })
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      preference.removeEventListener("change", reset)
      elements.forEach(element => {
        element.style.removeProperty("--scroll-pan-y")
        element.style.removeProperty("--hero-text-pan")
      })
    }
  }, [])
}
