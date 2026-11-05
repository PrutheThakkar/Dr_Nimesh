import * as React from "react"
import ReadingCopy from "../components/ReadingCopy"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "gatsby"
import { articles } from "../data/blogs"
import bannerArtwork from "../images/blog-banner-new.webp"
import "../css/reset.css"
import "../css/common.css"
import "../css/blogs.css"

export default function BlogsPage() {
  return <div className="blogs-page">
    <Header />
    <main>
      <section className="blogs-page__intro" aria-labelledby="blogs-title">
        <h1 id="blogs-title">Blogs</h1>
        <img className="blogs-page__banner" src={bannerArtwork} alt="" fetchPriority="high" />
        <ReadingCopy className="blogs-page__reading-copy" paragraphs={["Neurosurgical conditions can affect the brain, spinal cord and nerves, sometimes with a significant impact on movement, sensation, balance, speech and everyday function. Dr. Nimesh Jain provides evaluation and treatment for a range of complex brain, spine and trauma-related conditions. His expertise covers both planned neurosurgical care and conditions that may require timely intervention."]} />
      </section>
      <section className="blogs-page__articles" aria-labelledby="blogs-category-title">
        <h2 id="blogs-category-title">Brain, Spine <span>&amp; Recovery</span></h2>
        <div className="blogs-page__grid">
          {articles.map(article => <article className="blogs-page__card" key={article.slug}>
            <Link to={article.href}>
              <div className="blogs-page__image"><img src={article.image} alt="" loading="lazy" width="833" height="633" /></div>
              <h3>{article.title}</h3>
              <span className="blogs-page__read-more">Read article <span aria-hidden="true">↗</span></span>
            </Link>
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
