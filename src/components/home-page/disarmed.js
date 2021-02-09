/* SECTION: how can microagressions be disarmed? */
import React from "react"
import "../../styles/homePageStyles/disarmed-styles.css"
import disarm1 from "../../images/disarm1.png"
import disarm2 from "../../images/disarm2.png"
import disarm3 from "../../images/disarm3.png"
import disarm4 from "../../images/disarm4.png"
import img from "../../images/disarmed/illus1_disarmed.png"

const Disarmed = () => {
  return (
    <div>
      <article className="disarmed">
        <div className="container">
          <h1 className="clr-red">How can microagressions be disarmed</h1>
          <p className="ff-accent clr-purple"> THE PROBLEM: </p>
          <p>
            Calling someone out by pointing to the underlying homophobia, racism
            or sexism in their behaviours, oftentimes results in a very
            defensive reaction that prevents them from actually recognising the
            impact of their actions. This is due to the underlying subconscious
            nature or implicit biases of microaggressions
          </p>
          <p className="ff-accent clr-purple">RATHER TRY TO COMMUNICATE: </p>
        </div>
        <div className="stackedWrapper1">
          <div className="shapeTextWrapper">
            <img src={disarm1} alt="green circle" className="shapeImage" />
          </div>
          <div className="container">
            <img src={img} className="imgDisarmed" alt="disarmed" />
            <p>
              It’s difficult to address Microaggressions, because they occur so
              quickly they are oftentimes over before one can formulate a
              response or intervene. Dr. Goodman proposes three tactics which
              can be memorised for tackling Microaggressions:
            </p>
          </div>
        </div>
        <div className="stackedWrapper2">
          <div className="split">
            <div className="shapeTextWrapper firstBlob">
              <img src={disarm2} alt="green circle" className="shapeImage" />
            </div>
            <div className="shapeTextWrapper secondBlob">
              <img src={disarm3} alt="green circle" className="shapeImage" />
            </div>
          </div>
          <div className="shapeTextWrapper thirdBlob">
            <img src={disarm4} alt="green circle" className="shapeImage" />
          </div>
          <div className="container">
            <p>
              One principle underlying these statements is helping the aggressor
              understand she or he is not under attack for their comment.
            </p>
            <p className="ff-accent clr-purple">
              “If we want people to hear what we’re saying and potentially
              change their behavior, we have to think about things that will not
              immediately make them defensive,”
            </p>
            <p>Dr. Goodman said.</p>
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
              d="M-6.8,55.1L581,141.7L1036.7,4.1l886.2,213.7L2028.1,984L-2,989L-6.8,55.1z"
            ></path>
          </svg>
        </div>
      </article>
    </div>
  )
}

export default Disarmed
