/* Section: Where you offended by that question - we feel you */

import React from "react"
import "../../styles/homePageStyles/vote-styles.css"

const Vote = () => {
  return (
    <div>
      <section>
        <div className="vote">
          <div className="split">
            <div className="question-to-you ff-accent">
              <p className="ff-accent">
                {" "}
                Were you ever offended by any of these questions?{" "}
              </p>
            </div>
            <div className="feel-you">
              <p className="clr-orange ff-accent margin-bottom">
                {" "}
                Oh, we feel you{" "}
              </p>
              <p className="clr-orange">
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
      </section>
    </div>
  )
}

export default Vote
