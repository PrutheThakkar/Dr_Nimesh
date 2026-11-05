import posts from "./blogs.json"
import brain from "../images/Treatment for Brain Tumors new.webp"
import stroke from "../images/Stroke Recovery Treatment new.webp"
import spine from "../images/Spinal Stenosis Treatment new.webp"
import disc from "../images/Slipped Disc Treatment new.webp"
import nerve from "../images/Sciatica Pain Relief new.webp"
import recovery from "../images/Rehabilitation after Spine Surgery new.webp"

const images = [brain, stroke, spine, disc, nerve, recovery]
export const articles = posts.map((post, index) => ({ ...post, image: images[index], href: `/blogs/${post.slug}/` }))
