/* SECTION: what are microagression? */

import React from "react"
import "../../styles/homePageStyles/definition-styles.css"

const Definition = () => {
  return (
    <div>
      <article>
        <div class="definition grid">
          <div class="def1">
            <h1 class="salmon-heading definition">
              {" "}
              But, what are microagressions?{" "}
            </h1>
            <p class="ff-accent-light">
              {" "}
              A microaggression is a <span class="ff-accent">comment</span> or
              gesture (whether made intentionally or not) <br />
              that <span class="ff-accent">feeds into stereotypes</span> or
              negative assumptions created around oppressed
              <br /> or <span class="ff-accent">marginalized groups</span> of
              people.
            </p>
          </div>
          <div class="def2">
            <p>
              It can also be defined as the everyday, subtle, intentional — and
              oftentimes unintentional — interactions or behaviors that
              communicate some sort of bias toward historically marginalized
              groups.
            </p>
          </div>
          <div class="def3">
            <p>
              {" "}
              The term was coined by Harvard psychiatrist{" "}
              <span class="ff-accent clr-salmon"> Chester M. Pierce</span> in
              the early 1970s.
            </p>
          </div>
          <div class="def4">
            <p>
              Originally applied to describe insults against Black Americans and
              women. Later became largely accepted as a way for people to talk
              about a wide range of issues related to discrimination, offense,
              and exclusion against any marginalized group.
            </p>
          </div>
          <div class="def5">
            <p class="ff-accent-light clr-salmon">
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
