/* SECTION: what harm do microaggressions cause? */
import React from "react"
import "../../styles/homePageStyles/harm-styles.css"

const Harm = () => {
  return (
    <div>
      <article className="harm bg-dark">
        <div className="container">
          <h1 className="clr-red"> What harms do Microaggressions cause? </h1>
          <div className="split">
            <div className="column">
              <p className="clr-white">
                “We do find the current climate in which it is hard to talk
                about sensitive issues problematic. We do want to find a way to
                create a culture where people can openly discuss sensitive
                topics, thinking more about the underlying concepts and feelings
                and less about the specific words that people use. However, we
                also agree that the subtle ways that verbal and nonverbal acts
                serve to exclude people have real and serious consequences, both
                in the moment and cumulatively.” (SAE)
              </p>
              <p className="clr-purple ff-accent">
                Most of the time, such microinvalidations and aggressions are
                disguised as humor.
              </p>
              <p className="clr-white">
                Often you might feel irritated and 'othered' by such comments
                and questions. You then question your own judgment and your
                reaction, and wonder if you were indeed over-reacting. But,
                making fun of someone's accent, height or ethnicity is not a
                joke. The intent might not be malicious, and it is mostly born
                out of ignorance, but such comments tend to reinforce the
                differences and the non-conformity of any minority community
                from the majority demographic.
              </p>
            </div>
            <div className="column">
              <p className="clr-purple ff-accent">What is stereotype threat?</p>
              <p className="clr-white">
                Psychologists and educators have shown that "stereotype threat"
                can cause an achievement gap. When a negative stereotype is
                associated with a certain group that a person is naturally
                assigned membership of because of their skin color, gender or
                race, it has been shown to have an impact not only on a person's
                performance but also their well-being. Studies in the psychology
                of stigma have shown how such a "stereotype threat" can create
                feelings of anxiety, and have a serious impact on a person's
                mental health and well-being.
              </p>
              <p className="clr-white">
                The call to downplay microaggressions also underestimates the
                powerful effect of sanctioning them instead. Calling out
                microaggressions can serve as a deterrent. From the perspective
                of social-justice advocates, accountability incentivizes more
                thoughtful communication across lines of gender, race,
                sexuality, and gender identity. It codifies the empathy that can
                help lead to a more inclusive atmosphere.
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
              fillOpacity="1"
              d="M0,192L480,224L960,128L1440,192L1440,320L960,320L480,320L0,320Z"
            ></path>
          </svg>
        </div>
      </article>
    </div>
  )
}

export default Harm
