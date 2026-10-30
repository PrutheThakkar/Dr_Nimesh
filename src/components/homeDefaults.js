import * as React from "react"

const careParagraphs = [
  "Conditions involving the brain and spine can affect some of the most important aspects of everyday life, including movement, sensation, balance, speech and independence.",
  "Dr. Nimesh Jain takes a structured approach to neurosurgical care, combining clinical assessment with appropriate imaging and investigations to understand the underlying condition.",
  "When surgery is required, the treatment plan is based on the condition, its severity and the structures involved. Where appropriate, non-surgical management and rehabilitation may also form part of the treatment journey.",
]
const aboutParagraphs = [
  "Dr. Nimesh Jain is a Consultant Neurosurgeon with expertise in brain, spine and trauma-related neurosurgical conditions.",
  "His clinical practice includes the management of complex brain conditions, spinal disorders, traumatic brain injuries and conditions affecting the spinal cord and nerves.",
  "His approach combines careful clinical assessment, appropriate investigations and individualised treatment planning.",
]


const expertise = [
  {
    slug: "brain", title: "Brain Disorders",
    description: "Surgical management of brain tumours, intracranial bleeding, hydrocephalus, raised intracranial pressure and selected stroke related neurosurgical conditions.",
    topics: ["Brain tumours", "Intracranial bleeding", "Hydrocephalus", "Raised intracranial pressure", "Selected stroke related conditions"],
  },
  {
    slug: "spine", title: "Spine Disorders",
    description: "Assessment and management of spinal disorders, including disc problems and conditions affecting the spinal cord and nerves.",
    topics: ["Spinal disorders", "Disc problems", "Spinal cord conditions", "Nerve compression"],
  },
  {
    slug: "trauma", title: "Trauma & Emergency Care",
    description: "Neurosurgical care for traumatic brain injuries, spinal injuries and acute conditions involving the brain and spine.",
    topics: ["Traumatic brain injuries", "Spinal injuries", "Acute brain and spine conditions"],
  },
]

const treatedConditions = [
  { title: "Brain Tumours", description: "Assessment and surgical management of selected brain tumors.", icon: "brain" },
  { title: "Stroke & Brain Haemorrhage", description: "Neurosurgical evaluation and management of selected cases involving bleeding, swelling or pressure on the brain.", icon: "stroke" },
  { title: "Raised Intracranial Pressure", description: "Assessment and treatment of conditions causing increased pressure inside the skull.", icon: "pressure" },
  { title: "Head Injury & Brain Trauma", description: "Evaluation and management of traumatic injuries affecting the brain.", icon: "trauma" },
  { title: "Degenerative Spine Conditions", description: "Treatment of conditions affecting the discs, vertebrae, spinal cord and nerves.", icon: "spine" },
  { title: "Slip Disc", description: "Evaluation and treatment of herniated or slipped discs causing nerve compression and neurological symptoms.", icon: "disc" },
  { title: "Spinal Cord Compression", description: "Assessment and treatment of conditions placing pressure on the spinal cord or nerves.", icon: "stenosis" },
  { title: "Spine Trauma", description: "Neurosurgical care for traumatic injuries affecting the spine and spinal cord.", icon: "fracture" },
]

function ConditionIcon({ type }) {
  const nodes = [[20, 35], [31, 20], [48, 14], [64, 19], [80, 31], [88, 47], [75, 62], [60, 70], [42, 65], [26, 53], [43, 38], [61, 40], [62, 56]]
  return (
    <svg className="condition-card__icon" viewBox="0 0 110 100" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      {type === "spine" ? <>
        <path d="M60 8C35 30 75 53 46 88M69 12C45 34 85 57 55 92" />
        {Array.from({ length: 8 }, (_, i) => <path key={i} d={`M${48 + Math.sin(i) * 9} ${15 + i * 10}l18 4-2 7-18-4z`} />)}
      </> : <>
        <path d="M23 57C6 53 10 29 27 27 20 10 40 5 48 13 58 4 72 13 74 22 96 21 105 44 88 54 96 69 76 80 66 71 57 81 40 72 36 63 28 68 20 63 23 57ZM66 71l8 17-10-2-7-12" />
        {nodes.map(([x, y], i) => <g key={i}>
          <path d={`M${x} ${y}L${nodes[(i + 1) % nodes.length].join(" ")}M${x} ${y}L${nodes[(i + 4) % nodes.length].join(" ")}`} />
          <circle cx={x} cy={y} r="1.6" fill="currentColor" />
        </g>)}
        {type === "pressure" && <path d="M34 1q-5 5 0 10M50 0q-5 5 0 10M67 2q-5 5 0 10" />}
        {type === "trauma" && <path d="M75 8l-9 8 12 2-7 9M87 10l-5 7M94 21l-9 3" />}
        {type === "stroke" && <path d="M80 9l-3 10M93 14l-7 9M101 30l-9 2M94 42l9 5" />}
        {type === "fluid" && <path d="M54 24c-2 5-7 9-7 13a7 7 0 0 0 14 0c0-4-5-8-7-13Z" />}
      </>}
    </svg>
  )
}


