/* SECTION: what harm do microagressions cause? */
import React from "react"
import "../../styles/homePageStyles/harm-styles.css"

const Harm = () => {
  return (
    <div>
      <article className="harm bg-dark">
        <div className="container">
          <h1> What harms do Microaggressions cause? </h1>
          <div className="split">
            <div className="column">
              <p className="clr-white">
                {" "}
                “We do find the current climate in which it is hard to talk
                about sensitive issues problematic. We do want to find a way to
                create a culture where people can openly discuss sensitive
                topics, thinking more about the underlying concepts and feelings
                and less about the specific words that people use. However, we
                also agree that the subtle ways that verbal and nonverbal acts
                serve to exclude people have real and serious consequences, both
                in the moment and cumulatively.”
              </p>
            </div>
            <div className="column">
              <p className="clr-white">
                {" "}
                Most of the time, such microinvalidations and aggressions are
                disguised as humor. Often you might feel irritated and 'othered'
                by such comments and questions. You then question your own
                judgment and your reaction, and wonder if you were indeed
                over-reacting. But, making fun of someone's accent, height or
                ethnicity is not a joke. The intent might not be malicious, and
                it is mostly borne out of ignorance, but such comments tend to
                reinforce the differences and the non-conformity of any minority
                community from the majority demographic.
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
            <path
              className="shape-fill"
              fill-opacity="1"
              d="M0,224L288,224L576,288L864,192L1152,128L1440,288L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
            ></path>
          </svg>
        </div>
      </article>
    </div>
  )
}

export default Harm
