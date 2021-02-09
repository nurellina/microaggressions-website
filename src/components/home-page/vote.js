/* Section: Where you offended by that question - we feel you */

import React from "react"
import "../../styles/homePageStyles/vote-styles.css"
import question from "../../images/shard_wereyoueveroffended.png"
import yes from "../../images/yes_red.png"
import no from "../../images/no_red.png"

const Vote = () => {
  return (
    <div>
      <section>
        <div className="vote">
          <div className="split">
            <div className="question-to-you">
              <div className="shapeTextWrapper">
                <img src={question} alt="question shard" className="shapeImage"/>
                <div className="vote-input1">
                  <img src={yes} alt="yes shard" className="shapeImage1"/>
                </div>
                <div className="vote-input2">
                  <img src={no} alt="no shard" className="shapeImage1 no"/>
                </div>
              </div>
            </div>
            <div className="feel-you">
              <p className="clr-red ff-accent margin-bottom">
                {" "}
                Oh, we feel you{" "}
              </p>
              <p className="clr-red">
                By the way 71% of people answered YES.
                <br />
                Which is quite a big amount...
                <br />
                <br />
                <br />
                All these questions can fall into the category of{" "}
                <span className="ff-accent">microaggressions</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="divider">
          <svg
            className="divider-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path d="M-5.7,206.4L866.6,61.2l348,260.9l-1218.8,9L-5.7,206.4z" />
          </svg>
        </div>
      </section>
    </div>
  )
}

export default Vote
