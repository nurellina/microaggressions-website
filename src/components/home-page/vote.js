/* Section: Where you offended by that question - we feel you */

import React from "react"
import "../../styles/homePageStyles/vote-styles.css"

const Vote = () => {
  return (
    <div>
      <section>
        <div class="container">
          <div class="split">
            <div class="question-to-you ff-accent">
              Were you offended by any of these questions?
            </div>
            <div class="feel-you">
              <p class="clr-orange ff-accent margin-bottom">
                {" "}
                Oh, we feel you{" "}
              </p>
              <p class="clr-orange">
                By the way 71% of people answered YES.
                <br />
                Which is quite a big amount...
                <br />
                <br />
                <br />
                All these questions can fall into the category of{" "}
                <span class="ff-accent">microaggressions</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vote
