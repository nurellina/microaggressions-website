import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactAudioPlayer from "react-audio-player"
import "../styles/interviews-styles.css"

import lina from "../images/interviews-imgs/02-4_character-portrait-round.png"
import julian from "../images/interviews-imgs/02-2_character-portrait-round.png"
import fannie from "../images/interviews-imgs/02-3_character-portrait-round.png"
import interviewcover from "../images/interviews-imgs/01_character-interviews-test.png"

const InterviewPage = () => (
  <Layout>
    <SEO title="Interviews" />
    <section>
      <div className="container interview-intro">
        <div className="interview-intro-left">
          <h1 className="clr-orange">Interviews</h1>
          <p>
            Here you can find several Interviews to give you a better idea of
            <span className="ff-accent"> what it feels like </span>to experience
            microaggression first hand.
          </p>
          <p>
            The interviewees are individuals affected by various forms of
            discrimination such as racism, sexism and homophobia. Each character
            next to the audio file represents one interviewee.
          </p>
        </div>
        <div className="interview-intro-right">
          {/* <img
            src={interviewcover}
            className="imgInterviews"
            alt="interviewcover"
          /> */}
        </div>
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
            fillOpacity="1"
            d="M0,288L720,160L1440,192L1440,320L720,320L0,320Z"
          ></path>
        </svg>
      </div>

      <article className="interviews bg-dark">
        <div className="container bg-dark questions">
          <div className="question-block">
            <p className="ff-accent clr-white">
              What experiences come to your mind for microaggressions?
            </p>
            <div className="img-audio-row">
              {/* Lina */}
              <div className="img-item">
                <img src={lina} className="imgInterviews" alt="lina_img" />
              </div>
              <div className="audio-item">
                <ReactAudioPlayer
                  src="http://docs.google.com/uc?export=open&id=1-1IK_g6szFexO5wgLzB2cwFYngZQeOdq"
                  controls
                />
              </div>
            </div>
            <div className="img-audio-row">
              {/* Julian */}
              <div className="img-item">
                <img src={fannie} className="imgInterviews" alt="julian_img" />
              </div>
              <div className="audio-item">
                <ReactAudioPlayer
                  src="http://docs.google.com/uc?export=open&id=1jLDaB9N3CKVQx4AlNYERpOIYDmiOTHhY"
                  controls
                />
              </div>
            </div>
          </div>
          <div className="question-block">
            <p className="ff-accent clr-white">
              Do you have specific examples of experiencing microaggressions?
            </p>
            <div className="img-audio-row">
              {/* Lina */}
              <div className="img-item">
                <img src={lina} className="imgInterviews" alt="lina_img" />
              </div>
              <div className="audio-item">
                <ReactAudioPlayer
                  src="http://docs.google.com/uc?export=open&id=1KTglCSxnVzHidfFM7iqRkZb6BjI6mkvS"
                  controls
                />
              </div>
            </div>
            <div className="img-audio-row">
              {/* Julian */}
              <div className="img-item">
                <img src={julian} className="imgInterviews" alt="julian_img" />
              </div>
              <div className="audio-item">
                <ReactAudioPlayer
                  src="http://docs.google.com/uc?export=open&id=1Z7m-MtbS47GdmtgqKgbRwWNXLMGveTGh"
                  controls
                />
              </div>
            </div>
          </div>
          <div className="question-block">
            <p className="ff-accent clr-white">
              How do you deal with these situations?
            </p>
            <div className="img-audio-row">
              {/* Julian */}
              <div className="img-item">
                <img src={julian} className="imgInterviews" alt="julian_img" />
              </div>
              <div className="audio-item">
                <ReactAudioPlayer
                  src="http://docs.google.com/uc?export=open&id=1YgEWw-j-9DnEDGu7CCLeICqevabb93e-"
                  controls
                />
              </div>
            </div>
          </div>
          <div className="question-block">
            <p className="ff-accent clr-white">
              How can non marginalised people be allies and help?
            </p>
            <div className="img-audio-row">
              {/* Lina */}
              <div className="img-item">
                <img src={lina} className="imgInterviews" alt="lina_img" />
              </div>
              <div className="audio-item">
                <ReactAudioPlayer
                  src="http://docs.google.com/uc?export=open&id=1hMMQUxGBkgOlr2MwiGypVcBP2OE12Un_"
                  controls
                />
              </div>
            </div>
            <div className="img-audio-row">
              {/* Julian */}
              <div className="img-item">
                <img src={julian} className="imgInterviews" alt="julian_img" />
              </div>
              <div className="audio-item">
                <ReactAudioPlayer
                  src="http://docs.google.com/uc?export=open&id=13X9isVfUjOfi9C77lSQp_D8rG1EGtJNa"
                  controls
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </Layout>
)
export default InterviewPage
