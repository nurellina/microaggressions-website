import React from "react"
import greenLeft from "../../images/greenLeft.svg"
import greenRight from "../../images/greenRight.svg"
import "../../styles/homePageStyles/difference-styles.css"

const Difference = () => {
  return (
    <div>
      <article>
        <div class="container difference">
          <img
            src={greenRight}
            class="greenRightDiff"
            alt="Green Shad on the right"
          />
          <img
            src={greenLeft}
            class="greenLeftDiff"
            alt="Green Shad on the left"
          />
          <h1>
            {" "}
            What makes microaggressions different from other rude or insensitive
            actions or comments?
          </h1>
          <p>
            {" "}
            Microaggressions are more than just insults, insensitive comments,
            or generalized jerky behavior.
            <br /> They're something very specific: the kinds of remarks,
            questions, or actions that are painful because they have to do with
            a person's membership in a group that's discriminated against or
            subject to stereotypes.
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
            Oftentimes, people don't even realize that they're doing those sorts
            of things.
            <br /> And in fact, if you were to stop them and say, 'Why did you
            grab your purse when this person got closer?'
            <br />
            They would deny it because they don't recognize that their behaviors
            communicate their racial biases.
          </p>
        </div>
      </article>
    </div>
  )
}

export default Difference
