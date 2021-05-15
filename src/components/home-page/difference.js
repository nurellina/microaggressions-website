import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import greenLeft from "../../images//difference/illus1.png"
import greenRight from "../../images/difference/illus2.png"
import "../../styles/homePageStyles/difference-styles.css"
function FadeInWhenVisible({ children }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}
const Difference = () => {
  return (
    <div>
      <article className="difference">
        <div className="container">
          <h1 className="clr-red">
            {" "}
            What makes microaggressions different from other rude or insensitive
            actions or comments?
          </h1>
          <img
            src={greenRight}
            className="greenRightDiff"
            alt="Green Shad on the right"
          />
          <p>
            {" "}
            Microaggressions are more than just insults, insensitive comments,
            or generalized jerky behavior.
            <br /> They're something very specific: the kinds of remarks,
            questions, or actions that are painful because they have to do with
            a person's membership in a group that's discriminated against or
            subject to stereotypes.
          </p>
          <p>
            And a key part of what makes them so disconcerting is that they
            happen:
          </p>
          <FadeInWhenVisible>
            <div className="grid">
              <span className="word1"> casually</span>

              <span className="word2"> frequently</span>
              <span className="word3"> without any harm intended </span>
              <span className="word4"> in everyday life </span>
            </div>
          </FadeInWhenVisible>
          <img
            src={greenLeft}
            className="greenLeftDiff"
            alt="Green Shad on the left"
          />
          <p className="diff-par-position">
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
              d="M0,192L480,224L960,64L1440,224L1440,320L960,320L480,320L0,320Z"
            ></path>
          </svg>
        </div>
      </article>
    </div>
  )
}

export default Difference
