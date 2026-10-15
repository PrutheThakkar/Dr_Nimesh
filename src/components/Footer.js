import * as React from "react"

export default function Footer() {
  return (
    <footer className="recovery-footer" id="recovery">
      <div className="container">
        <section className="recovery-footer__intro" aria-labelledby="recovery-heading">
          <h2 id="recovery-heading">From <span>Diagnosis to</span>  <span>Recovery</span></h2>
          <p>Neurosurgical care extends beyond the procedure itself. Depending on the condition, treatment may involve surgery, medical management, neurological monitoring or rehabilitation. Dr. Nimesh Jain works with relevant specialists and rehabilitation teams when required to support patients through treatment and recovery.</p>
          <a className="recovery-footer__booking" href="/contact/">Book a Consultation</a>
        </section>
        <nav className="recovery-footer__links" aria-label="Footer navigation">
          <div><h3>HOME</h3><a href="/about/">About</a><a href="/expertise/">Expertise</a><a href="/expertise/">Treatment</a></div>
          <div><h3>EXPLORE</h3><a href="/faq/">FAQ</a><a href="/blogs/">Blogs</a></div>
          <div><h3>REACH OUT</h3><p><span aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.53162 2.93677C10.7165 1.66727 13.402 1.68946 15.5664 2.99489C17.7095 4.32691 19.012 6.70418 18.9999 9.26144C18.95 11.8019 17.5533 14.19 15.8075 16.0361C14.7998 17.1064 13.6726 18.0528 12.4488 18.856C12.3228 18.9289 12.1848 18.9777 12.0415 19C11.9036 18.9941 11.7693 18.9534 11.6508 18.8814C9.78243 17.6746 8.14333 16.134 6.81233 14.334C5.69859 12.8314 5.06583 11.016 5 9.13442L5.00499 8.86069C5.09592 6.40464 6.4248 4.16093 8.53162 2.93677ZM12.9073 7.03477C12.0191 6.65723 10.995 6.86235 10.3133 7.55435C9.63159 8.24635 9.42664 9.28872 9.79416 10.1948C10.1617 11.1008 11.0292 11.6918 11.9916 11.6918C12.6221 11.6964 13.2282 11.4438 13.6748 10.9905C14.1214 10.5371 14.3715 9.92064 14.3693 9.27838C14.3726 8.29804 13.7955 7.41231 12.9073 7.03477Z" fill="#FF6215" />
            <path opacity="0.4" d="M12 22C14.7614 22 17 21.5523 17 21C17 20.4477 14.7614 20 12 20C9.23858 20 7 20.4477 7 21C7 21.5523 9.23858 22 12 22Z" fill="#FF6215" />
          </svg>
          </span> Wockhardt Hospitals, Mira Road</p>
            <a href="/contact/"><span aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_243_19682)">
                <path d="M20 4H4C2.895 4 2.01 4.895 2.01 6L2 18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#FF6215" />
              </g>
              <defs>
                <clipPath id="clip0_243_19682">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </span> Consultation details</a>
            <a href="/contact/"><span aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2924 7.13036C10.0581 4.43387 7.24669 3.11079 7.12771 3.05679C7.01648 3.00447 6.89183 2.98775 6.77076 3.00892C3.52514 3.54773 3.03694 5.43785 3.01732 5.5164C2.99061 5.62586 2.99486 5.74059 3.02958 5.84778C6.90078 17.866 14.9462 20.0936 17.5907 20.8264C17.7944 20.8828 17.9624 20.9282 18.09 20.97C18.2356 21.0175 18.3937 21.0083 18.5328 20.9442C18.6137 20.9074 20.5248 20.0065 20.9922 17.0682C21.0129 16.9399 20.9923 16.8084 20.9333 16.6926C20.8916 16.6116 19.8919 14.708 17.1197 14.0354C17.0257 14.0114 16.9272 14.0105 16.8328 14.033C16.7383 14.0554 16.6507 14.1005 16.5776 14.1643C15.703 14.9118 14.4948 15.7083 13.9735 15.7905C10.4788 14.0808 8.52728 10.8001 8.45368 10.1779C8.41075 9.82807 9.21173 8.5995 10.1329 7.60044C10.1908 7.53756 10.2349 7.46325 10.2624 7.38229C10.2898 7.30133 10.3001 7.21551 10.2924 7.13036Z" fill="#FF6215" />
            </svg>
            </span> Plan your visit</a>
          </div>

        </nav>
      </div>
    </footer>
  )
}

