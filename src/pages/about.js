import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CmsText, paragraphs } from "../components/CmsContent"
import { withFallback } from "../components/homeDefaults"
import ReadingCopy from "../components/ReadingCopy"
import Header from "../components/Header"
import portrait from "../images/meet-dr-nimesh.webp"
import Footer from "../components/Footer"
import "../css/reset.css"
import "../css/common.css"
import "../css/about.css"

const biography = [
  "Dr. Nimesh Jain is a Consultant Neurosurgeon specialising in the evaluation and treatment of conditions affecting the brain, spine, spinal cord and nerves. His areas of clinical expertise include brain tumours, stroke, brain haemorrhage, raised intracranial pressure, head injury, brain trauma, degenerative spine conditions, slipped discs, spinal cord compression and spine trauma.",
  "Neurosurgery often involves complex medical decisions. Dr. Jain's approach begins with understanding the patient's symptoms, neurological examination, medical history and imaging before developing an appropriate treatment plan."
]

const approach = [
  { title: "Understand", icon: "understand", lead: "Every patient is different", text: "Location, severity, existing health conditions and neurological function are considered before treatment is recommended." },
  { title: "CHOOSE", icon: "choose", lead: "The treatment should fit the patient.", text: "Where surgery is indicated, patients are guided through why it is recommended and what the expected goals are. When surgery isn't immediately required, medical management, observation or rehabilitation may be considered." },
  { title: "SUPPORT", icon: "support", lead: "The goal extends beyond surgery.", text: "Treatment decisions are made with the patient's long-term neurological health and recovery in mind." },
]

