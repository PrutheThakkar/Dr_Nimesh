import * as React from "react"
import { graphql } from "gatsby"
import BlogDetailPage, { Head as BlogHead } from "../../templates/blog-detail"

const pageContext = { slug: "sciatica-pain-relief" }

export default function BlogPage({ data }) {
  return <BlogDetailPage data={data} pageContext={pageContext} />
}

export const Head = ({ data }) => <BlogHead data={data} pageContext={pageContext} />

export const query = graphql`
  query BlogSciaticaPainReliefQuery {
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
