/* SECTION: what are microaggression? */

import React from "react"
import "../../styles/homePageStyles/definition-styles.css"
import headingBox from "../../images/blackBgShape1.svg"
import paragraphBox2 from "../../images/blackBgShape4.svg"
import term_chester from "../../images/term_ChesterMPierce.png"
import illust_def from "../../images/temp_ill_butwhat.png"
import shard_bottom from "../../images/systemicdiscrimination.png"
const Definition = () => {
  return (
    <div>
      <article>
        <div className="definition">
          <div>
            <div className="def1 shapeTextWrapper">
              <img
                src={headingBox}
                alt="black background"
                className="shapeImage shapeImgTop"
              />
              <h1 className="salmon-heading clr-red  heading">
                {" "}
                But, what are microaggressions?{" "}
              </h1>
              <p className="clr-white shapeText2" id="shapeTextTop">
                {" "}
                A microaggression is a comment or gesture (whether made
                intentionally or not) that feeds into stereotypes or negative
                assumptions created around oppressed or marginalized groups of
                people.
              </p>
            </div>
          </div>
          <div></div>
          <div className="def2 shapeTextWrapper">
            <p className="clr-white shapeText2" id="longTxt">
              It can also be defined as the everyday, subtle, intentional — and
              oftentimes unintentional — interactions or behaviors that
              communicate some sort of bias toward historically marginalized
              groups.
            </p>
          </div>
          <div className="def3">
            <img src={term_chester} alt="shard" />
          </div>
          <div className="def3_1">
            <img src={illust_def} alt="illustration" />
          </div>
          <div className="def4 shapeTextWrapper">
            <img src={paragraphBox2} alt="black shard" className="shapeImage" />
            <p className="clr-white shapeText2 finalTxt">
              Originally applied to describe insults against Black Americans and
              women. Later became largely accepted as a way for people to talk
              about a wide range of issues related to discrimination, offense,
              and exclusion against any marginalized group.
            </p>
          </div>
          <div className="def5">
            <img src={shard_bottom} alt="shard shape" />
          </div>
          <div className="space"></div>
        </div>
      </article>
    </div>
  )
}

export default Definition
