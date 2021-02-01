/* SECTION: common characteristics? */

import React from "react"
import "../../styles/homePageStyles/characteristics-styles.css"

const Characteristics = () => {
  return (
    <div>
      <article className="characteristics bg-green">
        <div className="container">
          <h1 className="clr-white">
            {" "}
            Common characteristics of Microaggressions{" "}
          </h1>
          <p>
            Microaggressions appear in a myriad of ways, they can be examined
            across many different dimensions of diversity, whether it be gender,
            sexuality, race, ethnicity, age, disability, and religion.
          </p>
          <p>
            But there are common traits and hidden messages that are being
            communicated by the sender of the microaggressions. Authors M.
            Barren and T. Jana have listed the following:
          </p>
          <p>
            In many cases, Microaggressions are committed by people who are
            trying to be good people.
          </p>{" "}
          <p>
            Their intentions don’t have to be bad. Their intention is usually
            not to communicate: “You are a threat”, but rather they want to:
          </p>
          <p>complement:</p>
          <p>show comfort:</p>
          <p>be funny:</p>
          <p>be curous:</p>
          <p>
            One of the reasons that microaggressions are expressed even though
            the speaker’s intention might be a good or benign one, is, that we
            all have unconscious (or implicit) biases (more in regards to that
            in the glossary)
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
              d="M0,192L480,224L960,128L1440,192L1440,320L960,320L480,320L0,320Z"
            ></path>
          </svg>
        </div>
      </article>
    </div>
  )
}

export default Characteristics
