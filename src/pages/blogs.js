import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import brainImage from "../images/Treatment for Brain Tumors new.webp"
import strokeImage from "../images/Stroke Recovery Treatment new.webp"
import spineImage from "../images/Spinal Stenosis Treatment new.webp"
import discImage from "../images/Slipped Disc Treatment new.webp"
import nerveImage from "../images/Sciatica Pain Relief new.webp"
import recoveryImage from "../images/Rehabilitation after Spine Surgery new.webp"
import bannerArtwork from "../images/blog-banner-new.webp"
import "../css/reset.css"
import "../css/common.css"
import "../css/blogs.css"

const articleImages = [brainImage, strokeImage, spineImage, discImage, nerveImage, recoveryImage]

const articles = [
  "Treatment for Brain Tumors",
  "Stroke Recovery Treatment",
  "Spinal Stenosis Treatment",
  "Slipped Disc Treatment",
  "Sciatica Pain Relief",
  "Rehabilitation after Spine Surgery",
]

export default function BlogsPage() {
  return <div className="blogs-page">
    <Header />
    <main>
      <section className="blogs-page__intro" aria-labelledby="blogs-title">
        <h1 id="blogs-title">Blogs</h1>
        <img className="blogs-page__banner" src={bannerArtwork} alt="" fetchPriority="high" />
        <p>Neurosurgical conditions can affect the brain, spinal cord and nerves, sometimes with a significant impact on movement, sensation, balance, speech and everyday function. <span>Dr. Nimesh Jain provides evaluation and treatment for a range of complex brain, spine and trauma-related conditions. His expertise covers both planned neurosurgical care and conditions that may require timely intervention.</span></p>
      </section>
      <section className="blogs-page__articles" aria-labelledby="blogs-category-title">
        <h2 id="blogs-category-title">Brain <span>Conditions</span></h2>
        <div className="blogs-page__grid">
          {articles.map((title, index) => <article className="blogs-page__card" key={title}>
            <img src={articleImages[index]} alt="" loading="lazy" width="833" height="633" />
            <h3>{title}</h3>
          </article>)}
        </div>
      </section>
    </main>
    <Footer />
  </div>
}

export const Head = () => <>
  <html lang="en" />
  <title>Blogs | Dr. Nimesh Jain</title>
  <meta name="description" content="Explore brain, spine and neurological care topics from Dr. Nimesh Jain." />
</>
