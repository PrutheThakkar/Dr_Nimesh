import * as React from "react"

export default function ReadingCopy({ paragraphs, className = "care-section__copy" }) {
  const wordsByParagraph = React.useMemo(() => paragraphs.map(paragraph => paragraph.split(" ")), [paragraphs])
  const totalWords = wordsByParagraph.reduce((total, words) => total + words.length, 0)
  const copyRef = React.useRef(null)
  const [readCount, setReadCount] = React.useState(totalWords)

  React.useEffect(() => {
    const copy = copyRef.current
    const section = copy.closest("section")
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    const update = () => {
      frame = 0
      const viewport = window.innerHeight
      if (motion.matches) {
        setReadCount(totalWords)
        return
      }
      const bounds = copy.getBoundingClientRect()
      const distance = Math.max(1, bounds.height + viewport * 0.3)
      const progress = Math.max(0, Math.min(1, (viewport * 0.85 - bounds.top) / distance))
      setReadCount(Math.floor(progress * totalWords))
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    const observer = new ResizeObserver(schedule)
    observer.observe(section)
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    motion.addEventListener("change", schedule)
    update()
    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      motion.removeEventListener("change", schedule)
    }
  }, [totalWords])

  let wordIndex = 0
  return (
    <div className={className} ref={copyRef}>
      {wordsByParagraph.map((words, paragraphIndex) => (
        <p key={paragraphIndex}>
          <span className="reading-sr-only">{paragraphs[paragraphIndex]}</span>
          <span aria-hidden="true">
            {words.map((word, index) => {
              const isRead = wordIndex++ < readCount
              return <React.Fragment key={index}>
                <span className={`reading-word${isRead ? " is-read" : ""}`}>
                  <span className="reading-word__space">{word}</span>
                  <span className="reading-word__text">{word}</span>
                </span>{index < words.length - 1 ? " " : ""}
              </React.Fragment>
            })}
          </span>
        </p>
      ))}
    </div>
  )
}

