import React from "react"
import CreatePhrase from "../create-phrase"
import redBgShape from "../../images/redBgShape.svg"
import orangeRightHeader from "../../images/orangeRightHeader.svg"
import greenLeftDiff from "../../images/greenLeftDiff.svg"
import greenRightDiff from "../../images/rgreenRightDiff.svg"

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <div class="container">
              <div class="logo">
                <h2 class="clr-orange">microProject about microAgressions</h2>
              </div>
              <div class="menu">
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </nav>
          <canvas></canvas>
        </header>
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
                It can also be defined as the everyday, subtle, intentional —
                and oftentimes unintentional — interactions or behaviors that
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
                Originally applied to describe insults against Black Americans
                and women. Later became largely accepted as a way for people to
                talk about a wide range of issues related to discrimination,
                offense, and exclusion against any marginalized group.
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

        <article class="examples">
          <div class="container">
            <h1> Examples of microagressions </h1>
            <p class="clr-salmon">
              {" "}
              Prof. Derald W. Sue demonstrates an example of microaggressions
              towards Asian Americans and Latin Americans, who are frequently
              complimented for ‘speaking good English,’“
            </p>
            <p class="clr-salmon">
              {" "}
              But there is a hidden communication the target experiences: ‘You
              speak excellent English’ to the target says 'You are not a true
              American. You're a perpetual alien in your own country'”
            </p>
          </div>
          <div class="green-container"></div>
        </article>

        <article>
          <div class="container difference">
            <img
              src={greenRightDiff}
              class="greenRightDiff"
              alt="Green Shad on the right"
            />
            <img
              src={greenLeftDiff}
              class="greenLeftDiff"
              alt="Green Shad on the left"
            />
            <h1>
              {" "}
              What makes microaggressions different from other rude or
              insensitive actions or comments?
            </h1>
            <p>
              {" "}
              Microaggressions are more than just insults, insensitive comments,
              or generalized jerky behavior.
              <br /> They're something very specific: the kinds of remarks,
              questions, or actions that are painful because they have to do
              with a person's membership in a group that's discriminated against
              or subject to stereotypes.
              <p>
                And a key part of what makes them so disconcerting is that they
                happen:
              </p>
            </p>
            <div class="grid">
              <span class="word1"> casually </span>
              <span class="word2"> frequently</span>
              <span class="word3"> without any harm intended </span>
              <span class="word4"> in everyday life </span>
            </div>
            <p class="diff-par-position">
              {" "}
              Oftentimes, people don't even realize that they're doing those
              sorts of things.
              <br /> And in fact, if you were to stop them and say, 'Why did you
              grab your purse when this person got closer?'
              <br />
              They would deny it because they don't recognize that their
              behaviors communicate their racial biases.
            </p>
          </div>
        </article>
        <article>
          <div class="container">
            <h1 class="clr-salmon">
              {" "}
              Common characteristics of Microaggressions{" "}
            </h1>
            <p>
              {" "}
              Microaggressions appear in a myriad of ways, they can be examined
              across many different dimensions of diversity, whether it be
              gender, sexuality, race, ethnicity, age, disability, and religion.
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
        <section>
          <div class="container">
            <img
              src={redBgShape}
              class="redBgShape"
              alt="Red shad as a background"
            />
            <h1 class="clr-black">
              {" "}
              Wait, has this ever happened to you as well?
            </h1>
            <CreatePhrase />
          </div>
        </section>
        <article class="bg-dark">
          <div class="container">
            <h1> What harms do Microaggressions cause? </h1>
            <div class="split">
              <div class="column">
                <p class="clr-white">
                  {" "}
                  “We do find the current climate in which it is hard to talk
                  about sensitive issues problematic. We do want to find a way
                  to create a culture where people can openly discuss sensitive
                  topics, thinking more about the underlying concepts and
                  feelings and less about the specific words that people use.
                  However, we also agree that the subtle ways that verbal and
                  nonverbal acts serve to exclude people have real and serious
                  consequences, both in the moment and cumulatively.”
                </p>
              </div>
              <div class="column">
                <p>
                  {" "}
                  Most of the time, such microinvalidations and aggressions are
                  disguised as humor. Often you might feel irritated and
                  'othered' by such comments and questions. You then question
                  your own judgment and your reaction, and wonder if you were
                  indeed over-reacting. But, making fun of someone's accent,
                  height or ethnicity is not a joke. The intent might not be
                  malicious, and it is mostly borne out of ignorance, but such
                  comments tend to reinforce the differences and the
                  non-conformity of any minority community from the majority
                  demographic.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default HomePage
