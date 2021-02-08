/* SECTION: common characteristics? */

import React from "react"
import "../../styles/homePageStyles/characteristics-styles.css"
import shard1 from "../../images/characteristics/shard_inadequate.png"
import shard2 from "../../images/characteristics/shard_notnormal.png"
import shard3 from "../../images/characteristics/shard_youareburden.png"
import shard4 from "../../images/characteristics/shard_youareathreat.png"
import shard5 from "../../images/characteristics/shard_youarecuriosity.png"
import shard6 from "../../images/characteristics/shard_youareinvisible.png"
import shard7 from "../../images/characteristics/shard_youarenotanindividual.png"
import shard8 from "../../images/characteristics/shard_youdontbelong.png"

import shard10 from "../../images/characteristics/shard_jamaica.png"
import shard20 from "../../images/characteristics/shard_muchodiscounto.png"
import shard30 from "../../images/characteristics/shard_professional.png"
import shard40 from "../../images/characteristics/shard_whereareyoureallyfrom2.png"

const Characteristics = () => {
  return (
    <div>
      <article className="characteristics bg-purple">
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
          <div className="grid-char">
            <img src={shard1} alt="inedequate" className="shapeImage" />
            <img src={shard2} alt="inedequate" className="shapeImage" />
            <img src={shard3} alt="inedequate" className="shapeImage" />
            <img src={shard4} alt="inedequate" className="shapeImage" />
            <img src={shard5} alt="inedequate" className="shapeImage" />
            <img src={shard6} alt="inedequate" className="shapeImage" />
            <img src={shard7} alt="inedequate" className="shapeImage" />
            <img src={shard8} alt="inedequate" className="shapeImage" />
          </div>
          <p>
            In many cases, Microaggressions are committed by people who are
            trying to be good people.
          </p>{" "}
          <p>
            Their intentions don’t have to be bad. Their intention is usually
            not to communicate: “You are a threat”, but rather they want to:
          </p>
          <div className="grid-char">
            <p className="ff-accent clr-red">complement:</p>
            <img src={shard30} alt="inedequate" className="shapeImage" />
            <p className="ff-accent clr-red">show comfort:</p>
            <img src={shard40} alt="inedequate" className="shapeImage" />
            <p className="ff-accent clr-red">be funny:</p>
            <img src={shard20} alt="inedequate" className="shapeImage" />
            <p className="ff-accent clr-red">be curious:</p>
            <img src={shard10} alt="inedequate" className="shapeImage" />
          </div>
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
