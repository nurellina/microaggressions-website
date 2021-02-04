import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/interviews-styles.css"
import interviewee_1 from "../images/interviewee_1.jpeg"

const InterviewPage = () => (
  <Layout>
    <SEO title="Interviews" />
    <body>
      <section>
        <div className="container">
          {/* Title
          <h1 className="interviewTitle-outline"> Interviews</h1>
          <h1 className="interviewTitle-outline"> Interviews</h1>
          <h1 className="interviewTitle"> Interviews</h1> */}

          <h1 className="clr-orange">Interviews</h1>
          <p>
            Here you can find several
            <span className="ff-accent"> Interviews </span>to give you a better
            idea of what it feels like to experience these microaggression first
            hand.
          </p>
          <p>
            The interviewees are individuals affected by various forms of
            discrimination such as racism, sexism and homophobia.
          </p>
        </div>
        <div className="divider">
          <svg
            className="divider-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="shape-fill"
              fill-opacity="1"
              d="M0,288L720,160L1440,192L1440,320L720,320L0,320Z"
            ></path>
          </svg>
        </div>
        <article className="interviews bg-dark">
          <div className="container bg-dark">
            <p className="ff-accent clr-white">
              What experiences come to your mind for microaggressions?
            </p>
            <img
              src={interviewee_1}
              className="imgInterviews"
              alt="interviewee_1"
            />
            <audio
              controls
              src="https://drive.google.com/file/d/1jLDaB9N3CKVQx4AlNYERpOIYDmiOTHhY/preview"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
        </article>
      </section>
    </body>
  </Layout>
)
export default InterviewPage
