/* SECTION: common characteristics? */

import React from "react"
import "../../styles/homePageStyles/forms-styles.css"

const Forms = () => {
  return (
    <div>
      <article className="forms bg-dark clr-white">
        <div className="container">
          <h1 className="clr-purple">Other forms of Microaggressions</h1>
          <p>
            <span className="ff-accent clr-red"> Microassaults </span> are the
            most overt microaggressions. With microassaults, the person
            committing the microaggression acted intentionally and knew their
            behavior might be hurtful. For example, using a derogatory term to
            refer to a person of color would be a microassault.
          </p>
          <p>
            <span className="ff-accent clr-red"> Microinsults </span>are more
            subtle than microassaults, but nevertheless have harmful effects on
            marginalized group members. For example, Sue et al. write, a
            microinsult could involve a comment implying that a woman or person
            of color received their job due to affirmative action.
          </p>
          <p>
            <span className="ff-accent clr-red"> Microinvalidations </span> are
            comments and behaviors that deny the experiences of marginalized
            group members. One common microaggression involves insisting that
            prejudice is no longer a problem in society: Derald Wing Sue et al.
            write that a microinvalidation could involve telling a person of
            color that they are being “oversensitive” to a racist comment that
            was made.
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

export default Forms
