/* SECTION: what are microagression? */

import React from "react"
import "../../styles/homePageStyles/definition-styles.css"

const Definition = () => {
  return (
    <div>
      <article>
        <div className="definition grid">
          <div className="def1">
            <div className="textInsideShape">
              <h1 className="clr-salmon"> But, what are microagressions? </h1>
              <p className="ff-accent-light">
                {" "}
                A microaggression is a{" "}
                <span className="ff-accent">comment</span> or gesture (whether
                made intentionally or not) that{" "}
                <span className="ff-accent">feeds into stereotypes</span> or
                negative assumptions created around oppressed or{" "}
                <span className="ff-accent">marginalized groups</span> of
                people.
              </p>
            </div>
          </div>
          <div className="def2">
            <p>
              It can also be defined as the everyday, subtle, intentional — and
              oftentimes unintentional — interactions or behaviors that
              communicate some sort of bias toward historically marginalized
              groups.
            </p>
          </div>
          <div className="def3">
            <p>
              {" "}
              The term was coined by Harvard psychiatrist{" "}
              <span className="ff-accent clr-salmon">
                {" "}
                Chester M. Pierce
              </span>{" "}
              in the early 1970s.
            </p>
          </div>
          <div className="def4">
            <p>
              Originally applied to describe insults against Black Americans and
              women. Later became largely accepted as a way for people to talk
              about a wide range of issues related to discrimination, offense,
              and exclusion against any marginalized group.
            </p>
          </div>
          <div className="def5">
            <p className="ff-accent-light clr-salmon">
              Microaggressions are always connected to systemic and
              institutionalised discrimination.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Definition