function ApproachIcon({ type }) {
  const paths = {
    understand: [
      "M3.33366 26.6663H18.0003C18.1771 26.6663 18.3467 26.5961 18.4717 26.4711C18.5968 26.3461 18.667 26.1765 18.667 25.9997V23.9997C18.6671 22.4176 18.1045 20.887 17.0798 19.6816C16.0551 18.4761 14.6351 17.6744 13.0737 17.4197C13.953 16.975 14.6919 16.2955 15.2085 15.4565C15.7251 14.6174 15.9992 13.6517 16.0003 12.6663V10.6663C16.0003 9.25185 15.4384 7.8953 14.4382 6.8951C13.438 5.89491 12.0815 5.33301 10.667 5.33301C9.2525 5.33301 7.89595 5.89491 6.89576 6.8951C5.89556 7.8953 5.33366 9.25185 5.33366 10.6663V12.6663C5.33479 13.6517 5.60886 14.6174 6.12547 15.4565C6.64207 16.2955 7.38102 16.975 8.26033 17.4197C6.69886 17.6744 5.27887 18.4761 4.25419 19.6816C3.22951 20.887 2.66692 22.4176 2.66699 23.9997V25.9997C2.66699 26.1765 2.73723 26.3461 2.86225 26.4711C2.98728 26.5961 3.15685 26.6663 3.33366 26.6663ZM12.667 13.9997C12.667 14.5301 12.4563 15.0388 12.0812 15.4139C11.7061 15.789 11.1974 15.9997 10.667 15.9997C10.1366 15.9997 9.62785 15.789 9.25278 15.4139C8.87771 15.0388 8.66699 14.5301 8.66699 13.9997H12.667Z",
      "M24 5.33301H22.6666C21.6112 5.33218 20.5792 5.64452 19.7014 6.2305C18.8236 6.81648 18.1393 7.64974 17.7353 8.6248C17.3313 9.59985 17.2257 10.6729 17.4318 11.708C17.6379 12.7431 18.1466 13.6938 18.8933 14.4397L17.3333 15.9997H24C25.4145 15.9997 26.771 15.4378 27.7712 14.4376C28.7714 13.4374 29.3333 12.0808 29.3333 10.6663C29.3333 9.25186 28.7714 7.8953 27.7712 6.89511C26.771 5.89491 25.4145 5.33301 24 5.33301ZM26 12.6663H20.6666C20.4898 12.6663 20.3203 12.5961 20.1952 12.4711C20.0702 12.3461 20 12.1765 20 11.9997C20 11.8229 20.0702 11.6533 20.1952 11.5283C20.3203 11.4032 20.4898 11.333 20.6666 11.333H26C26.1768 11.333 26.3463 11.4032 26.4714 11.5283C26.5964 11.6533 26.6666 11.8229 26.6666 11.9997C26.6666 12.1765 26.5964 12.3461 26.4714 12.4711C26.3463 12.5961 26.1768 12.6663 26 12.6663ZM26 9.99968H20.6666C20.4898 9.99968 20.3203 9.92944 20.1952 9.80441C20.0702 9.67939 20 9.50982 20 9.33301C20 9.1562 20.0702 8.98663 20.1952 8.86161C20.3203 8.73658 20.4898 8.66634 20.6666 8.66634H26C26.1768 8.66634 26.3463 8.73658 26.4714 8.86161C26.5964 8.98663 26.6666 9.1562 26.6666 9.33301C26.6666 9.50982 26.5964 9.67939 26.4714 9.80441C26.3463 9.92944 26.1768 9.99968 26 9.99968Z",
    ],
    choose: ["M25.0823 14.3236L11.749 10.2303C11.5162 10.1612 11.269 10.157 11.034 10.2181C10.7991 10.2792 10.5852 10.4033 10.4156 10.577C10.2465 10.7494 10.1275 10.9645 10.0711 11.1993C10.0147 11.4342 10.0232 11.6799 10.0956 11.9103L14.3756 25.0836C14.4595 25.3339 14.6157 25.5537 14.8246 25.7151C15.0335 25.8765 15.2856 25.9723 15.549 25.9903H15.6556C15.9032 25.9883 16.1454 25.9174 16.355 25.7855C16.5646 25.6536 16.7333 25.466 16.8423 25.2436L19.6423 19.5903L25.349 16.7903C25.5869 16.6704 25.7835 16.4819 25.9133 16.2492C26.0431 16.0165 26.1002 15.7502 26.0772 15.4847C26.0543 15.2193 25.9523 14.9668 25.7845 14.7598C25.6166 14.5528 25.3906 14.4009 25.1356 14.3236H25.0823ZM5.72229 3.83029C5.47122 3.57922 5.13069 3.43817 4.77562 3.43817C4.42055 3.43817 4.08003 3.57922 3.82896 3.83029C3.57788 4.08136 3.43683 4.42189 3.43683 4.77696C3.43683 5.13203 3.57788 5.47255 3.82896 5.72363L7.50896 9.39029C7.63354 9.51387 7.7813 9.61163 7.94375 9.67799C8.1062 9.74434 8.28015 9.77797 8.45562 9.77696C8.79149 9.76526 9.11055 9.62716 9.34896 9.39029C9.47393 9.26634 9.57312 9.11887 9.64081 8.9564C9.7085 8.79392 9.74335 8.61964 9.74335 8.44363C9.74335 8.26761 9.7085 8.09334 9.64081 7.93086C9.57312 7.76838 9.47393 7.62091 9.34896 7.49696L5.72229 3.83029ZM6.42896 13.697C6.74854 13.7011 7.05898 13.5902 7.30371 13.3847C7.54844 13.1791 7.71118 12.8925 7.76229 12.577C7.82046 12.2307 7.73966 11.8754 7.53745 11.5883C7.33525 11.3012 7.02795 11.1055 6.68229 11.0436L1.49562 10.2303C1.15177 10.1881 0.805003 10.2815 0.528757 10.4905C0.252511 10.6996 0.0684763 11.0079 0.0156228 11.3503C-0.0381396 11.6985 0.0480754 12.0538 0.255433 12.3386C0.462791 12.6234 0.774437 12.8145 1.12229 12.8703L6.25562 13.6836L6.42896 13.697ZM6.49562 15.537L1.86896 17.8836C1.60323 18.0198 1.39087 18.2411 1.26592 18.5123C1.14096 18.7834 1.11063 19.0887 1.17978 19.3791C1.24894 19.6696 1.41357 19.9284 1.64732 20.1142C1.88107 20.2999 2.17039 20.4019 2.46896 20.4036C2.67826 20.4073 2.88496 20.3568 3.06896 20.257L7.70896 17.9103C7.87015 17.8338 8.01435 17.7258 8.13302 17.5925C8.2517 17.4593 8.34243 17.3036 8.39983 17.1347C8.45724 16.9658 8.48016 16.787 8.46724 16.6091C8.45431 16.4311 8.40581 16.2576 8.32459 16.0987C8.24338 15.9399 8.13111 15.7989 7.99443 15.6843C7.85775 15.5696 7.69945 15.4835 7.5289 15.4311C7.35835 15.3787 7.17902 15.3611 7.00153 15.3793C6.82404 15.3975 6.65201 15.4511 6.49562 15.537ZM16.1623 8.35029C16.3532 8.44432 16.5628 8.49443 16.7756 8.49696C17.0218 8.49621 17.2631 8.4273 17.4725 8.29786C17.682 8.16842 17.8515 7.98351 17.9623 7.76363L20.3223 3.15029C20.4069 2.9925 20.4589 2.81928 20.4751 2.64096C20.4913 2.46265 20.4715 2.28289 20.4167 2.11242C20.362 1.94194 20.2735 1.78424 20.1564 1.64872C20.0394 1.5132 19.8963 1.40263 19.7356 1.32363C19.4224 1.16449 19.0589 1.13545 18.7244 1.24281C18.3898 1.35017 18.1111 1.58526 17.949 1.89696L15.589 6.55029C15.5081 6.70606 15.4588 6.87626 15.4438 7.05114C15.4289 7.22601 15.4486 7.40211 15.5019 7.56934C15.5551 7.73658 15.6409 7.89165 15.7542 8.02566C15.8675 8.15967 16.0062 8.27 16.1623 8.35029ZM12.4023 7.79029H12.6156C12.7892 7.76275 12.9556 7.70117 13.1053 7.60909C13.255 7.51701 13.385 7.39625 13.4878 7.25375C13.5906 7.11125 13.6643 6.94983 13.7046 6.77876C13.7448 6.6077 13.7508 6.43036 13.7223 6.25696L12.909 1.13696C12.8809 0.961863 12.8187 0.794 12.7258 0.642953C12.6329 0.491907 12.5112 0.360635 12.3676 0.256634C12.224 0.152632 12.0613 0.0779372 11.8888 0.0368137C11.7163 -0.0043098 11.5374 -0.0110565 11.3623 0.0169588C11.1872 0.0449742 11.0193 0.107203 10.8683 0.200092C10.7172 0.292981 10.586 0.414711 10.482 0.558333C10.378 0.701954 10.3033 0.864653 10.2621 1.03714C10.221 1.20963 10.2143 1.38853 10.2423 1.56363L11.0823 6.65696C11.1302 6.97261 11.2897 7.2606 11.532 7.46858C11.7742 7.67656 12.083 7.79071 12.4023 7.79029Z"],
    support: ["M19.4023 14.3893C21.353 13.2247 22.6663 11.0987 22.6663 8.66667C22.6663 4.99067 19.6757 2 15.9997 2C12.3237 2 9.33301 4.99067 9.33301 8.66667C9.33301 11.0987 10.6463 13.2247 12.597 14.3893C8.38101 15.3687 5.33301 18.108 5.33301 21.3333V29.3333C5.33301 29.7013 5.63167 30 5.99967 30H25.9997C26.3677 30 26.6663 29.7013 26.6663 29.3333V21.3333C26.6663 18.108 23.6183 15.3687 19.4023 14.3893ZM16.471 27.138C16.341 27.268 16.1703 27.3333 15.9997 27.3333C15.829 27.3333 15.6583 27.268 15.5283 27.138C13.7577 25.3673 11.333 22.9427 11.333 20.6667C11.333 19.196 12.529 18 13.9997 18C14.795 18 15.511 18.35 15.9997 18.9047C16.4883 18.35 17.2043 18 17.9997 18C19.4703 18 20.6663 19.196 20.6663 20.6667C20.6663 22.9427 18.2417 25.3673 16.471 27.138ZM19.333 20.6667C19.333 22.2193 17.4757 24.2307 15.9997 25.722C14.5237 24.2307 12.6663 22.2193 12.6663 20.6667C12.6663 19.9313 13.2643 19.3333 13.9997 19.3333C14.735 19.3333 15.333 19.9313 15.333 20.6667C15.333 21.0347 15.6317 21.3333 15.9997 21.3333C16.3677 21.3333 16.6663 21.0347 16.6663 20.6667C16.6663 19.9313 17.2643 19.3333 17.9997 19.3333C18.735 19.3333 19.333 19.9313 19.333 20.6667Z"],
  }
  return <svg viewBox={type === "choose" ? "0 0 27 26" : "0 0 32 32"} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {(paths[type] || paths.support).map((path, index) => <path key={index} d={path} fill="#FF6215" />)}
  </svg>
}

