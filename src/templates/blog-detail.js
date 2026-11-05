import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { articles } from "../data/blogs"
import "../css/reset.css"
import "../css/common.css"
import "../css/blog-detail.css"

export default function BlogDetailPage({ pageContext }) {
  const article = articles.find(post => post.slug === pageContext.slug)
  const related = articles.filter(post => post.slug !== article.slug).slice(0, 2)

  return <div className="blog-detail">
    <Header />
    <main>
      <article>
        <header className="blog-detail__header">
          <nav className="blog-detail__breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/blogs/">Blogs</Link><span aria-hidden="true">/</span><span aria-current="page">{article.title}</span>
          </nav>
          <p className="blog-detail__category">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="blog-detail__summary">{article.description}</p>
          <img className="blog-detail__hero" src={article.image} alt="" width="833" height="633" fetchPriority="high" />
        </header>
        <div className="blog-detail__layout">
          <div className="blog-detail__body">
            {article.sections.map((section, index) => <section key={section.title} id={`section-${index + 1}`} aria-labelledby={`heading-${index + 1}`}>
              <h2 id={`heading-${index + 1}`}>{section.title}</h2>
              <p>{section.text}</p>
            </section>)}
            <p className="blog-detail__reference">Further reading: <a href={article.source}>NHS patient information</a></p>
            <Link className="blog-detail__back" to="/blogs/">← Back to all blogs</Link>
          </div>
        
        </div>
      </article>
      <section className="blog-detail__related" aria-labelledby="related-title">
        <h2 id="related-title">More from <span>the Blog</span></h2>
        <div className="blog-detail__related-grid">
          {related.map(post => <Link key={post.slug} to={post.href}>
            <img src={post.image} alt="" width="833" height="633" loading="lazy" />
            <p className="blog-detail__category">{post.category}</p>
            <h3>{post.title}</h3>
            <span className="blog-detail__read-more">Read article <span aria-hidden="true">↗</span></span>
          </Link>)}
        </div>
      </section>
    </main>
    <Footer />
  </div>
}

export function Head({ pageContext }) {
  const article = articles.find(post => post.slug === pageContext.slug)
  return <>
    <html lang="en" />
    <title>{article.title} | Dr. Nimesh Jain</title>
    <meta name="description" content={article.description} />
    <meta property="og:title" content={article.title} />
    <meta property="og:description" content={article.description} />
    <meta property="og:type" content="article" />
  </>
}
