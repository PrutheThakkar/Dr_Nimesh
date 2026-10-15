import * as React from "react"

export default function ScrollPanImage({ className = "", ...props }) {
  return <div className={`scroll-pan-image ${className}`}>
    <img {...props} />
  </div>
}
