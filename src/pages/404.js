import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../css/reset.css"
import "../css/common.css"

export default function NotFoundPage() {
  return <div className="contact-page"><Header /><main className="contact-page__content">
    <h1>Page Not Found</h1>
    <p>The page you’re looking for may have moved. Explore our care information or return to the homepage.</p>
    <div className="hero__actions" style={{ marginTop: 32 }}><a className="button button--primary" href="/">Go Home</a><a className="button button--outline" href="/expertise/">Explore Our Expertise</a></div>
  </main><Footer /></div>
}
export const Head = () => <><title>Page Not Found | Dr. Nimesh Jain</title><meta name="robots" content="noindex" /></>
