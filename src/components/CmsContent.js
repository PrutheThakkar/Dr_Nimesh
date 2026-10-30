import * as React from "react"
import sanitizeHtml from "sanitize-html"
import { decode } from "he"

export function paragraphs(value) {
  return (value || "").split(/<\/p>|<br\s*\/?>|\n\s*\n/i)
    .map(part => decode(sanitizeHtml(part, { allowedTags: [], allowedAttributes: {} })).trim())
    .filter(Boolean)
}

export function CmsText({ as: Tag = "div", html, ...props }) {
  const content = (html || "").replace(/className=/g, "class=")
  const inline = /^h[1-6]$/.test(Tag) || Tag === "span"
  return <Tag {...props} dangerouslySetInnerHTML={{ __html: sanitizeHtml(content, {
    allowedTags: inline ? ["br", "strong", "em", "b", "i", "span", "a"] : ["p", "br", "strong", "em", "b", "i", "span", "ul", "ol", "li", "a"],
    allowedAttributes: { a: ["href", "title"], span: ["class"] },
    allowedClasses: { span: ["hero__title-line"] },
  }) }} />
}