const qualifications = [
  { educationName: "M.B.B.S.", educationPara: "Bachelor of Medicine, Bachelor of Surgery" },
  { educationName: "M.S. - General Surgery", educationPara: "Master of Surgery in General Surgery" },
  { educationName: "M.Ch. - Neurosurgery", educationPara: "Master of Chirurgiae in Neurosurgery" },
]

function ApproachCards({ steps }) {
  return <div className="about-page__steps">
    {steps.map((step, index) => <article key={index}>
      <div className="about-page__approach-icon"><ApproachIcon type={step.icon} /></div>
      <CmsText as="h3" html={step.title} />
      <CmsText className="about-page__lead" html={step.subTitle} />
      <CmsText className="about-page__step-copy" html={step.para} />
    </article>)}
  </div>
}

export default function AboutPage({ data }) {
  const about = data?.allWpPage?.edges?.[0]?.node?.aboutPage || {}
  const doctorImage = getImage(about.aboutImageDoctor?.node?.gatsbyImage)
  const steps = withFallback(about.aPatientList, approach.map(step => ({ title: step.title, subTitle: step.lead, para: step.text })))
    .filter(Boolean).slice(0, 3).map((step, index) => ({
      title: withFallback(step.title, approach[index]?.title),
      subTitle: withFallback(step.subTitle, approach[index]?.lead),
      para: withFallback(step.para, approach[index]?.text),
      icon: approach[index]?.icon || "support",
    }))
  const education = withFallback(about.educationList, qualifications).filter(Boolean).map((item, index) => ({
    educationName: withFallback(item.educationName, qualifications[index]?.educationName),
    educationPara: !item.educationPara || /^\s*(?:<p>)?\s*[-–—]\s*(?:<\/p>)?\s*$/.test(item.educationPara)
      ? qualifications[index]?.educationPara
      : item.educationPara,
  }))
  return <div className="about-page">
    <Header />
    <main>
      <section className="about-page__intro" aria-labelledby="about-title">
        <CmsText as="h1" id="about-title" html={withFallback(about.aboutPageTitle, "About <span>Dr. Nimesh Jain</span>")} />
        {doctorImage ? <GatsbyImage className="about-page__media" image={doctorImage} alt={about.aboutImageDoctor.node.altText || "Dr. Nimesh Jain, Consultant Neurosurgeon"} loading="eager" /> : <img className="about-page__media" src={portrait} alt="Dr. Nimesh Jain, Consultant Neurosurgeon" />}
        <ReadingCopy className="about-page__bio" paragraphs={paragraphs(withFallback(about.aboutPagePara, biography.join("\n\n")))} />
      </section>
      <section className="about-page__approach" aria-labelledby="approach-title">
        <CmsText as="h2" id="approach-title" html={withFallback(about.aPatientCentredTitle, "A Patient-Centred Approach to <span>Neurosurgery</span>")} />
        <CmsText className="about-page__description" html={withFallback(about.aPatientSubtitle, "Every neurosurgical condition presents differently.")} />
        <ApproachCards steps={steps} />
      </section>
      <section className="about-page__education" aria-labelledby="education-title">
        <CmsText as="h2" id="education-title" html={withFallback(about.educationTitle, "Education <span>&amp;</span> Qualifications")} />
        <CmsText className="about-page__description" html={withFallback(about.educationSubtitle === "Every neurosurgical condition presents differently." ? "" : about.educationSubtitle, "Medical education and specialist training in general surgery and neurosurgery.")} />
        <div className="about-page__qualifications">
          {education.map((item, index) => <article key={index}>
            <CmsText as="h3" html={item.educationName} />
            <CmsText className="about-page__qualification-copy" html={item.educationPara} />
          </article>)}
        </div>
      </section>
      <section className="about-page__consults" aria-labelledby="consults-title">
        <h2 id="consults-title">Where He <span>Consults</span></h2>
        <div className="about-page__consultation">
          <iframe
            className="about-page__map"
            title="Wockhardt Hospitals, Mira Road location"
            src="https://www.google.com/maps?q=Wockhardt+Hospitals+Mira+Road+Mumbai&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="about-page__consultation-details">
            <p>Dr. Nimesh Jain<br />Consultant Neurosurgeon<br />Wockhardt Hospitals, Mira Road, Mumbai</p>
            <a className="button button--primary" href="/contact/">Book a Consultation</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
}

export const Head = () => <title>About Dr. Nimesh Jain | Neurosurgeon</title>


export const query = graphql`
  query AboutPageQuery {
    allWpPage(filter: { databaseId: { eq: 73 } }) {
      edges {
        node {
          aboutPage {
            aboutPageTitle
            aboutImageDoctor {
              node {
                altText
                gatsbyImage(width: 1600, placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
            aboutPagePara
            aPatientCentredTitle
            aPatientSubtitle
            aPatientList { title subTitle para }
            educationTitle
            educationSubtitle
            educationList { educationName educationPara }
          }
        }
      }
    }
  }
`
