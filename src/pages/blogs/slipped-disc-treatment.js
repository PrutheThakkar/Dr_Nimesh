import * as React from "react"
import BlogDetailPage, { Head as BlogHead } from "../../templates/blog-detail"

const pageContext = { slug: "slipped-disc-treatment" }

export default function BlogPage() {
  return <BlogDetailPage pageContext={pageContext} />
}

export const Head = () => <BlogHead pageContext={pageContext} />
