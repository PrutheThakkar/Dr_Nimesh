import * as React from "react"
import { Link, graphql } from "gatsby"
import sanitizeHtml from "sanitize-html"
import { CmsText, paragraphs } from "../components/CmsContent"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { wordpressArticles, splitBlogContent } from "../data/blogs"
import "../css/reset.css"
import "../css/common.css"
import "../css/blog-detail.css"

export default function BlogDetailPage({ data, pageContext }) {
  const articles = wordpressArticles(data?.allWpPost?.edges)
  const article = articles.find(post => post.slug === pageContext.slug)
  const related = articles.filter(post => post.slug !== article?.slug).slice(0, 2)
  if (!article) return <><Header /><main><h1>Post unavailable</h1><Link to="/blogs/">Back to blogs</Link></main><Footer /></>

  const { subtitle, body } = splitBlogContent(article.content)

  return <div className="blog-detail">
    <Header />
    <main>
      <article>
        <header className="blog-detail__header">
          <nav className="blog-detail__breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/blogs/">Blogs</Link><span aria-hidden="true">/</span><span aria-current="page">{paragraphs(article.title).join(" ")}</span>
          </nav>
          {article.category && <p className="blog-detail__category">{article.category}</p>}
          <CmsText as="h1" html={article.title} />
          {subtitle && <CmsText className="blog-detail__subtitle" html={subtitle} />}

          {article.image && <img className="blog-detail__hero" src={article.image} alt={article.imageAlt || ""} width="833" height="633" fetchPriority="high" />}
        </header>
        <div className="blog-detail__layout">
          <div className="blog-detail__body">
            <div className="blog-detail__cms" dangerouslySetInnerHTML={{ __html: sanitizeHtml(body, {
              allowedTags: [...sanitizeHtml.defaults.allowedTags, "img", "figure", "figcaption"],
              allowedAttributes: {
                ...sanitizeHtml.defaults.allowedAttributes,
                img: ["src", "alt", "width", "height", "loading", "srcset", "sizes"],
              },
            }) }} />
            <Link className="blog-detail__back" to="/blogs/">← Back to all blogs</Link>
          </div>

        </div>
      </article>
      {related.length > 0 && <section className="blog-detail__related" aria-labelledby="related-title">
        <h2 id="related-title">More from <span>the Blog</span></h2>
        <div className="blog-detail__related-grid">
          {related.map(post => <Link key={post.slug} to={post.href}>
            {post.image && <img src={post.image} alt={post.imageAlt || ""} width="833" height="633" loading="lazy" />}
            <p className="blog-detail__category">{post.category}</p>
            <CmsText as="h3" html={post.title} />
            <span className="blog-detail__read-more">Read article <span aria-hidden="true">↗</span></span>
          </Link>)}
        </div>
      </section>}
    </main>
    <Footer />
  </div>
}

export function Head({ data, pageContext }) {
  const article = wordpressArticles(data?.allWpPost?.edges).find(post => post.slug === pageContext.slug)
  const title = paragraphs(article?.title || "Blog").join(" ")
  const description = paragraphs(article?.content).join(" ").slice(0, 160)
  return <>
    <html lang="en" />
    <title>{title} | Dr. Nimesh Jain</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="article" />
  </>
}

export const query = graphql`
  query BlogDetailPageQuery {
    allWpPost(sort: { date: DESC }) {
      edges {
        node {
          id
          slug
          title
          content
          featuredImage {
            node { mediaItemUrl altText }
          }
        }
      }
    }
  }
`
