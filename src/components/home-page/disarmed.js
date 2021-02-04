/* SECTION: how can microagressions be disarmed? */
import React from "react"
import "../../styles/homePageStyles/disarmed-styles.css"
import greenCircle from "../../images/greenCircle.svg"
import greenCircle2 from "../../images/greenCircle2.svg"
import greenCircle3 from "../../images/greenCircle3.svg"
import img from "../../images/img.png"

const Disarmed = () => {
  return (
    <div>
      <article className="disarmed">
        <div className="container">
          <h1 className="clr-black">How can microagressions be disarmed</h1>
          <p className="ff-accent clr-orange"> THE PROBLEM: </p>
          <p>
            Calling someone out by pointing to the underlying homophobia, racism
            or sexism in their behaviours, oftentimes results in a very
            defensive reaction that prevents them from actually recognising the
            impact of their actions. This is due to the underlying subconscious
            nature or implicit biases of microaggressions
          </p>
          <p className="ff-accent clr-orange">RATHER TRY TO COMMUNICATE: </p>
        </div>
        <div className="stackedWrapper1">
          <div className="shapeTextWrapper">
            <img src={greenCircle} alt="green circle" className="shapeImage" />
            <p className="shapeText ff-accent">
              {" "}
              We are all prone to mistakes and it's not necessarily that you're
              a “bad” person if you commit a microaggression, but try to be more
              aware of your implicit biases and their effect on your behaviour
            </p>
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
          <div className="shapeTextWrapper firstBlob">
            <img src={greenCircle2} alt="green circle" className="shapeImage" />
            <div className="shapeText">
              <h4 className="ff-accent margin-bottom">Ask for clarification</h4>
              <p>
                “Could you say more about what you mean by that?” “How have you
                come to think that?”
              </p>
            </div>
          </div>
          <div className="shapeTextWrapper secondBlob">
            <img src={greenCircle} alt="green circle" className="shapeImage" />
            <div className="shapeText">
              <h4 className="ff-accent margin-bottom">
                Separate intent from impact
              </h4>
              <p>
                “I know you didn’t realize this, but when you __________
                (comment/behavior), it was hurtful/offensive because___________.
                Instead you could___________ (different language or behavior.)”
              </p>
            </div>
          </div>
          <div className="shapeTextWrapper thirdBlob">
            <img src={greenCircle3} alt="green circle" className="shapeImage" />
            <div className="shapeText">
              <h4 className="ff-accent margin-bottom">
                Share your own process
              </h4>
              <p>
                {" "}
                “I noticed that you ___________ (comment/behavior). I used to
                do/say that too, but then I learned____________.”
              </p>
            </div>
          </div>
          <div className="container">
            <img src={img} className="imgDisarmed" alt="disarmed" />
            <p>
              One principle underlying these statements is helping the aggressor
              understand she or he is not under attack for their comment.
            </p>
            <p className="ff-accent clr-orange">
              “If we want people to hear what we’re saying and potentially
              change their behavior, we have to think about things that will not
              immediately make them defensive,”
            </p>
            <p>Dr. Goodman said.</p>
          </div>
        </div>
        <div className="divide">
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
