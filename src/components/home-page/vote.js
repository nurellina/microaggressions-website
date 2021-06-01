/* Section: Where you offended by that question - we feel you */

import React from "react"
import {useState, useEffect} from 'react';
import "../../styles/homePageStyles/vote-styles.css"
import question from "../../images/shard_wereyoueveroffended.png"
import yes from "../../images/yes_red.png"
import no from "../../images/no_red.png"
import Fade from 'react-reveal/Fade';

const Vote = () => {
  const [active1, setActive1] = React.useState(false)
  const [active2, setActive2] = React.useState(false)
  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 35);
   });
 }, []);
  return (
    <div>
      <section>
        <div className="vote">
          <div className="split">
            <div className="question-to-you">
              <div className="shapeTextWrapper">
                <img src={question} alt="question shard" className="shapeImage"/>
                
                <div className="vote-input1">
                  <img src={yes} onClick={() => setActive1(!active1)} alt="yes shard" className={scroll ? "hoverShake shapeImage1" : "shapeImage1"}/>
                </div>
                <div className="vote-input2">
                  <img src={no} alt="no shard" onClick={() => setActive2(!active2)} className={scroll ? "hoverShake shapeImage1 no" : "no shapeImage1"}/>
                </div>
              </div>
            </div>
            <div className="feel-you">
            {active1 && <Fade left><p className="clr-red ff-accent margin-bottom">
                {" "}
                Oh, we feel you{" "}
              </p></Fade>}
              {active2 && <Fade left><p className="clr-red">
                By the way 71% of people answered YES.
                <br />
                Which is quite a big amount...
                <br />
                <br />
                <br />
                All these questions can fall into the category of{" "}
                <span className="ff-accent">microaggressions</span>.
              </p></Fade>}
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
            <path d="M-5.7,206.4L866.6,61.2l348,260.9l-1218.8,9L-5.7,206.4z" />
          </svg>
        </div>
      </section>
    </div>
  )
}

export default Vote