// Empty CMS values fall back individually, so populated WordPress fields win.
export function withFallback(value, fallback) {
  if (value == null) return fallback
  if (typeof value === "string") return value.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim() ? value : fallback
  if (Array.isArray(value)) return value.length ? value : fallback
  return value
}

export const homeDefaults = {
  pageTitle: '<span class="hero__title-line">Advanced <span>Brain &amp; Spine Surgery</span></span><span class="hero__title-line">With Ethical &amp; Precise Care</span>',
  pageSubtitle: 'Dr. Nimesh Jain specializes in the diagnosis and surgical management of brain tumours, spine disorders, trauma and stroke, with a focus on safety, clarity and long-term recovery.',
  aboutTitle: 'Meet <span>Dr. Nimesh Jain</span>',
  aboutParagraph: aboutParagraphs.join("\n\n"),
  neuroTitle: '<span>Neurosurgical Care</span><br />That Begins With Understanding',
  neuroPara: careParagraphs.join("\n\n"),
  everyDecisionMattersTitle: 'When Neurological Function Is at Risk,<br /><span>Every Decision Matters</span>',
  everyDecisionMattersSubtitle: 'A neurosurgical diagnosis can bring many questions like',
  everyDecisionMattersBottomPara: 'Dr. Nimesh Jain believes patients should understand their condition and treatment options clearly before making decisions about their care.<br />The approach is centred on accurate diagnosis, appropriate treatment and continued attention to neurological recovery.',
  conditionTreatedTitle: 'Conditions <span>Treated</span>',
  areaList: expertise.map(item => ({ areaTitle: item.title, areaPara: item.description, areaLinkRedirect: { title: "Explore", url: `/expertise/#${item.slug}` } })),
  conditionTreatedList: treatedConditions.map(item => ({ conditionTitle: item.title, conditionPara: item.description, icon: item.icon })),
  detailsList: [{"iconSvg": "<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" >\n                <path d=\"M12 5H7v24h18V5h-5M12 3h8v5h-8zM11 14l2 2 3-4M18 14h3M11 23l2 2 3-4M18 23h3\" />\n              </svg>", "text": "Detailed evaluation of brain &amp; spine disorders"}, {"iconSvg": "<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" >\n                <circle cx=\"8\" cy=\"17\" r=\"3\" /><path d=\"M3 29v-4a5 5 0 0 1 10 0v4M15 5h14v12H19l-4 4V5zM19 9h6M19 13h4\" />\n              </svg>", "text": "Transparent explanation of diagnosis &amp; treatment"}, {"iconSvg": "<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" >\n                <circle cx=\"16\" cy=\"6\" r=\"3\" /><path d=\"M10 18v-2a6 6 0 0 1 12 0v2M3 21h5v9H3zM8 23l5-3h5a2 2 0 0 1 0 4h-4M8 28h12l9-6a2 2 0 0 0-3-3l-7 5\" />\n              </svg>", "text": "Care focused on safety, recovery and quality of life"}],
}

export { ConditionIcon }

function conditionKey(title) {
  return (title || "").replace(/<[^>]*>/g, "").toLowerCase().replace(/&amp;/g, "&").replace(/[^a-z0-9]/g, "")
}

export function mergeHome(cms = {}) {
  const home = Object.fromEntries(Object.entries(homeDefaults).map(([key, fallback]) => [key, withFallback(cms[key], fallback)]))
  for (const key of ["areaList", "detailsList", "conditionTreatedList"]) {
    home[key] = home[key].filter(Boolean).map((item, index) => {
      const defaults = key === "conditionTreatedList"
        ? homeDefaults[key].find(entry => conditionKey(entry.conditionTitle) === conditionKey(item.conditionTitle)) || (!withFallback(item.conditionTitle, "") ? homeDefaults[key][index] : {}) || {}
        : homeDefaults[key][index] || {}
      const merged = { ...defaults, ...item }
      for (const field of Object.keys(defaults)) {
        merged[field] = /Svg|iconSvg/.test(field) ? (item[field]?.trim() || defaults[field]) : withFallback(item[field], defaults[field])
      }
      if (key === "areaList") merged.areaLinkRedirect = {
        ...defaults.areaLinkRedirect,
        ...item.areaLinkRedirect,
        url: withFallback(item.areaLinkRedirect?.url, defaults.areaLinkRedirect?.url),
        title: withFallback(item.areaLinkRedirect?.title, defaults.areaLinkRedirect?.title),
      }
      return merged
    })
  }
  const cmsConditions = home.conditionTreatedList
  // Keep the reference cards in order, fill missing cards, and retain extra CMS conditions.
  home.conditionTreatedList = homeDefaults.conditionTreatedList.map(defaults =>
    cmsConditions.find(item => conditionKey(item.conditionTitle) === conditionKey(defaults.conditionTitle)) || defaults
  )
  home.conditionTreatedList.push(...cmsConditions.filter(item =>
    !homeDefaults.conditionTreatedList.some(defaults => conditionKey(defaults.conditionTitle) === conditionKey(item.conditionTitle))
  ))
  return { ...cms, ...home }
}
