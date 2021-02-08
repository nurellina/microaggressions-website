import React, { useState } from "react"
import { motion } from "framer-motion"
import "../../styles/homePageStyles/examples-styles.css"
import shard1 from "../../images/shard1.png"
import shard2 from "../../images/shard2.png"
import shard3 from "../../images/shard3.png"
import shard4 from "../../images/shard4.png"
import shard5 from "../../images/shard5.png"
import shard6 from "../../images/shard6.png"
import shard7 from "../../images/shard7.png"
import shard8 from "../../images/shard8.png"
import shard9 from "../../images/shard9.png"
import shard10 from "../../images/shard10.png"

const Examples = () => {
  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(true)
  const [active3, setActive3] = useState(true)
  const [active4, setActive4] = useState(true)
  const [active5, setActive5] = useState(true)
  const [active6, setActive6] = useState(true)
  const [active7, setActive7] = useState(true)
  const [active8, setActive8] = useState(true)
  const [active9, setActive9] = useState(true)
  const [active10, setActive10] = useState(true)
  const variants = {
    active: { visibility: "visible" },
    disabled: { visibility: "hidden" },
  }

  return (
    <div>
      <article className="examples">
        <motion.img
          className="shard ex__shard1"
          variants={variants}
          animate={active1 ? "active" : "disabled"}
          onClick={() => setActive1(!active1)}
          src={shard1}
        />
        <motion.img
          animate={active2 ? "active" : "disabled"}
          variants={variants}
          onClick={() => setActive2(!active2)}
          src={shard2}
          className="shard ex__shard2"
        />
        <motion.img
          animate={active3 ? "active" : "disabled"}
          variants={variants}
          onClick={() => setActive3(!active3)}
          src={shard3}
          className="shard ex__shard3"
        />
        <motion.img
          animate={active4 ? "active" : "disabled"}
          variants={variants}
          onClick={() => setActive4(!active4)}
          src={shard4}
          className="shard ex__shard4"
        />
        <motion.img
          animate={active5 ? "active" : "disabled"}
          variants={variants}
          onClick={() => setActive5(!active5)}
          src={shard5}
          className="shard ex__shard5"
        />
        <motion.img
          animate={active6 ? "active" : "disabled"}
          variants={variants}
          onClick={() => setActive6(!active6)}
          src={shard6}
          className="shard ex__shard6"
        />
        <motion.img
          animate={active7 ? "active" : "disabled"}
          variants={variants}
          onClick={() => setActive7(!active7)}
          src={shard7}
          className="shard ex__shard7"
        />
        <motion.img
          animate={active8 ? "active" : "disabled"}
          variants={variants}
          onClick={() => setActive8(!active8)}
          src={shard8}
          className="shard ex__shard8"
        />
        <motion.img
          animate={active9 ? "active" : "disabled"}
          variants={variants}
          onClick={() => setActive9(!active9)}
          src={shard9}
          className="shard ex__shard9"
        />
        <motion.img
          animate={active10 ? "active" : "disabled"}
          variants={variants}
          onClick={() => setActive10(!active10)}
          src={shard10}
          className="shard ex__shard10"
        />
        <div className="container">
          <h1 className="clr-red"> Examples of microagressions </h1>
          <p>
            {" "}
            Prof. Derald W. Sue demonstrates an example of microaggressions
            towards Asian Americans and Latin Americans, who are frequently
            complimented for{" "}
            <span className="ff-accent clr-red"> ‘speaking good English,’</span>
          </p>
          <p>
            {" "}
            But there is a hidden communication the target experiences: ‘You
            speak excellent English’ to the target says{" "}
            <span className="ff-accent clr-red">
              'You are not a true American. You're a perpetual alien in your own
              country'.
            </span>
          </p>
        </div>
      </article>
    </div>
  )
}

export default Examples
