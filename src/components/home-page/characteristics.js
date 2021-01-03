/* SECTION: common characteristics? */

import React from "react"
import "../../styles/homePageStyles/characteristics-styles.css"

const Characteristics = () => {
  return (
    <div>
      <article>
        <div class="container">
          <h1 class="clr-salmon">
            {" "}
            Common characteristics of Microaggressions{" "}
          </h1>
          <p>
            {" "}
            Microaggressions appear in a myriad of ways, they can be examined
            across many different dimensions of diversity, whether it be gender,
            sexuality, race, ethnicity, age, disability, and religion.
            <br />
            But there are common traits or hidden messages that are being
            transported by the sender of the microaggressions:
          </p>
          <p>
            Microaggressions often happen when people are trying to be good
            people.
          </p>
          <p>
            They slip out when people have good intentions, trying to
            complement, be curious, show comfort, be funny.
            <br />
            One of the reasons that microaggressions are expressed even though
            the speaker’s intention might be a good or benign one, is, that we
            all have unconscious (or implicit) biases
          </p>
        </div>
      </article>
    </div>
  )
}

export default Characteristics
