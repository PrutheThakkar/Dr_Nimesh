import posts from "./blogs.json"
import brain from "../images/Treatment for Brain Tumors new.webp"
import stroke from "../images/Stroke Recovery Treatment new.webp"
import spine from "../images/Spinal Stenosis Treatment new.webp"
import disc from "../images/Slipped Disc Treatment new.webp"
import nerve from "../images/Sciatica Pain Relief new.webp"
import recovery from "../images/Rehabilitation after Spine Surgery new.webp"

const images = [brain, stroke, spine, disc, nerve, recovery]
export const articles = posts.map((post, index) => ({ ...post, image: images[index], href: `/blogs/${post.slug}/` }))

export function splitBlogContent(content = "") {
  // The opening WordPress paragraph is the article's subtitle.
  const firstParagraph = content.match(/^\s*(?:<!--[\s\S]*?-->\s*)*<p\b[^>]*>([\s\S]*?)<\/p>/i)
  if (!firstParagraph || !/<(?:p|h[2-6])\b/i.test(content.slice(firstParagraph[0].length))) {
    return { subtitle: "", body: content }
  }
  return {
    subtitle: firstParagraph[1],
    body: content.slice(firstParagraph[0].length).trim(),
  }
}

// WordPress supplies the copy; matching local artwork remains a fallback.
export function wordpressArticles(edges) {
  return (edges || []).map(({ node }) => {
    const fallback = articles.find(article => article.slug === node.slug)
    return {
      ...fallback,
      id: node.id,
      slug: node.slug,
      title: node.title,
      content: node.content || "",
      image: node.featuredImage?.node?.mediaItemUrl || fallback?.image,
      imageAlt: node.featuredImage?.node?.altText || "",
      href: `/blogs/${node.slug}/`,
    }
  })
}
